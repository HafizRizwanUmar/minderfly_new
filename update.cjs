const fs = require('fs');
const files = ['storeflow.js', 'debtsettler.js', 'framefly.js', 'pomofly.js', 'civilcalc.js', 'nishan.js'];
files.forEach(f => {
  const path = 'src/data/products/' + f;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/platforms:\s*\[.*?\],/, "platforms: ['Windows'],");
  fs.writeFileSync(path, content);
});
console.log('done');
