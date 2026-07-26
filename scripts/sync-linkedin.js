const fs = require('fs');
const path = require('path');
const https = require('https');

const DATA_FILE = path.join(__dirname, '../public/data/live-updates.json');

// Helper to read existing updates
function getExistingUpdates() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading live-updates.json:', err);
  }
  return [];
}

// Helper to write updates
function saveUpdates(updates) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(updates, null, 2), 'utf8');
    console.log(`Successfully updated ${updates.length} items in live-updates.json`);
  } catch (err) {
    console.error('Error saving live-updates.json:', err);
  }
}

// Main sync logic
async function runSync() {
  console.log('=== STARTING LINKEDIN & GITHUB NATIVE SYNC ===');
  
  let currentUpdates = getExistingUpdates();

  // Check if a payload was passed via environment variable (e.g. from Webhook / n8n / GitHub Action)
  const webhookPayload = process.env.LINKEDIN_WEBHOOK_PAYLOAD;

  if (webhookPayload) {
    try {
      const data = JSON.parse(webhookPayload);
      console.log('Received Webhook payload:', data);

      const newPost = {
        id: `up-linked-${Date.now()}`,
        type: 'LINKEDIN_POST',
        title: data.title || data.text?.slice(0, 70) || 'Novo Post no LinkedIn',
        date: 'HOJE',
        summary: data.summary || data.text || 'Confira a nova publicação no LinkedIn.',
        link: data.link || 'https://www.linkedin.com/in/andré-victor-andrade-oliveira-santos-22b142208',
        tag: 'LinkedIn Post'
      };

      // Filter out duplicate link if exists
      currentUpdates = currentUpdates.filter(item => item.link !== newPost.link);
      currentUpdates.unshift(newPost);
      saveUpdates(currentUpdates);
      return;
    } catch (e) {
      console.error('Error parsing LINKEDIN_WEBHOOK_PAYLOAD:', e);
    }
  }

  // Fallback RSS Feed fetch if LINKEDIN_RSS_URL is provided in GitHub Secrets
  const rssUrl = process.env.LINKEDIN_RSS_URL;
  if (rssUrl) {
    console.log('Fetching LinkedIn feed from RSS URL...');
    https.get(rssUrl, (res) => {
      let xml = '';
      res.on('data', chunk => xml += chunk);
      res.on('end', () => {
        console.log('RSS Feed fetched successfully. Processing items...');
        // Match items using simple regex
        const itemRegex = /<item>[\s\S]*?<title>(.*?)<\/title>[\s\S]*?<link>(.*?)<\/link>[\s\S]*?<description>(.*?)<\/description>/gi;
        let match;
        let addedCount = 0;

        while ((match = itemRegex.exec(xml)) !== null && addedCount < 3) {
          const title = match[1].replace(/<!\[CDATA\[(.*?)\]\]>/gi, '$1').trim();
          const link = match[2].trim();
          const summary = match[3].replace(/<[^>]+>/g, '').replace(/<!\[CDATA\[(.*?)\]\]>/gi, '$1').slice(0, 150).trim();

          if (link && !currentUpdates.some(item => item.link === link)) {
            currentUpdates.unshift({
              id: `up-rss-${Date.now()}-${addedCount}`,
              type: 'LINKEDIN_POST',
              title: title || 'Nova Publicação no LinkedIn',
              date: 'RECENTE',
              summary: summary || 'Acesse para ler a publicação completa.',
              link: link,
              tag: 'LinkedIn Post'
            });
            addedCount++;
          }
        }

        saveUpdates(currentUpdates);
      });
    }).on('error', (err) => {
      console.error('RSS fetch error:', err.message);
    });
  } else {
    console.log('No LINKEDIN_RSS_URL or LINKEDIN_WEBHOOK_PAYLOAD provided. Keeping current live-updates.json intact.');
  }
}

runSync();
