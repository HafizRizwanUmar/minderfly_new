const fs = require('fs');
const path = require('path');

const dir = 'src/data/products';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') && f !== 'index.js');

const urls = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // Extract product slug
  const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
  if (slugMatch) {
    const pSlug = slugMatch[1];
    urls.push(`https://minderfly.com/products/${pSlug}`);
    
    // Check if it has news
    const newsMatch = content.match(/news:\s*\[([\s\S]*?)\]/);
    if (newsMatch) {
      const newsContent = newsMatch[1];
      const articleSlugs = [...newsContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(x => x[1]);
      
      if (articleSlugs.length > 0) {
        urls.push(`https://minderfly.com/products/${pSlug}/news`);
        articleSlugs.forEach(aSlug => {
          urls.push(`https://minderfly.com/products/${pSlug}/news/${aSlug}`);
        });
      }
    }
  }
});

console.log(urls.join('\n'));
