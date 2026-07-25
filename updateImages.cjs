const fs = require('fs');
const path = require('path');

const mappings = {
  cinemafly: {
    logo: '/products/logo/cinemafly (2).png',
    screenshot: '/products/screenshot/cinemafly.png'
  },
  civilcalc: {
    logo: '/products/logo/civil.png',
    screenshot: '/products/screenshot/civil engineering calculator.png'
  },
  debtsettler: {
    logo: '/products/logo/debtsettler.png'
  },
  docsigner: {
    logo: '/products/logo/docsigner (2).png',
    screenshot: '/products/screenshot/Docsigner.png'
  },
  framefly: {
    logo: '/products/logo/framefly.png',
    screenshot: '/products/screenshot/framefly - HEIC Image Viewer.png'
  },
  pomofly: {
    logo: '/products/logo/pomofly.png',
    screenshot: '/products/screenshot/pomofly pomodoro timer.png'
  },
  sanad: {
    logo: '/products/logo/sanad.png'
  },
  storeflow: {
    logo: '/products/logo/storeflow.png'
  },
  nishan: {
    screenshot: '/products/screenshot/Nishan.png'
  }
};

const dir = 'src/data/products/';

Object.keys(mappings).forEach(slug => {
  const filePath = path.join(dir, slug + '.js');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (mappings[slug].logo) {
      content = content.replace(/logo:\s*['"].*?['"],/, `logo: '${mappings[slug].logo}',`);
    }
    if (mappings[slug].screenshot) {
      content = content.replace(/screenshot:\s*['"].*?['"],/, `screenshot: '${mappings[slug].screenshot}',`);
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${slug}`);
  }
});
