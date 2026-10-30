import { test, expect } from '@playwright/test';

// Breakpoints specified in acceptance criteria
const BREAKPOINTS = [
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'tablet-1024', width: 1024, height: 768 },
  { name: 'desktop-1440', width: 1440, height: 900 },
];

test.describe('Visual & Layout Verification', () => {
  test('Dark mode default on clean load with no white flash (#14171B)', async ({ page }) => {
    // Clear any stored preferences to simulate clean first load
    await page.addInitScript(() => {
      window.localStorage.clear();
      window.sessionStorage.clear();
    });

    await page.goto('/');

    // Check data-theme on <html> is "dark"
    const htmlTheme = await page.locator('html').getAttribute('data-theme');
    expect(htmlTheme).toBe('dark');

    // Check computed background color is dark canvas rgb(20, 23, 27) (#14171B)
    const bodyBg = await page.evaluate(() => {
      const el = document.body;
      return window.getComputedStyle(el).backgroundColor;
    });
    expect(bodyBg).toBe('rgb(20, 23, 27)');

    // Verify no deprecated sage or bronze CSS variables exist in computed styles
    const deprecatedStyles = await page.evaluate(() => {
      const style = window.getComputedStyle(document.documentElement);
      const sage = style.getPropertyValue('--sage') || style.getPropertyValue('--color-sage');
      const bronze = style.getPropertyValue('--bronze') || style.getPropertyValue('--color-bronze');
      return { sage, bronze };
    });
    expect(deprecatedStyles.sage).toBe('');
    expect(deprecatedStyles.bronze).toBe('');
  });

  test('Theme toggle switches to light mode and back to dark mode', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');

    // Select theme button visible in current viewport (desktop or mobile header)
    const isMobile = (page.viewportSize()?.width ?? 1440) < 768;
    const themeBtn = isMobile
      ? page.locator('header div.md\\:hidden button:has(svg.lucide-moon), header div.md\\:hidden button:has(svg.lucide-sun)')
      : page.locator('header div.hidden.md\\:flex button:has(svg.lucide-moon), header div.hidden.md\\:flex button:has(svg.lucide-sun)');

    await expect(themeBtn).toBeVisible();
    await themeBtn.click();
    await expect(html).toHaveAttribute('data-theme', 'light');

    // Toggle back
    await themeBtn.click();
    await expect(html).toHaveAttribute('data-theme', 'dark');
  });

  test('Zero horizontal page overflow across all specified breakpoints', async ({ page }) => {
    for (const bp of BREAKPOINTS) {
      await page.setViewportSize({ width: bp.width, height: bp.height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.clientWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const bodyScrollWidth = document.body.scrollWidth;
        return {
          docWidth,
          scrollWidth,
          bodyScrollWidth,
          hasOverflow: scrollWidth > docWidth || bodyScrollWidth > docWidth,
        };
      });

      expect(
        overflow.hasOverflow,
        `Viewport ${bp.name} (${bp.width}px) has horizontal overflow: scrollWidth=${overflow.scrollWidth}, docWidth=${overflow.docWidth}`
      ).toBe(false);
    }
  });
});

