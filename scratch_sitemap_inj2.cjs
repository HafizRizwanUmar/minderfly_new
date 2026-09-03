const fs = require('fs');

const cities = [
  "New-York", "Los-Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San-Antonio", "San-Diego", "Dallas", "San-Jose",
  "Austin", "Jacksonville", "Fort-Worth", "Columbus", "San-Francisco", "Charlotte", "Indianapolis", "Seattle", "Denver", "Washington-DC",
  "Boston", "El-Paso", "Nashville", "Detroit", "Oklahoma-City", "Portland", "Las-Vegas", "Memphis", "Louisville", "Baltimore",
  "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Mesa", "Sacramento", "Atlanta", "Kansas-City", "Colorado-Springs", "Omaha",
  "Raleigh", "Miami", "Long-Beach", "Virginia-Beach", "Oakland", "Minneapolis", "Tulsa", "Arlington", "Tampa", "New-Orleans",
  "London", "Birmingham", "Manchester", "Glasgow", "Newcastle", "Sheffield", "Leeds", "Bristol", "Nottingham", "Southampton",
  "Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec-City", "Hamilton", "Kitchener",
  "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold-Coast", "Canberra", "Newcastle-AU", "Wollongong", "Logan-City",
  "Dubai", "Abu-Dhabi", "Sharjah", "Riyadh", "Jeddah", "Mecca", "Medina", "Doha", "Kuwait-City", "Manama",
  "Berlin", "Munich", "Frankfurt", "Hamburg", "Stuttgart", "Paris", "Lyon", "Marseille", "Toulouse", "Nice",
  "Rome", "Milan", "Naples", "Turin", "Palermo", "Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza",
  "Amsterdam", "Rotterdam", "The-Hague", "Utrecht", "Eindhoven", "Stockholm", "Gothenburg", "Malmo", "Oslo", "Bergen",
  "Copenhagen", "Aarhus", "Helsinki", "Espoo", "Dublin", "Cork", "Zurich", "Geneva", "Basel", "Vienna",
  "Singapore", "Kuala-Lumpur", "Jakarta", "Bangkok", "Manila", "Ho-Chi-Minh-City", "Hanoi", "Tokyo", "Osaka", "Seoul",
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat",
  "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta", "Gujranwala", "Sialkot",
  "Cairo", "Alexandria", "Giza", "Cape-Town", "Johannesburg", "Durban", "Pretoria", "Nairobi", "Mombasa", "Lagos",
  "Sao-Paulo", "Rio-de-Janeiro", "Brasilia", "Salvador", "Fortaleza", "Buenos-Aires", "Cordoba", "Rosario", "Bogota", "Medellin",
  "Lima", "Arequipa", "Santiago", "Valparaiso", "Caracas", "Maracaibo", "Quito", "Guayaquil", "Montevideo", "Asuncion",
  "Mexico-City", "Guadalajara", "Monterrey", "Puebla", "Tijuana", "San-Juan", "Havana", "Santo-Domingo", "Panama-City", "San-Jose-CR"
];

const newServices = [
  'custom-web-app-development',
  'saas-development-agency',
  'flutter-development-company',
  'ui-ux-design-agency'
];

let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

let newEntries = '';
newServices.forEach(service => {
  cities.forEach(city => {
    newEntries += "  <url>\\n";
    newEntries += "    <loc>https://minderfly.com/services/" + service + "/" + city + "</loc>\\n";
    newEntries += "    <lastmod>2026-09-03</lastmod>\\n";
    newEntries += "    <changefreq>monthly</changefreq>\\n";
    newEntries += "    <priority>0.5</priority>\\n";
    newEntries += "  </url>\\n";
  });
});

const insertPoint = sitemap.lastIndexOf('</urlset>');
sitemap = sitemap.slice(0, insertPoint) + newEntries + sitemap.slice(insertPoint);

fs.writeFileSync('public/sitemap.xml', sitemap, 'utf8');
console.log('Added ' + (cities.length * newServices.length) + ' more locations to sitemap.');
