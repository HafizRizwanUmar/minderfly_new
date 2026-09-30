const fs = require('fs');

let content = fs.readFileSync('src/pages/ServiceLocationPage.jsx', 'utf8');

// Replace the SERVICES object
const newServices = `const SERVICES = {
  'mobile-app-development': {
    name: 'Mobile App Development',
    titlePrefix: 'Top Mobile App Development Company in',
    desc: 'Looking for the best mobile app developers in {city}? Minderfly builds scalable iOS and Android apps for startups. Get a free quote today.',
    heroText: 'We help startups and enterprises in {city} build scalable, world-class iOS and Android applications. From MVP to global launch, we are your technical partners.',
    icon: <Smartphone size={32} />,
    seoParagraph1: 'When searching for mobile app development services in {city}, you need a team that understands both native performance and cross-platform efficiency. We specialize in building iOS and Android applications that engage users and drive revenue. Whether you are a local {city} startup launching your first MVP or an established enterprise needing a digital transformation, our engineers use modern stacks to bring your vision to life.',
    seoParagraph2: 'Unlike offshore agencies that hand off code and disappear, we act as your long-term technical partner. We handle UI/UX design, frontend development, robust backend architecture, and App Store optimization. We ensure your mobile app meets the strict guidelines of the Apple App Store and Google Play Store, giving your {city}-based business a competitive edge.'
  },
  'custom-web-app-development': {
    name: 'Custom Web App Development',
    titlePrefix: 'Custom Web App Development Company in',
    desc: 'Hire top web app developers serving {city}. We build fast, secure, and scalable custom web applications using React, Next.js, and Node.js.',
    heroText: 'Need a powerful web application? We partner with businesses in {city} to engineer custom web platforms, portals, and progressive web apps (PWAs).',
    icon: <Code size={32} />,
    seoParagraph1: 'Off-the-shelf software rarely fits the unique operational needs of growing businesses. As a leading web app development company serving {city}, we build bespoke web applications, admin dashboards, and complex enterprise portals. We leverage modern JavaScript frameworks like React, Next.js, and Node.js to ensure your web app is blazing fast and highly secure.',
    seoParagraph2: 'Our web applications are designed with responsive principles, meaning they work flawlessly on desktop computers in {city} offices and on smartphones alike. From HIPAA-compliant healthcare portals to high-traffic e-commerce backends, our full-stack developers architect solutions that scale effortlessly as your user base grows.'
  },
  'saas-development-agency': {
    name: 'SaaS Development',
    titlePrefix: 'Expert SaaS Development Agency serving',
    desc: 'Build your SaaS product with the leading agency for {city}. We architect multi-tenant SaaS platforms with robust subscription and billing systems.',
    heroText: 'Launch your Software-as-a-Service business with confidence. We help founders in {city} build secure, multi-tenant architectures that scale to thousands of users.',
    icon: <Globe size={32} />,
    seoParagraph1: 'Building a Software-as-a-Service (SaaS) product requires entirely different architecture than a standard website. We are the trusted SaaS development agency for founders in {city}, specializing in multi-tenant database architectures, automated onboarding flows, and complex role-based access control (RBAC).',
    seoParagraph2: 'We integrate industry-leading payment processors like Stripe to handle your monthly recurring revenue (MRR), subscription tiers, and automated billing. By choosing Minderfly as your technical partner in {city}, you avoid the common pitfalls of SaaS development and get to market faster with a platform ready to acquire and retain paying subscribers.'
  },
  'flutter-development-company': {
    name: 'Flutter Development',
    titlePrefix: 'Top Flutter Development Company in',
    desc: 'Hire expert Flutter developers in {city}. We build beautiful, high-performance cross-platform apps for iOS, Android, and Web from a single codebase.',
    heroText: 'Cut your development time in half without sacrificing quality. Our Flutter experts build stunning apps for clients in {city} that work flawlessly on every device.',
    icon: <Smartphone size={32} />,
    seoParagraph1: 'Why pay for two separate development teams when you can build for iOS and Android simultaneously? Our Flutter development agency helps {city} businesses cut their time-to-market in half. Google’s Flutter framework allows us to compile native, high-performance code from a single codebase, drastically reducing your development and maintenance costs.',
    seoParagraph2: 'We don’t just write Flutter code; we build the actual tooling for it. Our team created the popular Flutter Web Emulator used by thousands of developers globally. When you hire our Flutter experts for your {city} project, you are working with engineers who understand the framework at its core, delivering fluid animations and native-like performance.'
  },
  'ui-ux-design-agency': {
    name: 'UI/UX Design',
    titlePrefix: 'Premium UI/UX Design Agency in',
    desc: 'Looking for a UI/UX design agency in {city}? We design beautiful, intuitive, and high-converting digital products for startups and enterprises.',
    heroText: 'Design is how it works. We help companies in {city} craft world-class user interfaces and user experiences that drive engagement and retention.',
    icon: <Layout size={32} />,
    seoParagraph1: 'Users judge your app in milliseconds. Our UI/UX design agency provides {city} startups and enterprises with pixel-perfect, intuitive, and high-converting designs. We don’t just make things look pretty; we conduct user research, create wireframes, and build interactive prototypes that solve real user problems.',
    seoParagraph2: 'A great user experience directly impacts your bottom line. We apply behavioral psychology and modern design systems to reduce friction, increase conversion rates, and lower user churn. Let us redesign your legacy software or craft your new product’s interface to stand out in the competitive {city} market.'
  }
};`;

content = content.replace(/const SERVICES = \{[\s\S]*?\n\};\n/, newServices + '\n');

const newSeoBlock = `{/* SEO Text Block */}
        <section style={{ padding: '80px 24px', background: 'var(--grey-50)' }}>
          <div className="gfe-container" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '24px' }}>Why Choose Minderfly for {service.name} in {formattedCity}?</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
              {service.seoParagraph1.replace(/{city}/g, formattedCity)}
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
              {service.seoParagraph2.replace(/{city}/g, formattedCity)}
            </p>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link to="/contact" className="gfe-button gfe-button--outline" style={{ padding: '12px 24px', borderRadius: '8px' }}>
                Contact our {formattedCity} team
              </Link>
            </div>
          </div>
        </section>`;

content = content.replace(/\{\/\* SEO Text Block \*\/\}[\s\S]*?<\/section>/, newSeoBlock);

fs.writeFileSync('src/pages/ServiceLocationPage.jsx', content);
console.log('Dynamic SEO content added to ServiceLocationPage');
