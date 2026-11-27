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
  { name: 'Ganesh Mali', role: 'Architect', photo: '/team/ganesh-mali.png' },
  { name: 'Aishwarya Bhosale', role: 'Interior Designer', photo: '/team/aishwarya-bhosale.png' },
  { name: 'Amol Bhopale', role: 'Engineer', photo: '/team/amol-bhopale.png' },
  { name: 'Rushikesh Khambe', role: 'Liaisoning Officer', photo: '/team/rushikesh-khambe.png' },
  { name: 'Kiran Shinde', role: 'Liaisoning Officer', photo: '/team/kiran-shinde.png' },
  { name: 'Sayali Janjirkar', role: 'Draftsman', photo: '/team/sayali-janjirkar.jpg' },
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
      {
        title: 'Vision Aristo',
        location: 'Pune · Vision Creative Group',
        scale: 'Residential Architecture',
        src: '/projects/dsa/vision-aristo.jpg',
        summary: 'Multi-wing contemporary residential towers with articulated balconies and podium amenities.',
      },
      {
        title: 'Tanish Park',
        location: 'Pune · Tanish Group',
        scale: 'Residential Complex',
        src: '/projects/dsa/tanish-park.jpg',
        summary: 'Master-planned housing scheme balancing efficient floor plates with landscaped green courts.',
      },
      {
        title: 'Swastik Twin Tower',
        location: 'Pimpri-Chinchwad · Swastik Builders',
        scale: 'Twin Residential Towers',
        src: '/projects/dsa/swastik-twin-tower.jpg',
        summary: 'Symmetrical twin high-rises anchored by a landscaped central podium and arrival court.',
      },
      {
        title: 'Utopia Gold',
        location: 'Pune Metropolitan Region',
        scale: 'Residential Towers',
        src: '/projects/dsa/utopia-gold.jpg',
        summary: 'Sculpted elevation bands with corner terraces and full PCMC sanctioning.',
      },
      {
        title: 'Vision Rhythm',
        location: 'Pune · Vision Creative Group',
        scale: 'Residential Development',
        src: '/projects/dsa/vision-rhythm.jpg',
        summary: 'Rhythmic facade fins designed for Pune sun shading and dual-aspect apartment ventilation.',
      },
      {
        title: 'Polite Panorama',
        location: 'Pune · Residential',
        scale: 'High-Rise Housing',
        src: '/projects/dsa/polite-panorama.jpg',
        summary: 'Panoramic corner living rooms paired with cantilevered deck balconies and podium parking.',
      },
      {
        title: 'Meridian',
        location: 'Pimpri-Chinchwad, Pune',
        scale: 'Residential Tower',
        src: '/projects/dsa/meridian.jpg',
        summary: 'Clean modern residential facade with recessed balconies and efficient vertical core.',
      },
      {
        title: 'Vrundavan',
        location: 'Pune · Residential',
        scale: 'Housing Project',
        src: '/projects/dsa/vrundavan.jpg',
        summary: 'Family-centric housing layout optimized for Vastu orientation and natural daylight.',
      },
      {
        title: 'Indramegh',
        location: 'Pune · Residential',
        scale: 'Apartment Scheme',
        src: '/projects/dsa/indramegh.jpg',
        summary: 'Contemporary mid-rise residential architecture with generous balcony shading.',
      },
      {
        title: 'Sentosa Pride',
        location: 'Pune · Residential',
        scale: 'Multi-Story Housing',
        src: '/projects/dsa/sentosa-pride.jpg',
        summary: 'Vibrant residential community featuring landscaped podium gardens and modern elevation.',
      },
      {
        title: 'Legacy Imperial',
        location: 'Pune · Residential',
        scale: 'Luxury Apartments',
        src: '/projects/dsa/legacy-imperial.jpg',
        summary: 'Signature residential towers combining bold vertical frames with warm facade lighting.',
      },
      {
        title: 'Santiago Uptown',
        location: 'Pune · Residential',
        scale: 'Urban Housing',
        src: '/projects/dsa/santiago-uptown.jpg',
        summary: 'Modern mixed residential block with clean structural grid and PCMC approvals.',
      },
      {
        title: 'DSA Residential Landmark',
        location: 'Pimpri-Chinchwad, Pune',
        scale: 'Multi-Wing Housing · PCMC',
        src: '/projects/dsarch-residential.jpg',
        summary: 'Landscaped podium housing planned for light, cross-ventilation and efficient carpet area.',
      },
    ],
  },
  {
    key: 'commercial',
    label: 'Commercial',
    text: 'Offices, retail plazas and mixed-use buildings designed around crisp street presence, clear circulation and structural flexibility.',
    projects: [
      {
        title: 'Vishnu Capitals',
        location: 'Pune Metropolitan Region',
        scale: 'Mixed-Use Retail & Offices',
        src: '/projects/dsarch-commercial.jpg',
        summary: 'Glazed double-level retail & office frontage with bold cantilevered upper corporate volume.',
      },
      {
        title: 'Commercial Solanki Heights',
        location: 'Pune · Commercial',
        scale: 'Retail & Office Building',
        src: '/projects/dsa/solanki-heights.jpg',
        summary: 'Corner commercial plaza designed for high street visibility and smooth visitor circulation.',
      },
      {
        title: 'Gandharva Nagari Commercial',
        location: 'Pune · Mixed-Use',
        scale: 'Commercial & Civic Hub',
        src: '/projects/dsa/gandharva-nagari.jpg',
        summary: 'Integrated commercial frontage serving a large residential township.',
      },
    ],
  },
  {
    key: 'interior',
    label: 'Interior',
    text: 'Homes and executive workspaces crafted down to sculpted cove lighting, acoustic timber panelling and custom stone joinery.',
    projects: [
      {
        title: 'Omkar Doke · MSR Capital',
        location: 'Pune · Commercial Interior',
        scale: 'Executive Office Interior',
        src: '/projects/dsa/msr-capital-interior.jpg',
        summary: 'Warm wood-accented corporate office reception, workstations and lighting design.',
      },
      {
        title: 'Giritirth Interior',
        location: 'Pune · Giritirtha Associates',
        scale: 'Bespoke Interior Design',
        src: '/projects/dsa/giritirth-interior.jpg',
        summary: 'Tailored residential interior combining recessed ceiling coves with rich material finishes.',
      },
    ],
  },
  {
    key: 'landscape',
    label: 'Landscape',
    text: 'Courtyards, podium decks and water-wise gardens that passively cool buildings and anchor community life.',
    projects: [
      {
        title: 'DSA Skylife Courtyard & Pool',
        location: 'Pimpri-Chinchwad, Pune',
        scale: 'Podium Landscape',
        src: '/projects/dsa/landscape-1.jpg',
        summary: 'Sculpted swimming pool deck, manicured lawn courts and shaded arrival walkway.',
      },
      {
        title: 'Podium Garden & Play Court',
        location: 'Pune · Residential Landscape',
        scale: 'Community Open Space',
        src: '/projects/dsa/landscape-2.jpg',
        summary: 'Multi-generational outdoor amenities with landscaped sit-outs and walking tracks.',
      },
      {
        title: 'Township Recreation Deck',
        location: 'Pune · Landscape Architecture',
        scale: 'Master-Planned Greens',
        src: '/projects/dsa/landscape-3.png',
        summary: 'Integrated green belt, amphitheatre seating and shaded tropical planting.',
      },
    ],
  },
  {
    key: 'bungalow',
    label: 'Bungalow',
    text: 'Independent residences sculpted around one family — their plot orientation, privacy, natural light and indoor-outdoor living.',
    projects: [
      {
        title: 'Vilas Patil Residence',
        location: 'Pune · Private Bungalow',
        scale: 'Independent Villa',
        src: '/projects/dsa/vilas-patil-bungalow.jpg',
        summary: 'Cantilevered concrete terraces, warm wooden soffits and private garden frontage.',
      },
      {
        title: 'Satish Gavde Bungalow',
        location: 'Pune · Private Residence',
        scale: 'Custom Villa Design',
        src: '/projects/dsa/satish-gavde-bungalow.jpg',
        summary: 'Contemporary independent home designed around natural light and family privacy.',
      },
      {
        title: 'Vivek Raut Residence',
        location: 'Pune · Private Bungalow',
        scale: 'Custom Residence',
        src: '/projects/dsa/vivek-raut-bungalow.jpg',
        summary: 'Bespoke independent home blending terracotta jali screens with shaded terraces.',
      },
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
]

export const blogPosts = [
  {
    id: '34',
    title: 'Vernacular Architecture in Modern India',
    category: 'Sustainability',
    src: '/blog/vernacular-architecture.jpg',
    excerpt:
      'From mud homes in Rajasthan to timber dwellings in Kerala, borrowing passive climate strategies and local materials creates resilient, energy-efficient buildings.',
    href: 'https://dsarch.in/blog-details/34',
  },
  {
    id: '32',
    title: 'Dreamspace Architects: The Bright Side',
    category: 'Daylighting',
    src: '/blog/bright-side.jpg',
    excerpt:
      'How architectural skylights and well-oriented openings bring natural warmth indoors, lower daytime lighting loads and transform residential interiors.',
    href: 'https://dsarch.in/blog-details/32',
  },
  {
    id: '31',
    title: "Maximising Space in Pune's Urban Homes",
    category: 'Space Planning',
    src: '/blog/urban-homes.jpg',
    excerpt:
      'As Pune grows denser, smart circulation, zero-waste corridors and dual-aspect layouts unlock comfortable, functional living within every square foot.',
    href: 'https://dsarch.in/blog-details/31',
  },
  {
    id: '33',
    title: 'Designing for a Sustainable Future',
    category: 'Green Design',
    src: '/blog/sustainable-future.jpg',
    excerpt:
      'Shaping the built environment responsibly through passive solar shading, cross-ventilation and lower-footprint material specification.',
    href: 'https://dsarch.in/blog-details/33',
  },
  {
    id: '28',
    title: 'Architectural Acoustics',
    category: 'Building Science',
    src: '/blog/acoustics.jpg',
    excerpt:
      'Why room proportions, surface absorption and sound isolation matter just as much as visual form in offices, auditoriums and urban homes.',
    href: 'https://dsarch.in/blog-details/28',
  },
  {
    id: '27',
    title: 'Urban Planning In India',
    category: 'Urbanism',
    src: '/blog/urban-planning.jpg',
    excerpt:
      'Lessons from India’s rapid urbanisation and why disciplined infrastructure, setbacks and mixed-use zoning shape healthier neighbourhoods.',
    href: 'https://dsarch.in/blog-details/27',
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
