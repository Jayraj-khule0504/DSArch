// All site copy & assets grounded in Dream Space Architects (dsarch.in).

export const firm = {
  name: 'Dream Space Architects',
  short: 'DSA',
  tagline: ['Dream', 'Speed', 'Build'] as const,
  city: 'Pune',
  founder: 'Ar. Mahendra Thakur',
  phone: '+91 98235 55761',
  landline: '020-27400590 / 27400591',
  email: 'info@dsarch.in',
  address: 'Office 3 & 4, Ground Floor, MSR Capital Building, Samrat Chowk, Pimpri Court Road, Morwadi, PCMC - 411018',
  map: { lat: 18.634285682481437, lng: 73.800847075016 },
}

export const ENQUIRY_ENDPOINT = ''

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'events', label: 'Events & Blog' },
  { id: 'career', label: 'Career' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: 15, suffix: '+', label: 'Years in architectural practice (Since 2008)' },
  { value: 812, suffix: '+', label: 'Successfully completed projects' },
  { value: 8580, suffix: '+', label: 'Happy customers & families' },
  { value: 72, suffix: '+', label: 'Active running projects' },
]

export const phases = [
  {
    key: 'dream',
    label: 'Dream',
    line: 'Every project starts as a plot and an idea. We listen first, then shape the architectural vision.',
  },
  {
    key: 'speed',
    label: 'Speed',
    line: 'Plans, 3D models and PMC/PCMC approval drawings move together, so nothing waits on paperwork.',
  },
  {
    key: 'build',
    label: 'Build',
    line: 'We stay on site through construction until the finished building matches the drawing.',
  },
] as const

export type PhaseKey = (typeof phases)[number]['key']

export const about = {
  title: 'About Dream Space Architects',
  body: [
    'Dream Space Architects is a Pune architectural and interior design practice founded by Ar. Mahendra Thakur (Since 2008). Our expertise lies in bringing together talented architects, engineers, interior designers and passionate partners who make sure every design is functional, safe, economical and innovative.',
    'Alongside design and site supervision, we connect clients with the right specialist consultants — environmental consulting, corporation sanctioning, MEP, fire NOC and RCC — so projects move faster and hassle-free.',
  ],
  quote:
    'The foundation of all things is architecture, and this center has enabled us to engage in a diverse range of design projects and problem-solving activities across Pune, India. We prioritize excellent creative output, sustainability, and people. Our project results reflect the strong working relationships we cultivate with clients, consultants, contractors, and local authorities.',
  quoteNote: 'Designing across residential, commercial, interiors, landscape and statutory approvals.',
  vision:
    'In the approaching years, we aim to be a leading architectural practice in Pune — elevating clients through balanced design, technical expertise, applied technology and service quality, while training the architects and engineers of tomorrow.',
  mission:
    'To produce beautiful, inspirational architecture that improves people’s lives and the environment — in harmony with history, culture and nature through modern technical advancements.',
  journeyIntro:
    'What began with one young architect’s fascination for how buildings shape human lives has grown — brick by brick, drawing by drawing — into one of Pimpri-Chinchwad’s most trusted architectural practices.',
  journey: [
    {
      era: 'Foundation',
      scale: 'NTVS College of Architecture',
      step: 'The Dream Begins — B. Architecture',
      text: 'Driven by a lifelong desire to design meaningful buildings, Ar. Mahendra Thakur completed his B. Architecture from NTVS College of Architecture and stepped into Pune’s architectural landscape as an independent practitioner — determined to pair technical rigour with human-centred design.',
    },
    {
      era: '2008',
      scale: '100 sq.ft → 200 sq.ft',
      step: 'Inception of Dream Space Architects',
      text: 'In 2008, Dream Space Architects was born with a single desk and our very first interior design commission. With every project delivered on time and crafted with care, word spread quickly — doubling our humble studio from 100 sq.ft to 200 sq.ft as new opportunities poured in.',
    },
    {
      era: 'Expansion',
      scale: '750 sq.ft · Morwadi, PCMC',
      step: 'Growth Through Relentless Hard Work',
      text: 'Across Pimpri-Chinchwad, developers and families began turning to DSA not just for striking designs, but for dependable PMC & PCMC liaisoning and hassle-free approvals. Our growing reputation and expanding team carried us into a dedicated 750 sq.ft studio in Morwadi.',
    },
    {
      era: 'Today',
      scale: '2,750 sq.ft · MSR Capital, Pimpri',
      step: 'Transform, Scale & Shared Success',
      text: 'Today, the DSA family operates from a 2,750 sq.ft landmark studio at MSR Capital Building in Pimpri — powered by 812+ completed buildings, 8,580+ happy customers, and a dedicated multi-disciplinary team of architects, engineers, interior designers and liaisoning specialists.',
    },
  ],
}

