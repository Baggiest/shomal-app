const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const assets = [
  { url: 'https://ext.same-assets.com/2455557907/2731281808.jpeg', filename: 'product-category-1.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/2458856376.jpeg', filename: 'product-category-2.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/1277383542.jpeg', filename: 'product-category-3.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/710153250.png', filename: 'product-category-4.png' },
  { url: 'https://ext.same-assets.com/2455557907/3730419720.jpeg', filename: 'product-category-5.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/3041832876.jpeg', filename: 'product-category-6.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/2288531115.jpeg', filename: 'product-category-7.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/2906518887.jpeg', filename: 'product-category-8.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/2858417015.jpeg', filename: 'industry-1.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/2657391398.jpeg', filename: 'industry-2.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/50169031.jpeg', filename: 'industry-3.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/533932738.jpeg', filename: 'industry-4.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/2600615083.jpeg', filename: 'industry-5.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/2538302585.jpeg', filename: 'industry-6.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/2466112164.jpeg', filename: 'industry-7.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/1858527570.jpeg', filename: 'hero-background.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/4283118843.jpeg', filename: 'product-showcase-background.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/3250288881.png', filename: 'product-ljb-1s.png' },
  { url: 'https://ext.same-assets.com/2455557907/926858262.png', filename: 'logo.png' },
  { url: 'https://ext.same-assets.com/2455557907/2590094435.svg', filename: 'flag-persian.svg' },
  { url: 'https://ext.same-assets.com/2455557907/2995777435.jpeg', filename: 'map.jpeg' },
  { url: 'https://ext.same-assets.com/2455557907/2554344160.png', filename: 'icon-location.png' },
  { url: 'https://ext.same-assets.com/2455557907/3888284797.png', filename: 'icon-phone.png' },
  { url: 'https://ext.same-assets.com/2455557907/1736423826.png', filename: 'icon-fax.png' },
  { url: 'https://ext.same-assets.com/2455557907/2936515759.png', filename: 'icon-phone-alt.png' },
  { url: 'https://ext.same-assets.com/2455557907/746589440.png', filename: 'icon-email.png' },
  { url: 'https://ext.same-assets.com/2455557907/2705101883.png', filename: 'favicon.png' },
];

const outputDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadFile(url, filepath, retries = 3) {
  return new Promise((resolve, reject) => {
    const attemptDownload = (attempt) => {
      const file = fs.createWriteStream(filepath);
      const protocol = url.startsWith('https') ? https : http;
      
      const request = protocol.get(url, {
        timeout: 30000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }, (response) => {
        if (response.statusCode === 200) {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        } else if (response.statusCode === 301 || response.statusCode === 302) {
          file.close();
          fs.unlinkSync(filepath);
          if (attempt > 0) {
            setTimeout(() => attemptDownload(attempt - 1), 1000);
          } else {
            downloadFile(response.headers.location, filepath, retries).then(resolve).catch(reject);
          }
        } else {
          file.close();
          if (fs.existsSync(filepath)) {
            fs.unlinkSync(filepath);
          }
          if (attempt > 0) {
            setTimeout(() => attemptDownload(attempt - 1), 2000);
          } else {
            reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
          }
        }
      });

      request.on('error', (err) => {
        file.close();
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
        if (attempt > 0) {
          setTimeout(() => attemptDownload(attempt - 1), 2000);
        } else {
          reject(err);
        }
      });

      request.on('timeout', () => {
        request.destroy();
        file.close();
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
        if (attempt > 0) {
          setTimeout(() => attemptDownload(attempt - 1), 2000);
        } else {
          reject(new Error(`Timeout downloading ${url}`));
        }
      });
    };

    attemptDownload(retries);
  });
}

async function downloadAll() {
  console.log(`Downloading ${assets.length} assets to ${outputDir}...\n`);
  
  const results = { success: 0, failed: 0 };
  
  for (let i = 0; i < assets.length; i++) {
    const asset = assets[i];
    const filepath = path.join(outputDir, asset.filename);
    
    if (fs.existsSync(filepath)) {
      const stats = fs.statSync(filepath);
      if (stats.size > 0) {
        console.log(`[${i + 1}/${assets.length}] ✓ Already exists: ${asset.filename}`);
        results.success++;
        continue;
      }
    }
    
    try {
      console.log(`[${i + 1}/${assets.length}] Downloading ${asset.filename}...`);
      await downloadFile(asset.url, filepath);
      console.log(`  ✓ Downloaded ${asset.filename}\n`);
      results.success++;
    } catch (error) {
      console.error(`  ✗ Failed to download ${asset.filename}: ${error.message}\n`);
      results.failed++;
    }
  }
  
  console.log(`\nDownload complete!`);
  console.log(`Success: ${results.success}, Failed: ${results.failed}`);
}

downloadAll().catch(console.error);