test.describe('Navbar & Brand Identity', () => {
  test('Navbar contains CDX monogram (not AV) and 5 primary destinations', async ({ page }) => {
    await page.goto('/');

    // Check CDX monogram presence
    const brandLink = page.locator('header a[href="#top"]');
    await expect(brandLink).toBeVisible();
    await expect(brandLink.locator('img[alt="CDX"]')).toBeVisible();
    await expect(brandLink).toContainText('CDX');
    await expect(brandLink).not.toContainText('AV');

    // Check 5 primary destinations: Work, Journey, About, Credentials, Contact
    const isMobile = (page.viewportSize()?.width ?? 1440) < 768;
    if (isMobile) {
      const mobileMenuBtn = page.locator('header button[aria-controls="mobile-navigation-drawer"]');
      await mobileMenuBtn.click();
      const drawerLinks = page.locator('#mobile-navigation-drawer nav a[href^="#"]');
      await expect(drawerLinks).toHaveCount(5);
      const hrefs = await drawerLinks.evaluateAll((links) => links.map((l) => l.getAttribute('href')));
      expect(hrefs).toEqual(['#work', '#journey', '#about', '#credentials', '#contact']);
      await page.keyboard.press('Escape');
    } else {
      const desktopNav = page.locator('header nav[aria-label*="Navegação"], header nav[aria-label*="navigation"]').first();
      const navLinks = desktopNav.locator('a');
      await expect(navLinks).toHaveCount(5);
      const hrefs = await navLinks.evaluateAll((links) => links.map((l) => l.getAttribute('href')));
      expect(hrefs).toEqual(['#work', '#journey', '#about', '#credentials', '#contact']);
    }
  });

  test('Navbar remains fully visible and responsive between 768px and 1279px', async ({ page }) => {
    const testWidths = [768, 896, 1024, 1152, 1279];

    for (const width of testWidths) {
      await page.setViewportSize({ width, height: 800 });
      await page.goto('/');

      const header = page.locator('header');
      await expect(header).toBeVisible();

      // Ensure brand monogram and controls or nav items are visible
      const brand = header.locator('a[href="#top"]');
      await expect(brand).toBeVisible();

      // Desktop nav is visible (>= 768px)
      const desktopNav = header.locator('nav[aria-label*="Navegação"], nav[aria-label*="navigation"]').first();
      await expect(desktopNav).toBeVisible();
    }
  });

  test('Mobile navigation drawer operates cleanly at 390px with Escape keyboard dismissal', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const mobileMenuBtn = page.locator('header button[aria-controls="mobile-navigation-drawer"]');
    await expect(mobileMenuBtn).toBeVisible();
    await expect(mobileMenuBtn).toHaveAttribute('aria-expanded', 'false');

    // Open mobile menu
    await mobileMenuBtn.click();
    await expect(mobileMenuBtn).toHaveAttribute('aria-expanded', 'true');

    const drawer = page.locator('#mobile-navigation-drawer');
    await expect(drawer).toBeVisible();

    // Verify 5 links in mobile drawer
    const drawerLinks = drawer.locator('nav a[href^="#"]');
    await expect(drawerLinks).toHaveCount(5);

    // Press Escape to dismiss
    await page.keyboard.press('Escape');
    await expect(mobileMenuBtn).toHaveAttribute('aria-expanded', 'false');
    await expect(drawer).not.toBeVisible();
  });
});

test.describe('Hero Section Verification', () => {
  test('Hero H1 is 6-12 words, subheadline <= 24 words, and has exactly 2 CTAs', async ({ page }) => {
    await page.goto('/');

    const h1Text = (await page.locator('#top h1').innerText()).trim();
    const h1WordCount = h1Text.split(/\s+/).length;
    expect(h1WordCount).toBeGreaterThanOrEqual(6);
    expect(h1WordCount).toBeLessThanOrEqual(12);

    const subheadlineText = (await page.locator('#top p.text-muted').first().innerText()).trim();
    const subheadlineWordCount = subheadlineText.split(/\s+/).length;
    expect(subheadlineWordCount).toBeLessThanOrEqual(24);

    // Exactly 2 primary CTAs
    const ctas = page.locator('#top a[href="#work"], #top a[href="#contact"]');
    await expect(ctas).toHaveCount(2);

    // Zero fact cards or pseudo-telemetry in Hero
    const factCards = page.locator('#top [data-fact-card], #top .fact-card');
    await expect(factCards).toHaveCount(0);
  });

  test('Hero integrates Apex mascot with real photo and removes standalone Apex card from About', async ({ page }) => {
    await page.goto('/');

    // Check Hero portrait contains mascot
    const heroImage = page.locator('#top figure img');
    await expect(heroImage).toBeVisible();
    const heroImgSrc = await heroImage.getAttribute('src');
    expect(heroImgSrc).toContain('andre-portrait-apex');

    // Check Apex Buddy badge in figure caption
    const apexBadge = page.locator('#top figcaption');
    await expect(apexBadge).toContainText('Apex Buddy');

    // Check About section does NOT contain standalone Apex card
    const aboutSection = page.locator('#about');
    const standaloneApexCard = aboutSection.locator('[data-apex-card], .apex-card');
    await expect(standaloneApexCard).toHaveCount(0);
  });
});