export const principalArchitect = {
  name: 'Ar. Mahendra Thakur',
  role: 'Principal Architect · 15+ Years Experience',
  photo: '/about/owner-pic.png',
  bio: 'A creative and innovative architect with 15+ years of experience, committed to building a better future through collaborative leadership, strong communication, and designs that balance function, safety, economy, and architectural clarity.',
}

export const teamMembers = [
  { name: 'Anant Jadhav', role: 'Sr. Architect', photo: '/team/anant-jadhav.jpg' },
  { name: 'Dhiraj Mote', role: 'Sr. Assistant Architect', photo: '/team/dhiraj-mote.jpg' },
  { name: 'Sandeep Date', role: 'Sr. Assistant Architect', photo: '/team/sandeep-date.jpg' },
  { name: 'Akanksha Shinde', role: 'Architect', photo: '/team/akanksha-shinde.png' },
  { name: 'Rutuja Pawar', role: 'Architect', photo: '/team/rutuja-pawar.png' },
  { name: 'Rutuja Patil', role: 'Architect', photo: '/team/rutuja-patil.png' },
  { name: 'Jinal Choudhary', role: 'Architect', photo: '/team/jinal-choudhary.jpg' },
  { name: 'Himani Nivangune', role: 'Architect', photo: '/team/himani-nivangune.jpg' },
  { name: 'Ganesh Mali', role: 'Architect', photo: '/team/ganesh-mali.png' },
  { name: 'Pratiksha Amate', role: 'Architect', photo: '/team/pratiksha-amate.jpg' },
  { name: 'Akanksha Rokade', role: 'Architect', photo: '/team/akanksha-rokade.jpg' },
  { name: 'Anushka Phatak', role: 'Architect', photo: '/team/anushka-phatak.jpg' },
  { name: 'Mansi Gambhire', role: 'Architect', photo: '/team/mansi-gambhire.jpg' },
  { name: 'Aishwarya Bhosale', role: 'Interior Designer', photo: '/team/aishwarya-bhosale.png' },
  { name: 'Amol Bhopale', role: 'Engineer', photo: '/team/amol-bhopale.png' },
  { name: 'Rushikesh Khambe', role: 'Liaisoning Officer', photo: '/team/rushikesh-khambe.png' },
  { name: 'Kiran Shinde', role: 'Liaisoning Officer', photo: '/team/kiran-shinde.png' },
  { name: 'Rakshanda Jadhav', role: 'Liaisoning Officer', photo: '/team/rakshanda-jadhav.jpg' },
  { name: 'Sagar Nerurkar', role: 'Liaisoning Officer', photo: '/team/sagar-nerurkar.jpg' },
  { name: 'Chetan Gund', role: 'Liaisoning Officer', photo: '/team/chetan-gund.jpg' },
  { name: 'Mayur Khirid', role: 'Liaisoning Officer', photo: '/team/mayur-khirid.jpg' },
  { name: 'Sayali Janjirkar', role: 'Draftsman', photo: '/team/sayali-janjirkar.jpg' },
  { name: 'Pratiksha Chandgude', role: 'Draftsman', photo: '/team/pratiksha-chandgude.jpg' },
  { name: 'Amita Pandit', role: 'Draftsman', photo: '/team/amita-pandit.jpg' },
  { name: 'Shanta Birajdar', role: 'Accountant', photo: '/team/shanta-birajdar.jpg' },
  { name: 'Kashish Benwal', role: 'Receptionist', photo: '/team/kashish-benwal.jpg' },
  { name: 'Sumit Gothanakar', role: 'Office Support', photo: '/team/sumit-gothanakar.jpg' },
]

export const services = [
  {
    title: 'Architecture & 3D Consulting',
    summary: 'Designing, working drawings, 3D visualisation and site supervision.',
    points: [
      'Concept design, working drawings and 3D consulting',
      'Supervision of construction on site',
      'Examination, restoration and remodelling of existing buildings',
      'Selection of finishes, furnishings and exterior elevations',
    ],
  },
  {
    title: 'Interior design',
    summary: 'Functional, sculptural spaces tailored to your style and budget.',
    points: [
      'Homes, offices and commercial interiors of any size',
      'Space planning, ceiling lighting and material selection',
      'Custom joinery and furniture detailing',
      'Execution coordination with vetted contractors',
    ],
  },
  {
    title: 'Liaisoning & Specialist Consultants',
    summary: 'Connecting you with the right approvals and engineering teams faster.',
    points: [
      'Corporation sanctioning (PMC / PCMC) and submission drawings',
      'Environmental consulting & development authority certifications',
      'Fire NOC consulting & safety compliance',
      'MEP & RCC structural coordination under one studio',
    ],
  },
]

