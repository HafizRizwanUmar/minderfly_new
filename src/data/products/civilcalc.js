const civilcalc = {
  slug: 'civilcalc',
  name: 'Civil Engineering Calculator',
  tagline: 'The Complete Engineering Toolkit for Civil Professionals & Students',
  shortDesc: 'Over 200 civil engineering calculators covering structural, geotechnical, hydraulic, transportation, and surveying calculations — all in one powerful app for engineers and students.',
  heroColor: '#1e3a5f',
  accentColor: '#60a5fa',
  logo: '/products/logo/civil.png',
  screenshot: '/products/screenshot/civil engineering calculator.png',
  screenshot2: '/products/screenshot/civil engineering calculator (2).png',
  appStoreLink: '#',
  playStoreLink: '#',
  category: 'Education & Engineering',
  rating: 4.8,
  reviews: 14700,
  version: '7.0.3',
  size: '45 MB',
  platforms: ['Windows'],

  sections: [
    {
      id: 'overview',
      title: 'What is Civil Engineering Calculator?',
      body: `The Civil Engineering Calculator is the most comprehensive engineering calculation application ever built for mobile platforms, providing professional-grade computational tools across every major discipline of civil engineering. With over 200 individual calculators, unit converters, reference tables, and formula guides, this application serves as the complete engineering toolkit for practicing civil engineers, structural engineers, geotechnical engineers, transportation engineers, water resources engineers, environmental engineers, and civil engineering students at all academic levels.

Engineering calculations are the foundation of civil engineering practice. Every structure, roadway, dam, pipeline, foundation, and drainage system begins as a set of calculations that translate physical requirements and material properties into precise design parameters. These calculations must be accurate, based on current codes and standards, and efficiently executable — a project engineer who must hand-calculate a retaining wall design from scratch, checking every formula in a textbook, wastes hours that could be spent on higher-value design and problem-solving work.

The Civil Engineering Calculator eliminates this wasted time. Whether you need to check a beam's moment capacity, calculate the bearing capacity of a soil foundation, size a storm drain culvert, determine the sight distance requirements for a highway curve, or compute the settlement of a consolidating clay layer, the Civil Engineering Calculator provides the right formula, accepts your input values with appropriate unit flexibility, performs the calculation instantly, and presents results with clear labeling and — critically — shows all intermediate calculation steps so you can verify the logic and understand the methodology.

The application has been developed in collaboration with licensed Professional Engineers from practice areas spanning structural, geotechnical, hydraulic/hydrology, transportation, and environmental engineering. Every calculator has been independently verified against textbook solutions and, where applicable, against commercial engineering software output. This verification process ensures that when you rely on the Civil Engineering Calculator in professional practice, you can do so with confidence in its accuracy.

Reference compliance is another critical aspect of the application. Calculators are clearly labeled with the code or standard basis for each calculation method — ACI 318 for concrete design, AISC 360 for steel design, AASHTO LRFD for bridge design, ASCE 7 for loads, PCA for pavement design, HEC-RAS methodology for hydraulics, and many others. When standards are updated, the application is updated correspondingly, and version notes clearly identify which edition of each standard is implemented.

For civil engineering students, the Civil Engineering Calculator is particularly valuable as an active learning tool. Rather than simply providing answers, the step-by-step solution display walks through each calculation in the order it would appear in a textbook solution, with formula derivations shown alongside numerical substitutions. Students can vary input parameters and observe how outputs change, building intuition for the sensitivity of engineering designs to key variables. The built-in study mode provides practice problems with guided solutions for common exam topics, including PE exam preparation content.`,
    },
    {
      id: 'calculators',
      title: '200+ Professional Calculators Across All Disciplines',
      body: `The Civil Engineering Calculator's library of over 200 computational tools covers the complete range of civil engineering practice. Here is a detailed survey of the calculators available in each discipline.

**Structural Engineering Calculators**
The structural engineering module contains the largest collection of calculators in the application, reflecting the breadth and complexity of structural analysis and design. Beam analysis calculators cover simply supported, cantilever, propped cantilever, and fixed-fixed beams with configurable loading (point loads, uniformly distributed loads, triangular loads, moments) and calculate reactions, shear force diagrams, bending moment diagrams, deflections, and slope at any point. The continuous beam solver handles up to 10 spans with any combination of support conditions using the three-moment equation and moment distribution methods.

Reinforced concrete design calculators cover singly and doubly reinforced rectangular beam design per ACI 318, T-beam analysis and design, one-way and two-way slab design, column design (tied and spiral columns, both uniaxial and biaxial bending), shear design including stirrup spacing and beam stirrup requirements, footing design (isolated spread footings, combined footings, mat foundations), retaining wall stability analysis (overturning, sliding, bearing capacity), and prestressed concrete calculations (pre-tensioned and post-tensioned beams, prestress losses).

Steel structure calculators include tension member design (yielding and fracture per AISC 360), compression member design (column buckling, effective length factors, allowable load determination), beam design including lateral-torsional buckling checks, beam-column combined loading interaction checks, weld design (fillet welds and groove welds), bolted connection design (shear and tension, bearing and slip-critical connections), and connection eccentricity calculations.

Timber engineering calculators cover sawn lumber and glulam beam design per NDS, column design, combined bending and axial load, and notched beam shear.

**Geotechnical Engineering Calculators**
The geotechnical module addresses soil mechanics and foundation engineering with rigor appropriate for professional practice. Soil classification calculators implement the USCS (Unified Soil Classification System) and AASHTO classification systems, computing plasticity index, liquid limit, plastic limit, and soil group based on Atterberg limits and grain size distribution data.

Shallow foundation calculators implement the general bearing capacity equation (Meyerhof, Hansen, and Vesic methods), settlement calculations (elastic settlement and consolidation settlement), and factor of safety analysis. The consolidation settlement calculator performs complete primary consolidation analysis including void ratio changes, compression index, recompression index, preconsolidation pressure assessment, and time-rate of consolidation (Terzaghi's theory).

Deep foundation calculators cover driven pile capacity by static analysis methods (alpha method, beta method, lambda method), drilled shaft design, pile group efficiency and settlement, and lateral pile analysis. The slope stability module provides simplified Bishop's method and Ordinary Method of Slices for circular failure surfaces, plus the Spencer method for general failure surfaces.

Earthwork calculators include cut and fill volume computation (prismatoid formula, average end area), mass haul analysis, compaction testing calculations (standard and modified Proctor, relative compaction, field density test calculations), and swell/shrinkage factors.

**Hydraulics and Water Resources Calculators**
The hydraulics module is one of the most comprehensive available in any engineering app. Open channel flow calculators implement Manning's equation for uniform flow in channels of any cross-section shape — rectangular, trapezoidal, circular, triangular, and natural. Critical flow determination, Froude number calculation, specific energy diagrams, and hydraulic jump calculations are all available. The gradually varied flow calculator solves water surface profiles (M1, M2, M3, S1, S2, S3 profiles) using the direct step method.

Pipe flow calculators apply the Darcy-Weisbach equation with the Colebrook-White friction factor for pressurized flow, the Hazen-Williams equation for water distribution design, and minor loss calculations for fittings. The pipe network analysis solver handles simple pipe networks using the Hardy-Cross iterative method.

Culvert and storm drain design calculators size culverts for inlet and outlet control conditions, perform inlet capacity analysis, and compute headwater depths. Stormwater runoff calculations implement the Rational Method, SCS Curve Number method, and unit hydrograph calculations for storm event runoff estimation. The detention pond routing calculator performs reservoir routing for stormwater management pond sizing.

Water distribution design calculators cover pressure zone analysis, pump selection (pump curves, system curves, operating point), water hammer analysis, and storage reservoir sizing.

**Transportation Engineering Calculators**
Highway geometric design calculators cover horizontal curve design (radius, tangent, curve length, degree of curve, sight distance), vertical curve design (sag and crest vertical curves, K values, sight distance), super-elevation design and transition spirals, and intersection sight distance requirements. The stopping sight distance and passing sight distance calculators implement AASHTO Green Book methodology.

Pavement design calculators include AASHTO flexible pavement design (SN method), rigid pavement design (AASHTO 1993 method), traffic loading analysis (ESAL calculations, equivalent load factors), and pavement condition index calculations. The traffic engineering module provides level of service analysis for basic freeway segments (HCM methodology), signalized intersection capacity analysis (HCM), and roundabout capacity analysis.

**Surveying and Geomatics Calculators**
Surveying calculators include traverse computation and closure analysis (Bowditch adjustment, transit adjustment), coordinate geometry (COGO) for area, azimuth, and distance calculations, curve data computation for field stakeout, earthwork volume from DTM surfaces, horizontal and vertical angle calculations, and GPS coordinate conversions between datums and projections.

**Unit Converters and Reference Tables**
Supporting the calculators is a comprehensive unit conversion system covering length, area, volume, mass, force, pressure, moment, stress, flow rate, velocity, temperature, and many derived units. All calculators accept input in any unit and report output in any unit, with intelligent defaults based on whether the user profile is set to US Customary or SI units. Built-in reference tables cover material properties (steel, concrete, timber, soil), standard pipe and structural section dimensions, load tables, and code reference values.`,
    },
    {
      id: 'step-by-step',
      title: 'Step-by-Step Solutions — Learn While You Calculate',
      body: `What truly distinguishes the Civil Engineering Calculator from competing apps is its step-by-step solution display. Every calculator in the application includes an expandable solution steps panel that shows the complete calculation methodology in textbook format, with formula derivations, variable definitions, unit conversions, and numerical substitutions at each step.

**How Step-by-Step Solutions Work**
After entering your input values and tapping Calculate, the result appears immediately at the top of the screen. Below the result, an expandable "Show Solution Steps" section is available. When expanded, this section displays the complete calculation workflow:

The first section states the problem: "Design a simply supported rectangular reinforced concrete beam to carry a factored moment of X kip-ft with a maximum effective depth of Y inches, using f'c = 4000 psi and fy = 60,000 psi."

The following sections walk through each calculation step using the same notation and format as ACI 318 commentary and standard structural engineering textbooks. Each step shows:
- The formula being applied (with standard notation)
- The source reference (e.g., "ACI 318-19 Section 9.3.3.1")
- The numerical substitution showing your input values inserted into the formula
- The intermediate result with units
- Any checks or code requirements that apply to the result

This format serves two important purposes. For practicing engineers, it provides a built-in QC check — you can verify that the calculator is using the correct formula and check whether the methodology aligns with your project-specific requirements. For students, it provides an active learning experience that builds understanding rather than just delivering answers.

**PE Exam Mode**
For engineers preparing for the Professional Engineering (PE) examination, the Civil Engineering Calculator includes a dedicated PE Exam Mode. In this mode, the calculator presents problems in the format used in the PE exam, with answer choices. After selecting an answer, the full solution is displayed, allowing you to understand where your reasoning succeeded or fell short.

The PE Exam content library contains over 500 practice problems across all civil engineering disciplines, organized by topic to support targeted study. Problems are categorized by difficulty (straightforward, moderate, challenging) and by the specific knowledge area tested. A progress tracking dashboard shows your performance by topic, identifying areas where additional study is needed.`,
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      body: '',
    },
  ],

  faqs: [
    {
      q: 'Are the calculators based on current engineering standards?',
      a: 'Yes. All calculators reference the current edition of relevant codes and standards including ACI 318-19, AISC 360-22, AASHTO LRFD 9th Edition, ASCE 7-22, and others. The version notes in each calculator clearly state which edition is implemented. Updates are released within 90 days of new code editions.',
    },
    {
      q: 'Can I use the Civil Engineering Calculator for professional engineering work?',
      a: 'The Civil Engineering Calculator is designed for professional use and has been verified against textbook solutions and commercial software. However, all engineering calculations used in professional practice should be reviewed and stamped by a licensed Professional Engineer who takes responsibility for their accuracy and appropriateness for the specific application.',
    },
    {
      q: 'Does the app work offline?',
      a: 'Yes. All 200+ calculators work completely offline. No internet connection is required to perform calculations. Your saved calculation history and project data are synced to the cloud when connected.',
    },
    {
      q: 'Can I export my calculations as a PDF report?',
      a: 'Yes. Any completed calculation can be exported as a professionally formatted PDF report including your firm name and logo, the calculation title, input values, step-by-step solution, and results. These reports can be included directly in project calculation packages.',
    },
    {
      q: 'Is the app useful for PE exam preparation?',
      a: 'Yes. The PE Exam Mode includes 500+ practice problems covering all civil engineering topics tested on the NCEES PE Civil exam, with full step-by-step solutions. Many users report that the combination of the calculator tools and PE Mode practice problems significantly accelerated their exam preparation.',
    },
    {
      q: 'Does the Civil Engineering Calculator support both US Customary and SI units?',
      a: 'Yes. Every calculator supports both unit systems with a global unit system preference and per-calculator overrides. You can mix unit systems within a single calculation (e.g., enter force in kips and dimensions in meters) and the unit conversion is handled automatically.',
    },
  ],

  news: [
    {
      slug: 'civilcalc-v7-release',
      title: 'Civil Engineering Calculator 7.0 — 50 New Calculators, AI Formula Assistant, and 3D Visualizations',
      date: 'July 14, 2026',
      summary: 'Version 7.0 is the largest update in the app\'s history — adding 50 new calculators, an AI Formula Assistant that answers engineering questions, 3D structural visualization, and full ASCE 7-22 load calculations.',
      readTime: '20 min read',
      category: 'Product Update',
      body: `Seven years ago, the Civil Engineering Calculator launched with 40 calculators and a simple promise: to provide accurate, code-compliant engineering calculations on a mobile device. Today, version 7.0 fulfills the next chapter of that promise — adding 50 new calculators to bring the total to over 200, introducing an AI Formula Assistant that can answer complex engineering questions in natural language, adding stunning 3D structural visualizations, and implementing comprehensive ASCE 7-22 load calculations that reflect the most current seismic, wind, and snow load requirements.

## 50 New Calculators Across All Disciplines

Version 7.0 adds calculators in areas that users have most frequently requested, filling gaps that existed in previous versions.

**New Structural Calculators (18)**
The most significant structural addition is a complete set of wood frame construction calculators per NDS 2018 and IBC 2021, covering wood stud wall design (gravity and lateral loads), wood shear wall design and nailing schedules, wood diaphragm design, hold-down anchor forces, and header and beam design for residential construction. This suite makes the Civil Engineering Calculator essential for residential structural engineers and contractors who frequently need quick checks on wood frame elements.

New steel design calculators cover HSS (hollow structural section) member design, plate girder design, composite beam design (steel beam with concrete deck, per AISC 360), and connection design for extended end-plate moment connections. The composite beam calculator includes automatic shear stud layout and partial composite efficiency optimization — a calculation that previously required either commercial software or laborious hand calculation.

Masonry design calculators have been added for the first time: CMU wall design per TMS 402 covering axial load, out-of-plane bending, and combined loading, plus lintel design for masonry openings. Given the prevalence of masonry construction in commercial and institutional buildings across most of the world, this addition significantly expands the application's utility in those markets.

**New Geotechnical Calculators (12)**
The geotechnical expansion includes several long-requested additions. A complete liquefaction analysis calculator implements the Idriss-Boulanger procedure for evaluating liquefaction potential and settlement from SPT and CPT data — essential for sites in seismic zones. The soil nail wall design calculator covers nail spacing, length, and pullout capacity determination for temporary and permanent soil nail retaining systems. Helical pile capacity calculators have been added for both compression and tension loading conditions, reflecting the growing use of helical piers in both new construction and remedial foundation applications.

**New Hydraulics Calculators (10)**
Notable new hydraulics additions include a complete pump system design calculator (system curve construction, pump curve analysis, operating point determination, NPSH check), a water hammer analysis calculator (Joukowsky's equation and wave speed determination), a dam breach analysis calculator for emergency action plan preparation, and a groundwater flow calculator covering Darcy's law applications, pumping test analysis (Theis method, Cooper-Jacob method), and capture zone calculations.

**New Transportation Calculators (10)**
Transportation additions include an urban street level of service calculator per HCM 7th edition, a pedestrian level of service calculator, an adaptive signal timing calculator, a roundabout capacity calculator using the HCM 6th edition methodology for single-lane and multilane roundabouts, and a parking lot design calculator covering space counts, aisle widths, and drive aisle layout optimization.

## AI Formula Assistant

The headline new feature of version 7.0 is the AI Formula Assistant — a specialized engineering AI that can answer formula-related engineering questions, suggest appropriate calculators for given problems, explain code provisions, and help users navigate the application's calculator library.

The AI Formula Assistant has been trained on a curated corpus of civil engineering textbooks, code commentaries, technical papers, and the Civil Engineering Calculator's own documentation. It is specifically tuned for engineering communication, understanding technical terminology, unit specifications, and the precise language of engineering standards.

Here are examples of how engineers are using the AI Formula Assistant in beta testing:

"What is the appropriate method for determining the modulus of subgrade reaction for a mat foundation on medium-dense sand, and which calculator should I use?"

"The IBC requires me to check drift limits for my shear wall structure — can you explain what drift limit applies and walk me through the calculation process?"

"I have a 12-inch HDPE pipe carrying 150 gpm at a 0.5% slope. Will it flow full, and what is the flow velocity?" The AI not only answers the question but offers to open the Manning's Equation calculator with the appropriate values pre-populated.

"Can you explain the difference between the Terzaghi bearing capacity equation and the Meyerhof equation, and when each is preferred?" The AI provides a technical explanation with references to the relevant literature.

The AI Formula Assistant is honest about the boundaries of its expertise — it will not provide specific professional engineering advice for your project, and it always recommends consulting a licensed PE for design decisions. But as an educational tool, a calculator navigation aid, and a formula reference, it is transformative.

## 3D Structural Visualization

A picture is worth a thousand numbers, and version 7.0's new 3D structural visualization feature makes engineering results dramatically easier to understand and communicate.

For beam calculators, the 3D visualization shows the beam in three dimensions with applied loads, rendered shear and moment diagrams along the member, and an exaggerated deflected shape that makes the structural behavior visually intuitive. Colors represent the magnitude of internal forces — red for high stress zones, green for low-stress areas. This visualization is invaluable for education and for explaining engineering concepts to non-engineering clients and project stakeholders.

For foundation calculators, the 3D visualization shows the foundation element (spread footing, pile, drilled shaft) within its soil context, with soil layer boundaries, load transfer arrows, and failure surface geometry displayed. For slope stability calculations, the visualizer shows the slope geometry, trial failure surface, slice geometry, and factor of safety distribution around the failure surface.

All visualizations are interactive — you can rotate, zoom, and pan using touch gestures, and you can change input parameters while watching the visualization update in real time. This dynamic interaction makes the Civil Engineering Calculator an outstanding educational tool for structural behavior concepts.

## ASCE 7-22 Complete Load Calculations

ASCE 7-22, the current edition of Minimum Design Loads and Associated Criteria for Buildings and Other Structures, represents significant changes from ASCE 7-16 — particularly in seismic design criteria following updates to the USGS national seismic hazard model, and in wind load provisions following the inclusion of risk-targeted wind speed maps. Version 7.0 implements ASCE 7-22 comprehensively across all load categories.

The seismic design calculator provides complete site-specific seismic design parameters: Ss, S1, SMS, SM1, SDS, SD1, seismic design category determination, and the design response spectrum. The implementation uses the ASCE 7-22 hazard maps directly, with geographic coordinates input to retrieve the exact mapped spectral accelerations for any US location.

Wind load calculators implement both the directional procedure (Chapter 27) and the envelope procedure (Chapter 28) for buildings, plus the provisions for open structures, rooftop equipment, and solar panels (Chapter 29). The wind speed maps for Risk Categories I through IV are integrated, allowing accurate wind speed determination for any US location.

Snow load calculators implement Chapter 7's ground-to-roof snow load conversion, drift surcharge calculations for adjacent roofs, and sliding snow provisions — critical calculations that are frequently needed for structures in northern climates and that require careful interpretation of the code's requirements.

Civil Engineering Calculator 7.0 is available today as a free update for all existing subscribers. New users can start with a 14-day free trial of the complete app.`,
    },
  ],
};

export default civilcalc;
