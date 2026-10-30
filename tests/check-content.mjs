import { PRIMARY_PROJECTS } from '../src/content/projects.ts';

console.log(`Checking ${PRIMARY_PROJECTS.length} primary projects...`);
let allValid = true;

for (const p of PRIMARY_PROJECTS) {
  const enSummary = p.shortSummary.en.trim();
  const ptSummary = p.shortSummary.pt.trim();
  const enWords = enSummary.split(/\s+/).length;
  const ptWords = ptSummary.split(/\s+/).length;

  console.log(`[${p.slug}] EN (${enWords} words): "${enSummary}"`);
  console.log(`[${p.slug}] PT (${ptWords} words): "${ptSummary}"`);

  if (enWords < 12 || enWords > 22) {
    console.error(`ERROR: [${p.slug}] EN word count ${enWords} is outside [12, 22] range!`);
    allValid = false;
  }
  if (ptWords < 12 || ptWords > 22) {
    console.error(`ERROR: [${p.slug}] PT word count ${ptWords} is outside [12, 22] range!`);
    allValid = false;
  }
}

if (!allValid) {
  process.exit(1);
} else {
  console.log('ALL PROJECTS MEET THE 12-22 WORDS SHORT SUMMARY CONTRACT!');
}
