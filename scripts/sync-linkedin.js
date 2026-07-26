const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const DATA_FILE = path.join(__dirname, '../public/data/live-updates.json');

// Default RSS URL (can be customized or passed via env LINKEDIN_RSS_URL)
const DEFAULT_RSS_URL = process.env.LINKEDIN_RSS_URL || '';

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

function saveUpdates(updates) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(updates, null, 2), 'utf8');
    console.log(`[RSS Sync] Successfully updated ${updates.length} items in live-updates.json`);
  } catch (err) {
    console.error('[RSS Sync] Error saving live-updates.json:', err);
  }
}

function fetchRSS(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchRSS(res.headers.location).then(resolve).catch(reject);
      }
      let xml = '';
      res.on('data', chunk => xml += chunk);
      res.on('end', () => resolve(xml));
    }).on('error', reject);
  });
}

async function runSync() {
  console.log('=== STARTING LINKEDIN RSS AUTOMATIC SYNC ===');
  let currentUpdates = getExistingUpdates();

  if (!DEFAULT_RSS_URL) {
    console.log('[RSS Sync] LINKEDIN_RSS_URL environment variable is not defined.');
    console.log('[RSS Sync] Maintaining existing feed items in live-updates.json.');
    return;
  }

  try {
    console.log(`[RSS Sync] Fetching RSS feed from: ${DEFAULT_RSS_URL}`);
    const xml = await fetchRSS(DEFAULT_RSS_URL);
    
    // Parse RSS <item> tags
    const itemRegex = /<item>[\s\S]*?<title>(.*?)<\/title>[\s\S]*?<link>(.*?)<\/link>[\s\S]*?<description>(.*?)<\/description>[\s\S]*?<\/item>/gi;
    let match;
    let newItemsCount = 0;

    while ((match = itemRegex.exec(xml)) !== null && newItemsCount < 5) {
      const rawTitle = match[1] || '';
      const rawLink = match[2] || '';
      const rawDesc = match[3] || '';

      const title = rawTitle.replace(/<!\[CDATA\[(.*?)\]\]>/gi, '$1').replace(/<[^>]+>/g, '').trim();
      const link = rawLink.replace(/<!\[CDATA\[(.*?)\]\]>/gi, '$1').trim();
      const summary = rawDesc.replace(/<!\[CDATA\[(.*?)\]\]>/gi, '$1').replace(/<[^>]+>/g, '').slice(0, 160).trim();

      if (link && !currentUpdates.some(item => item.link === link)) {
        currentUpdates.unshift({
          id: `up-rss-${Date.now()}-${newItemsCount}`,
          type: 'LINKEDIN_POST',
          title: title || 'Nova Publicação no LinkedIn',
          date: 'RECENTE',
          summary: summary || 'Confira a nova publicação completa no perfil.',
          link: link,
          tag: 'LinkedIn RSS Feed'
        });
        newItemsCount++;
      }
    }

    if (newItemsCount > 0) {
      console.log(`[RSS Sync] Added ${newItemsCount} new items from RSS feed.`);
      saveUpdates(currentUpdates);
    } else {
      console.log('[RSS Sync] No new items found in RSS feed.');
    }
  } catch (err) {
    console.error('[RSS Sync] Error fetching or parsing RSS feed:', err.message);
  }
}

runSync();
