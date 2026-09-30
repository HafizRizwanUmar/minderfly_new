const fs = require('fs');

let appJsx = fs.readFileSync('src/App.jsx', 'utf8');

// Replace standard imports with React.lazy
const pagesToLazy = [
  'ContactPage', 'AllProductsPage', 'CinemaflyPage', 'DocSignerPage', 
  'SanadPdfEditorPage', 'InklessLmsPage', 'FlutterEmulatorPage', 
  'MinimalDeskThemePage', 'PastelAuroraPage', 'LunarLeapThemePage',
  'MuhasbaPage', 'MuhasbaPrivacyPage', 'OurCommitmentPage', 'OurTeamPage',
  'PrivacyPage', 'DrHammadPage', 'QuranAcademyPage', 'AlmiraalPage',
  'HowWeBuildPage', 'NewsPage', 'NewsArticlePage', 'NotFoundPage',
  'ProductPage', 'ProductNewsIndex', 'ProductNewsArticle', 'ServiceLocationPage', 'LocationsDirectoryPage'
];

// Add React.lazy and Suspense imports
if (!appJsx.includes('import React, { Suspense } from \'react\'')) {
  appJsx = `import React, { Suspense } from 'react'\n` + appJsx;
}

pagesToLazy.forEach(page => {
  const regex = new RegExp(`import ${page} from '\\.\\/pages\\/${page}'`, 'g');
  appJsx = appJsx.replace(regex, `const ${page} = React.lazy(() => import('./pages/${page}'))`);
});

// Wrap <Routes> with <Suspense>
appJsx = appJsx.replace('<Routes>', '<Suspense fallback={<div style={{height:"100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>Loading...</div>}>\n        <Routes>');
appJsx = appJsx.replace('</Routes>', '</Routes>\n        </Suspense>');

fs.writeFileSync('src/App.jsx', appJsx);
console.log('App.jsx converted to use Code Splitting / Lazy Loading');