export const process = [
  { title: 'Brief & site visit', text: 'We walk your plot in Pune, check FSI/DCR rules and align on budget and timeline.' },
  { title: 'Concept & 3D', text: 'Layouts, elevation concepts and 3D walkthroughs before locking structural grids.' },
  { title: 'Approvals', text: 'PMC/PCMC submission drawings, fire NOC and authority liaisoning handled in-house.' },
  { title: 'Working drawings', text: 'Detailed RCC, electrical, plumbing and interior joinery sets for contractors.' },
  { title: 'Construction', text: 'Regular site supervision from excavation to final handover.' },
]

export type ProjectKind = 'residential' | 'commercial' | 'interior' | 'landscape' | 'bungalow'

export interface ProjectItem {
  title: string
  location: string
  scale: string
  src: string
  summary: string
}

export const projectKinds: {
  key: ProjectKind
  label: string
  text: string
  projects: ProjectItem[]
}[] = [
  {
    key: 'residential',
    label: 'Residential',
    text: 'High-rise apartment buildings and urban housing across Pune and PCMC — planned for natural cross-ventilation, solar shading and optimal carpet efficiency.',
    projects: [
      { title: 'Vision Aristo', location: 'Pune · Vision Creative Group', scale: 'Residential Architecture', src: '/projects/dsa/vision-aristo.jpg', summary: 'Multi-wing contemporary residential towers with articulated balconies and podium amenities.' },
      { title: 'Tanish Park', location: 'Pune · Tanish Group', scale: 'Residential Complex', src: '/projects/dsa/tanish-park.jpg', summary: 'Master-planned housing scheme balancing efficient floor plates with landscaped green courts.' },
      { title: 'Swastik Twin Tower', location: 'Pimpri-Chinchwad · Swastik Builders', scale: 'Twin Residential Towers', src: '/projects/dsa/swastik-twin-tower.jpg', summary: 'Symmetrical twin high-rises anchored by a landscaped central podium and arrival court.' },
      { title: 'Utopia Gold', location: 'Pune Metropolitan Region', scale: 'Residential Towers', src: '/projects/dsa/utopia-gold.jpg', summary: 'Sculpted elevation bands with corner terraces and full PCMC sanctioning.' },
      { title: 'Vision Rhythm', location: 'Pune · Vision Creative Group', scale: 'Residential Development', src: '/projects/dsa/vision-rhythm.jpg', summary: 'Rhythmic facade fins designed for Pune sun shading and dual-aspect apartment ventilation.' },
      { title: 'Polite Panorama', location: 'Pune · Residential', scale: 'High-Rise Housing', src: '/projects/dsa/polite-panorama.jpg', summary: 'Panoramic corner living rooms paired with cantilevered deck balconies and podium parking.' },
      { title: 'Meridian', location: 'Pimpri-Chinchwad, Pune', scale: 'Residential Tower', src: '/projects/dsa/meridian.jpg', summary: 'Clean modern residential facade with recessed balconies and efficient vertical core.' },
      { title: 'Vrundavan', location: 'Pune · Residential', scale: 'Housing Project', src: '/projects/dsa/vrundavan.jpg', summary: 'Family-centric housing layout optimized for Vastu orientation and natural daylight.' },
      { title: 'Indramegh', location: 'Pune · Residential', scale: 'Apartment Scheme', src: '/projects/dsa/indramegh.jpg', summary: 'Contemporary mid-rise residential architecture with generous balcony shading.' },
      { title: 'Indratej', location: 'Tathawade, Pune', scale: 'Residential Development', src: '/projects/dsa/indratej.jpg', summary: 'Contemporary residential complex in Tathawade designed for natural cross-ventilation and clean elevation lines.' },
      { title: 'Starwest', location: 'Pune · Residential', scale: 'Residential Towers', src: '/projects/dsa/starwest.jpg', summary: 'Balanced residential elevation with wide balconies and clear ground circulation.' },
      { title: 'Sahyadri Shrubari', location: 'Pune · Residential', scale: 'Housing Complex', src: '/projects/dsa/sahyadri-shrubari.jpg', summary: 'Multi-building residential project designed for ventilation and sunlit courtyards.' },
      { title: 'Twin Tower', location: 'Pimpri-Chinchwad, Pune', scale: 'Twin High-Rise', src: '/projects/dsa/twin-tower.jpg', summary: 'Paired residential towers connected by an elevated amenity and podium deck.' },
      { title: 'Vedanta Associates', location: 'Pune · Residential', scale: 'Apartment Complex', src: '/projects/dsa/vedanta-associates.jpg', summary: 'Practical floor-plate engineering with crisp modern elevation framing.' },
      { title: 'Anand Aashry', location: 'Pune · Residential', scale: 'Residential Scheme', src: '/projects/dsa/anand-aashry.jpg', summary: 'Warm family housing scheme built around landscaped open setbacks.' },
      { title: 'Gold Cliff', location: 'Pune · Residential', scale: 'High-Rise Apartments', src: '/projects/dsa/gold-cliff.jpg', summary: 'Distinctive stepped parapet skyline with well-shaded corner residences.' },
      { title: 'Aradhyam', location: 'Pune · Residential', scale: 'Residential Project', src: '/projects/dsa/aradhyam.jpg', summary: 'Modern urban residences planned for natural light and efficient carpet ratio.' },
      { title: 'Dream Carnival · Phase II', location: 'Pune · Residential', scale: 'Township Phase', src: '/projects/dsa/dream-carnival.jpg', summary: 'Large-scale community housing with landscaped central parks and clubhouse.' },
      { title: 'Global Spaces', location: 'Pune · Residential', scale: 'Multi-Wing Housing', src: '/projects/dsa/global-spaces.jpg', summary: 'Contemporary residential elevation paired with full PCMC liaisoning.' },
      { title: 'Sentosa Pride', location: 'Pune · Residential', scale: 'Multi-Story Housing', src: '/projects/dsa/sentosa-pride.jpg', summary: 'Vibrant residential community featuring landscaped podium gardens and modern elevation.' },
      { title: 'Sentosa Ekam', location: 'Pune · Residential', scale: 'Residential Towers', src: '/projects/dsa/sentosa-ekam.jpg', summary: 'Clean architectural massing with generous open greens and rooftop terraces.' },
      { title: 'Legacy Imperial', location: 'Pune · Residential', scale: 'Luxury Apartments', src: '/projects/dsa/legacy-imperial.jpg', summary: 'Signature residential towers combining bold vertical frames with warm facade lighting.' },
      { title: 'Santiago Uptown', location: 'Pune · Residential', scale: 'Urban Housing', src: '/projects/dsa/santiago-uptown.jpg', summary: 'Modern mixed residential block with clean structural grid and PCMC approvals.' },
      { title: 'Govind Riverine', location: 'Pune · Residential', scale: 'Riverside Apartments', src: '/projects/dsa/govind-riverine.jpg', summary: 'Residences oriented toward open landscape views and natural cross-breeze.' },
      { title: 'Vimal Twin Tower', location: 'Pune · Residential', scale: 'Twin Towers', src: '/projects/dsa/vimal-twin-tower.jpg', summary: 'Dual residential towers sharing a landscaped arrival court and podium.' },
      { title: 'Konark Venture', location: 'Pune · Residential', scale: 'Residential Scheme', src: '/projects/dsa/konark-venture.jpg', summary: 'Efficiently planned urban apartments with shaded terraces.' },
      { title: 'Skyway Parvati', location: 'Pune · Residential', scale: 'Urban Tower', src: '/projects/dsa/skyway-parvati.jpg', summary: 'Crisp vertical apartment tower designed for dense urban plots.' },
      { title: 'Sangam Crystal', location: 'Pune · Residential', scale: 'Apartment Building', src: '/projects/dsa/sangam-crystal.jpg', summary: 'Contemporary residential elevation with glass balcony bands.' },
      { title: 'Aasara', location: 'Pune · Residential', scale: 'Housing Development', src: '/projects/dsa/aasara.jpg', summary: 'Functional family housing with durable exterior finishes and open parking.' },
      { title: 'Santiago Skyland', location: 'Pune · Residential', scale: 'Skyline Residences', src: '/projects/dsa/santiago-skyland.jpg', summary: 'Multi-story residential complex featuring corner glazing and clubhouse deck.' },
      { title: 'Nageswar Developers', location: 'Pune · Residential', scale: 'Residential Scheme', src: '/projects/dsa/nageswar-developers.jpg', summary: 'Balanced urban residential building planned for smooth site execution.' },
      { title: 'Arun Viva', location: 'Pune · Residential', scale: 'Modern Apartments', src: '/projects/dsa/arun-viva.jpg', summary: 'Clean contemporary facade with practical apartment layouts.' },
    ],
  },
  {
    key: 'commercial',
    label: 'Commercial',
    text: 'Offices, retail plazas, hospitals, hotels and mixed-use buildings designed around crisp street presence, clear circulation and structural flexibility.',
    projects: [
      { title: 'Commercial Solanki Heights', location: 'Rahatani, Pune · Commercial', scale: 'Retail & Office Building', src: '/projects/dsa/solanki-heights.jpg', summary: 'Corner commercial plaza designed for high street visibility and smooth visitor circulation.' },
      { title: 'Gandharva Nagari Commercial', location: 'Moshi, Pune · Mixed-Use', scale: 'Commercial & Civic Hub', src: '/projects/dsa/gandharva-nagari.jpg', summary: 'Integrated commercial frontage serving a large residential township.' },
      { title: 'Municipal Ward Office', location: 'Chikhali, Pimpri-Chinchwad', scale: 'Civic Architecture', src: '/projects/dsa/ward-office.jpg', summary: 'Public civic administration building planned for clear visitor access and natural light.' },
      { title: 'Santosh Karnavat Hospital', location: 'Kiwale, Pune · Healthcare', scale: 'Hospital Architecture', src: '/projects/dsa/karnavat-hospital.jpg', summary: 'Specialized medical facility integrating clinical zoning, fire safety and calm patient spaces.' },
      { title: 'Hospitality & Hotel Complex', location: 'Dudulgaon, Pune · Hospitality', scale: 'Commercial Hotel', src: '/projects/dsa/hotel.jpg', summary: 'Contemporary hotel facade with welcoming arrival porte-cochère and guest suites.' },
    ],
  },
  {
    key: 'interior',
    label: 'Interior',
    text: 'Homes and executive workspaces crafted down to sculpted cove lighting, acoustic timber panelling and custom stone joinery.',
    projects: [
      { title: 'Omkar Doke · MSR Capital', location: 'Pimpri · Commercial Interior', scale: 'Executive Office Interior', src: '/projects/dsa/msr-capital-interior.jpg', summary: 'Warm wood-accented corporate office reception, workstations and lighting design.' },
      { title: 'Omkar Doke · Chakan Office', location: 'Chakan, Pune', scale: 'Corporate Workspace', src: '/projects/dsa/chakan-office.jpg', summary: 'Modern industrial-corridor office interior built for collaboration and client meetings.' },
      { title: 'Giritirth Interior', location: 'Ravet, Pune · Giritirtha Associates', scale: 'Bespoke Interior Design', src: '/projects/dsa/giritirth-interior.jpg', summary: 'Tailored residential interior combining recessed ceiling coves with rich material finishes.' },
      { title: 'Ramchandra Mane Residence', location: 'Bhosari, Pune · Home Interior', scale: 'Residential Interior', src: '/projects/dsa/ramchandra-mane.jpg', summary: 'Warm custom joinery, false ceiling lighting and bespoke living room detailing.' },
      { title: 'Ramchandra Mane Interior · Living Suite', location: 'Bhosari, Pune · Home Interior', scale: 'Turnkey Interior Design', src: '/projects/dsa/ramchandra-mane-interior-2.jpg', summary: 'Layered architectural panelling, warm cove lighting and cohesive room styling.' },
      { title: 'Prashant Pansare Residence', location: 'Dudulgaon, Pune · Home Interior', scale: 'Turnkey Interior', src: '/projects/dsa/prashant-pansare.jpg', summary: 'Contemporary residential interiors tailored around family comfort and storage.' },
    ],
  },
  {
    key: 'landscape',
    label: 'Landscape',
    text: 'Courtyards, podium decks and water-wise gardens that passively cool buildings and anchor community life.',
    projects: [
      { title: 'DSA Skylife Courtyard & Pool', location: 'Pimpri-Chinchwad, Pune', scale: 'Podium Landscape', src: '/projects/dsa/landscape-1.jpg', summary: 'Sculpted swimming pool deck, manicured lawn courts and shaded arrival walkway.' },
      { title: 'Podium Garden & Play Court', location: 'Pune · Residential Landscape', scale: 'Community Open Space', src: '/projects/dsa/landscape-2.jpg', summary: 'Multi-generational outdoor amenities with landscaped sit-outs and walking tracks.' },
      { title: 'Township Recreation Deck', location: 'Pune · Landscape Architecture', scale: 'Master-Planned Greens', src: '/projects/dsa/landscape-3.png', summary: 'Integrated green belt, amphitheatre seating and shaded tropical planting.' },
    ],
  },
  {
    key: 'bungalow',
    label: 'Bungalow',
    text: 'Independent residences sculpted around one family — their plot orientation, privacy, natural light and indoor-outdoor living.',
    projects: [
      { title: 'Vilas Patil Residence', location: 'Ravet, Pune · Private Bungalow', scale: 'Independent Villa', src: '/projects/dsa/vilas-patil-bungalow.jpg', summary: 'Cantilevered concrete terraces, warm wooden soffits and private garden frontage.' },
      { title: 'Satish Gavde Bungalow', location: 'Bhosari, Pune · Private Residence', scale: 'Custom Villa Design', src: '/projects/dsa/satish-gavde-bungalow.jpg', summary: 'Contemporary independent home designed around natural light and family privacy.' },
      { title: 'Ramchandra Mane Bungalow', location: 'Bhosari, Pune · Private Residence', scale: 'Independent Villa', src: '/projects/dsa/ramchandra-mane-bungalow.jpg', summary: 'Independent family bungalow with crisp vertical framing, balcony terraces and shaded arrival court.' },
      { title: 'Vivek Raut Residence', location: 'Nigdi, Pune · Private Bungalow', scale: 'Custom Residence', src: '/projects/dsa/vivek-raut-bungalow.jpg', summary: 'Bespoke independent home blending terracotta jali screens with shaded terraces.' },
    ],
  },
]

