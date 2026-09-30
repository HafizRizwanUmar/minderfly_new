const fs = require('fs');
const path = require('path');

const dir = 'src/data/cinemafly article';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

const sitemapPath = 'public/sitemap.xml';
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

let newUrls = '';
files.forEach(file => {
  const slug = file.replace('.md', '').replace(/^\d+-/, '');
  newUrls += `
  <url>
    <loc>https://minderfly.com/products/cinemafly/news/${slug}</loc>
    <lastmod>2026-09-11</lastmod>
    <changefreq>yearly</changefreq>
  </url>`;
});

sitemap = sitemap.replace('</urlset>', newUrls + '\n</urlset>');

fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log('Sitemap updated with ' + files.length + ' new URLs.');