test.describe('TechStackCarousel Verification', () => {
  test('Contains curated technologies with manual navigation and bound limits', async ({ page }) => {
    await page.goto('/');

    const techSection = page.locator('#tech-stack');
    await expect(techSection).toBeVisible();

    // Verify technology slides
    const techSlides = techSection.locator('[role="region"] > [role="group"]');
    await expect(techSlides).toHaveCount(35);

    // Verify NO marquee/ticker animation is used
    const marqueeElements = techSection.locator('marquee, .marquee, [data-marquee]');
    await expect(marqueeElements).toHaveCount(0);

    // Verify Previous button is initially disabled at boundary
    const prevBtn = techSection.locator('button[aria-label*="anterior"], button[aria-label*="Previous"]');
    const nextBtn = techSection.locator('button[aria-label*="Próximas"], button[aria-label*="Next"]');

    await expect(prevBtn).toBeDisabled();
    await expect(nextBtn).toBeEnabled();

    // Click Next button to advance carousel
    await nextBtn.click();
    await page.waitForTimeout(400);

    // Previous button should now be enabled
    await expect(prevBtn).toBeEnabled();
  });
});

test.describe('MyJourney Timeline Verification', () => {
  test('Presents 6 chronological career milestones with desktop keyboard nav and mobile vertical layout', async ({ page }) => {
    const isMobile = (page.viewportSize()?.width ?? 1440) < 768;
    await page.goto('/');

    const journeySection = page.locator('#journey');
    await expect(journeySection).toBeVisible();

    if (!isMobile) {
      // Check 6 milestones in tablist on desktop / tablet
      const tabs = journeySection.locator('[role="tablist"] [role="tab"]');
      await expect(tabs).toHaveCount(6);

      // Test keyboard navigation
      await tabs.first().focus();
      await page.keyboard.press('ArrowRight');
      await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');

      await page.keyboard.press('End');
      await expect(tabs.nth(5)).toHaveAttribute('aria-selected', 'true');

      await page.keyboard.press('Home');
      await expect(tabs.first()).toHaveAttribute('aria-selected', 'true');
    } else {
      // Mobile View: Vertical timeline layout
      const mobileTimeline = journeySection.locator('ol[aria-label*="tempo"], ol[aria-label*="timeline"]');
      await expect(mobileTimeline).toBeVisible();

      const mobileMilestones = mobileTimeline.locator('li');
      await expect(mobileMilestones).toHaveCount(6);
    }
  });
});

test.describe('Public OpenUI Removal Verification', () => {
  test('Zero occurrences of public OpenUI in DOM, navigation, or metadata', async ({ page }) => {
    await page.goto('/');

    // Check DOM for OpenUI section
    const openuiSection = page.locator('#openui, [data-openui], section:has-text("Explore My Work via OpenUI")');
    await expect(openuiSection).toHaveCount(0);

    // Check navigation for OpenUI link
    const openuiNav = page.locator('header a[href*="openui"]');
    await expect(openuiNav).toHaveCount(0);

    // Check page text content does not mention OpenUI exploratory UI
    const pageContent = await page.content();
    expect(pageContent).not.toContain('Explore My Work via OpenUI');
    expect(pageContent).not.toContain('ExploreMyWorkOpenUI');
  });
});