export const values = [
  { title: 'Integrity', text: 'We innovate together — your input helps us craft architecture that best serves real needs.' },
  { title: 'Transparency', text: 'Acting in a transparent, trustworthy manner that earns the respect of clients and the public.' },
  { title: 'Accountability', text: 'Strong ethics across every member and decision in the studio.' },
  { title: 'Quality', text: 'The highest standards of craftsmanship on paper, in 3D and on site.' },
  { title: 'Innovation', text: 'Taking ownership and applying modern architectural methods to build lasting trust.' },
]

export const clients = [
  { name: 'Tanish', logo: '/clients/tanish.jpg' },
  { name: 'Balaji Developers', logo: '/clients/balaji.jpg' },
  { name: 'Vision Creative Group', logo: '/clients/vision.jpg' },
  { name: 'Shevi Group', logo: '/clients/shevi.jpg' },
  { name: 'Swastik Builders & Developers', logo: '/clients/swastik.jpg' },
  { name: 'Guddwill Spaces', logo: '/clients/guddwill.jpg' },
  { name: 'Giritirtha Associates', logo: '/clients/giritirtha.jpg' },
  { name: 'PrathamYash', logo: '/clients/prathamyash.jpg' },
]

export const eventsGallery = [
  { src: '/events/event-1.jpg', title: 'Studio Celebration & Team Milestone' },
  { src: '/events/event-3.jpg', title: 'Annual Architects Gathering · Pimpri' },
  { src: '/events/event-5.jpg', title: 'Design & Liaisoning Workshop' },
  { src: '/events/event-12.jpg', title: 'DSA Studio Culture & Awards' },
  { src: '/events/event-13.jpg', title: 'Team Collaboration Day' },
  { src: '/events/event-14.jpg', title: 'Project Launch & Client Meet' },
  { src: '/events/event-15.jpg', title: 'Studio Outing & Team Bonding' },
  { src: '/events/event-16.jpg', title: 'Celebration at MSR Capital Studio' },
  { src: '/events/event-17.jpg', title: 'DSA Team Sports & Cricket Meet' },
  { src: '/events/event-18.jpg', title: 'Studio Anniversary Evening' },
  { src: '/events/event-19.jpg', title: 'Architects & Partners Fellowship' },
  { src: '/events/event-20.jpg', title: 'Annual Celebration Highlights' },
  { src: '/events/event-21.jpg', title: 'DSA Family Milestone Event' },
  { src: '/events/event-22.jpg', title: 'Studio Recognition & Awards' },
  { src: '/events/event-23.jpg', title: 'Team Outing & Retreat' },
  { src: '/events/event-24.jpg', title: 'Design Studio Celebration' },
  { src: '/events/event-25.jpg', title: 'Client & Consultant Meet' },
  { src: '/events/event-26.jpg', title: 'Annual Studio Gala' },
  { src: '/events/event-27.jpg', title: 'Dream Space Team Bonding' },
  { src: '/events/event-28.jpg', title: 'Studio Cultural Celebration' },
  { src: '/events/event-29.jpg', title: 'DSA Milestones Together' },
]

