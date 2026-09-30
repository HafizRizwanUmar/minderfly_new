const fs = require('fs');
const path = require('path');

const dir = 'src/data/cinemafly article';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

let jsOutput = "export const cinemaflyNewsArticles = [\n";

files.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const lines = content.split('\n');
  
  let title = '';
  let bodyLines = [];
  
  for(let i=0; i<lines.length; i++) {
    if(lines[i].startsWith('# ') && !title) {
      title = lines[i].replace('# ', '').trim();
    } else {
      bodyLines.push(lines[i]);
    }
  }
  
  const bodyText = bodyLines.join('\n').trim();
  const slug = file.replace('.md', '').replace(/^\d+-/, ''); // Remove leading numbers
  
  // Extract summary (first non-empty, non-header paragraph)
  let summary = '';
  for(let i=0; i<bodyLines.length; i++) {
    const line = bodyLines[i].trim();
    if(line && !line.startsWith('#')) {
      summary = line;
      if(summary.length > 200) {
        summary = summary.substring(0, 200) + '...';
      }
      break;
    }
  }

  jsOutput += `  {
    slug: '${slug}',
    title: ${JSON.stringify(title)},
    date: 'September 11, 2026',
    summary: ${JSON.stringify(summary)},
    readTime: '10 min read',
    category: 'Deep Dive',
    body: ${JSON.stringify(bodyText)}
  },\n`;
});

jsOutput += "];\n";

fs.writeFileSync('src/data/cinemaflyNews.js', jsOutput, 'utf8');
console.log('Successfully generated cinemaflyNews.js with ' + files.length + ' articles.');