test.describe('GEAR Synthesis & Case Study Disclosures', () => {
  test('GEAR synthesis on homepage has <= 60 words, 3 visual pillars, and links to /work/gear/', async ({ page }) => {
    await page.goto('/');

    const gearSection = page.locator('#gear');
    await expect(gearSection).toBeVisible();

    // Check synthesis text word count
    const synthesisText = (await gearSection.locator('p.font-serif').innerText()).replace(/[“”"]/g, '').trim();
    const wordCount = synthesisText.split(/\s+/).length;
    expect(wordCount).toBeLessThanOrEqual(60);

    // Check 3 visual pillars
    const pillars = gearSection.locator('article');
    await expect(pillars).toHaveCount(3);

    // Check link to /work/gear/
    const gearLink = gearSection.locator('a[href="/work/gear/"]');
    await expect(gearLink.first()).toBeVisible();
  });

  test('/work/gear/ and /work/axiom-tech/ use native <details>/<summary> disclosures for deep technical sections', async ({ page }) => {
    // Check GEAR case study
    await page.goto('/work/gear/');
    const gearDisclosures = page.locator('details');
    const gearDisclosureCount = await gearDisclosures.count();
    expect(gearDisclosureCount).toBeGreaterThanOrEqual(1);

    // Check Axiom Tech case study
    await page.goto('/work/axiom-tech/');
    const axiomDisclosures = page.locator('details');
    const axiomDisclosureCount = await axiomDisclosures.count();
    expect(axiomDisclosureCount).toBeGreaterThanOrEqual(1);
  });
});

test.describe('Project Cards Editorial Reform & Jev Gateway Attribution', () => {
  test('Project cards short summaries are 12-22 words with max 3 tags per card', async ({ page }) => {
    await page.goto('/');

    const projectCards = page.locator('#work article:has(h3)');
    const count = await projectCards.count();
    expect(count).toBeGreaterThanOrEqual(6);

    for (let i = 0; i < count; i++) {
      const card = projectCards.nth(i);
      // The short summary is the paragraph directly after h3
      const summaryText = (await card.locator('h3 + p').innerText()).trim();
      const words = summaryText.split(/\s+/).length;
      expect(
        words,
        `Project card #${i + 1} summary "${summaryText}" must have 12-22 words (got ${words})`
      ).toBeGreaterThanOrEqual(12);
      expect(
        words,
        `Project card #${i + 1} summary "${summaryText}" must have 12-22 words (got ${words})`
      ).toBeLessThanOrEqual(22);

      // Verify max 3 tech stack tags displayed on card in the footer section
      const stackTags = card.locator('.mt-6.border-t > div:first-child > span');
      const tagCount = await stackTags.count();
      expect(tagCount).toBeGreaterThanOrEqual(1);
      expect(tagCount).toBeLessThanOrEqual(3);
    }
  });

  test('Jev Gateway case study attributes PR #5 (merged) and PR #16 (open proposal) with direct upstream links', async ({ page }) => {
    await page.goto('/work/jev-gateway/');

    const pageText = await page.content();

    // Verify PR #5 merged attribution
    expect(pageText).toMatch(/PR #5.*(Merged|merged|Incorporado|incorporado)/i);

    // Verify PR #16 open proposal attribution
    expect(pageText).toMatch(/PR #16.*(Open|open|Proposta|proposta)/i);

    // Verify upstream pull request links
    const pr5Link = page.locator('a[href="https://github.com/vinilana/jev-gateway/pull/5"]');
    await expect(pr5Link.first()).toBeVisible();

    const pr16Link = page.locator('a[href="https://github.com/vinilana/jev-gateway/pull/16"]');
    await expect(pr16Link.first()).toBeVisible();
  });
});

test.describe('Contact Section & Conversion Ergonomics', () => {
  test('Contact section and Footer have 0 CV download buttons and direct conversion channels', async ({ page }) => {
    await page.goto('/');

    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();

    // Zero CV download buttons in Contact
    const contactCvBtns = contactSection.locator('a[download], a[href*="resume"], a[href*="curriculo"], button:has-text("CV"), button:has-text("Currículo")');
    await expect(contactCvBtns).toHaveCount(0);

    // Zero CV download buttons in Footer
    const footerSection = page.locator('footer');
    const footerCvBtns = footerSection.locator('a[download], a[href*="resume"], a[href*="curriculo"], button:has-text("CV")');
    await expect(footerCvBtns).toHaveCount(0);

    // Direct conversion links in Contact: mailto, GitHub, LinkedIn
    const mailtoLink = contactSection.locator('a[href^="mailto:andrevictorandrade@gmail.com"]');
    await expect(mailtoLink.first()).toBeVisible();

    const githubLink = contactSection.locator('a[href*="github.com/andrecodexvictor"]');
    await expect(githubLink.first()).toBeVisible();

    const linkedinLink = contactSection.locator('a[href*="linkedin.com"]');
    await expect(linkedinLink.first()).toBeVisible();
  });
});