export interface BlogSection {
  heading?: string
  body: string
}

export interface BlogPost {
  id: string
  title: string
  category: string
  readTime: string
  src: string
  excerpt: string
  sections: BlogSection[]
}

export const blogPosts: BlogPost[] = [
  {
    id: '34',
    title: 'Vernacular Architecture in Modern India',
    category: 'Sustainability',
    readTime: '4 min read',
    src: '/blog/vernacular-architecture.jpg',
    excerpt:
      'From mud homes in Rajasthan to timber dwellings in Kerala, borrowing passive climate strategies and local materials creates resilient, energy-efficient buildings.',
    sections: [
      {
        body: 'Vernacular architecture refers to the traditional, indigenous architecture of a region developed over generations around local climate, terrain and craft. In a country as diverse as India, vernacular design offers a practical blueprint for sustainable modern construction.',
      },
      {
        heading: 'Sustainability & Resource Efficiency',
        body: 'By utilizing locally sourced materials such as mud, stone, bamboo and timber, vernacular architecture reduces transportation energy and carbon footprint. Homes in Rajasthan use thick mud or stone walls with high thermal capacity to stay cool, while timber-and-clay homes in Kerala maximize natural cross-ventilation.',
      },
      {
        heading: 'Cultural Preservation & Climate Resilience',
        body: 'Traditional layouts often integrate Vaastu spatial harmony alongside climate resilience — from elevated bamboo homes in Assam’s floodplains to shaded verandas in Maharashtra. Blending these time-tested principles with modern engineering creates spaces that remain comfortable for generations.',
      },
    ],
  },
  {
    id: '32',
    title: 'Dreamspace Architects: The Bright Side',
    category: 'Daylighting',
    readTime: '4 min read',
    src: '/blog/bright-side.jpg',
    excerpt:
      'How architectural skylights and well-oriented openings bring natural warmth indoors, lower daytime lighting loads and transform residential interiors.',
    sections: [
      {
        body: 'Skylights are architectural roof openings that bring abundant natural daylight into rooms that would otherwise have limited access to sunlight — transforming enclosed interiors into bright, airy living spaces.',
      },
      {
        heading: 'Why Architects Recommend Skylights',
        body: 'Beyond visual openness, well-placed skylights reduce daytime reliance on artificial lighting, improve passive indoor ventilation with operable vents, and preserve complete residential privacy while filling smaller rooms with natural warmth.',
      },
      {
        heading: 'Maintenance & Inspection Checklist',
        body: 'To keep skylights performing across Pune’s monsoons, inspect periodically for flashing or seal leaks, excessive interior condensation, hairline glass cracks, drafts around frames, and exterior noise intrusion.',
      },
    ],
  },
  {
    id: '31',
    title: "Maximising Space in Pune's Urban Homes",
    category: 'Space Planning',
    readTime: '3 min read',
    src: '/blog/urban-homes.jpg',
    excerpt:
      'As Pune grows denser, smart circulation, zero-waste corridors and dual-aspect layouts unlock comfortable, functional living within every square foot.',
    sections: [
      {
        body: 'Rapid urban growth across Pune and Pimpri-Chinchwad brings smaller apartment floor plates, evolving multi-generational family needs, and limited private outdoor space — making intelligent space planning essential.',
      },
      {
        heading: 'DSA Space Optimization Strategies',
        body: 'We pair multifunctional rooms with built-in custom wardrobes, wall-mounted vertical storage, wide balconies that extend living rooms outdoors, and clutter-free minimalist layouts that maximize natural daylight and cross-breeze.',
      },
      {
        heading: 'Built Around Your Daily Routine',
        body: 'Every plan starts by prioritizing how your family actually lives and works, ensuring adaptability for future needs while keeping carpet efficiency high.',
      },
    ],
  },
  {
    id: '33',
    title: 'Designing for a Sustainable Future',
    category: 'Green Design',
    readTime: '3 min read',
    src: '/blog/sustainable-future.jpg',
    excerpt:
      'Shaping the built environment responsibly through passive solar shading, cross-ventilation and lower-footprint material specification.',
    sections: [
      {
        body: 'With construction accounting for a major share of global energy use, architects carry a responsibility to build thoughtfully. At Dream Space Architects, our philosophy focuses on doing more with less unnecessary complexity.',
      },
      {
        heading: 'Adaptive Reuse & Rationalized Design',
        body: 'Repurposing existing structures conserves embodied energy, while rationalized planning eliminates over-building — focusing on clean spatial proportions, flexible workspaces and essential architectural craft.',
      },
      {
        heading: 'Passive Energy Efficiency First',
        body: 'Natural cross-ventilation, solar shading fins, daylight orientation and solar power integration drastically reduce lifetime building energy demand before mechanical systems are even switched on.',
      },
    ],
  },
  {
    id: '17',
    title: 'Architecture: A Powerful Art',
    category: 'Design Philosophy',
    readTime: '3 min read',
    src: '/blog/powerful-art.jpg',
    excerpt:
      'Effective space planning without wastage of built-up area — blending functionality, sustainability and social impact through close client collaboration.',
    sections: [
      {
        body: 'Great architecture begins with effective space planning — eliminating wasted built-up area and unlocking maximum feasible value while shaping environments that uplift the people who inhabit them.',
      },
      {
        heading: 'Collaboration & Craft',
        body: 'The strongest designs grow out of close partnership with clients, actively listening to their routines and aspirations so every residential or commercial project reflects real purpose.',
      },
      {
        heading: 'Social Impact & Inclusivity',
        body: 'From conceptualization to execution, combining innovative materials with accessibility, inclusivity and environmental care creates spaces that serve both families and surrounding communities.',
      },
    ],
  },
  {
    id: '18',
    title: 'From Vision to Reality',
    category: '3D Visualization',
    readTime: '3 min read',
    src: '/blog/vision-to-reality.jpg',
    excerpt:
      'How architectural visualization and 3D walkthroughs let clients experience light, materials and spatial flow before a single brick is laid.',
    sections: [
      {
        body: 'The true joy of architecture lies in transforming dreams into tangible structures — yet conveying complex spatial ideas through flat 2D technical drawings alone has always been challenging for clients.',
      },
      {
        heading: 'Breaking Barriers with 3D Visualization',
        body: 'Modern rendering and interactive walkthroughs allow clients and stakeholders to experience materials, textures, daylighting scenarios and room flow clearly before construction even begins.',
      },
      {
        heading: 'Clarity Before Construction',
        body: 'By bringing spatial clarity early in the design phase, visualization sparks more meaningful conversations and ensures every built detail matches the shared vision.',
      },
    ],
  },
  {
    id: '28',
    title: 'Architectural Acoustics',
    category: 'Building Science',
    readTime: '3 min read',
    src: '/blog/acoustics.jpg',
    excerpt:
      'Why room proportions, surface absorption and sound isolation matter just as much as visual form in offices, auditoriums and urban homes.',
    sections: [
      {
        body: 'Pioneered by Harvard professor Wallace Clement Sabine, architectural acoustics bridges art and physics — shaping how sound waves travel, reflect and absorb inside rooms so spaces feel calm and intelligible.',
      },
      {
        heading: 'Spatial Geometry & Sound Distribution',
        body: 'Room proportions directly govern echo and clarity. Classic rectangular “shoebox” halls distribute balanced warmth, whereas vineyard-style and fan-shaped layouts bring audiences closer to the sound source.',
      },
      {
        heading: 'Quiet Comfort in Dense Cities',
        body: 'As Pune’s avenues grow busier, acoustic glazing, wall absorption panels and thoughtful room zoning have become indispensable for peaceful homes, focused offices and modern auditoriums.',
      },
    ],
  },
  {
    id: '19',
    title: 'The Seven Different Types of Architecture',
    category: 'Architecture Guide',
    readTime: '4 min read',
    src: '/blog/seven-types.jpg',
    excerpt:
      'An essential guide to Residential, Commercial, Landscape, Interior, Urban, Sustainable and Industrial architecture — and how they work together.',
    sections: [
      {
        body: 'Architecture spans specialized disciplines that shape every part of modern life, often combining multiple practices within a single integrated project.',
      },
      {
        heading: '1–4 · Residential, Commercial, Landscape & Interior',
        body: 'Residential architecture focuses on comfortable homes and efficient space utilization; Commercial architecture shapes offices, retail and hotels; Landscape design connects outdoor gardens and parks with environmental science; and Interior architecture refines materials, lighting and spatial flow inside.',
      },
      {
        heading: '5–7 · Urban, Sustainable & Industrial Architecture',
        body: 'Urban design organizes cities, transit and public plazas; Sustainable/Green architecture minimizes ecological footprint using renewable energy and eco-materials; and Industrial architecture engineers safe, efficient factories, warehouses and production hubs.',
      },
    ],
  },
  {
    id: '27',
    title: 'Urban Planning In India',
    category: 'Urbanism',
    readTime: '4 min read',
    src: '/blog/urban-planning.jpg',
    excerpt:
      'Lessons from India’s rapid urbanisation and why disciplined infrastructure, setbacks and mixed-use zoning shape healthier neighbourhoods.',
    sections: [
      {
        body: 'India’s rapid urban migration has tested city infrastructure across the country, creating stark contrasts between modern towers and congested streets where planning lagged behind growth.',
      },
      {
        heading: 'Sustainable Urban Architecture',
        body: 'Through strategic master planning, Dream Space Architects advocates pedestrian-friendly streets, accessible green buffers, mixed-use neighborhoods and renewable-ready buildings that ease urban congestion.',
      },
      {
        heading: 'Designing Inclusive Communities',
        body: 'Thoughtful architecture goes beyond individual plots — connecting housing, workplaces, open courts and civic transit into resilient, livable neighborhoods.',
      },
    ],
  },
]

export const testimonials = [
  {
    quote:
      'From concept massing to final PCMC sanctioning, Dream Space Architects gave our entire development team total clarity. Their attention to floor-plan efficiency is unmatched.',
    author: 'Shevi Group',
    role: 'Residential & Mixed-Use Developer, Pune',
  },
  {
    quote:
      'Working with Ar. Mahendra Thakur and his studio saved months across approvals and execution. Every elevation and interior detail matched what they designed on paper.',
    author: 'Swastik Builders & Developers',
    role: 'Pimpri-Chinchwad, Pune',
  },
]

export const careerOpenings = [
  {
    id: 'senior-interior',
    position: 'Senior Interior Designer',
    vacancy: 2,
    location: 'Pimpri Chinchwad, Pune',
    type: 'Full-time · Studio & Site',
    summary:
      'Lead residential and commercial interior concepts, custom joinery detailing, material selection and turnkey contractor coordination.',
  },
  {
    id: 'junior-architect',
    position: 'Junior Architect',
    vacancy: 2,
    location: 'Pimpri Chinchwad, Pune',
    type: 'Full-time · Studio & Site',
    summary:
      'Support architectural concept massing, working drawings, 3D visualisation and PMC/PCMC submission drawing packages.',
  },
]

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/dreamspace_architects_pune/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100085934891922' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/dream-space-architects-pune/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@DreamSpaceArchitectsPune' },
]
