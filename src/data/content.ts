// All site copy lives here so it can be edited without touching components.
// Source: the client's current site, dsarch.in (Nov 2026).

export const firm = {
  name: 'Dream Space Architects',
  short: 'DSA',
  tagline: ['Dream', 'Speed', 'Build'] as const,
  city: 'Pune',
  founder: 'Ar. Mahendra Thakur',
  // Add these when the client supplies them; the UI hides empty values.
  phone: '',
  email: '',
  address: 'Pimpri Chinchwad, Pune, Maharashtra',
  map: { lat: 18.634285682481437, lng: 73.800847075016 },
}

// Paste a Formspree / Getform / your own API URL here to make the enquiry form send.
// While empty, the form shows the visitor a copyable summary instead.
export const ENQUIRY_ENDPOINT = ''

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'process', label: 'Process' },
  { id: 'career', label: 'Career' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: 15, suffix: '+', label: 'Years in architectural practice' },
  { value: 812, suffix: '+', label: 'Successfully completed projects' },
  { value: 8580, suffix: '+', label: 'Happy families & clients' },
  { value: 72, suffix: '+', label: 'Active projects on site' },
]

export const phases = [
  {
    key: 'dream',
    label: 'Dream',
    line: 'Every project starts as a plot and an idea. We listen first, then shape the 3D massing.',
  },
  {
    key: 'speed',
    label: 'Speed',
    line: 'Plans, 3D floor-plan cutaways and PCMC/PMC approval drawings move together.',
  },
  {
    key: 'build',
    label: 'Build',
    line: 'We stay on site through construction until the finished building matches the model.',
  },
] as const

export type PhaseKey = (typeof phases)[number]['key']

export const about = {
  title: 'We create spaces that matter',
  body: [
    'Dream Space Architects is a Pune architectural and interior design practice working across residential towers, commercial hubs, bespoke bungalows and statutory approvals. Alongside design and site supervision, we coordinate environmental, MEP, fire NOC, RCC and municipal sanctioning under one roof.',
    'Every building we deliver begins as an interactive 3D spatial model — letting developers, homeowners and approval authorities inspect structure, daylight and floor plans before a single brick is laid.',
  ],
  quote:
    'The foundation of all things is architecture, and this center has enabled us to engage in a diverse range of design projects and problem-solving activities across Pune, India. We prioritize excellent creative output, sustainability, and people. Our project results reflect the strong working relationships we cultivate with clients, consultants, contractors, and local authorities.',
  quoteNote: 'Designing across residential, commercial, interiors, landscape and statutory approvals.',
  mission:
    'Beautiful, enduring architecture that elevates everyday life and respects Pune’s climate — uniting 3D digital precision with practical execution.',
}

export const services = [
  {
    title: 'Architecture & 3D BIM',
    summary: 'New buildings, from interactive 3D massing to site supervision.',
    points: [
      'Concept design, 3D architectural models & elevation studies',
      'Full working drawings and structural coordination',
      'Regular site supervision through RCC and finishing',
      'Restoration, adaptive reuse and facade remodelling',
    ],
  },
  {
    title: 'Interior design',
    summary: 'Warm, sculptural interiors tailored to how you live and work.',
    points: [
      'Luxury residences, penthouses and commercial offices',
      'Ceiling cove lighting, space planning and material palettes',
      'Custom joinery, furniture detailing and fixture specs',
      'Turnkey execution support with vetted contractors',
    ],
  },
  {
    title: 'Liaisoning & approvals',
    summary: 'The drawings and statutory clearances that get projects built.',
    points: [
      'PMC & PCMC submission and sanctioning drawings',
      'Development authority certifications and compounding',
      'Fire NOC, environmental clearance & structural vetting',
      'RERA carpet-area schedules and completion certificates',
    ],
  },
]

export const process = [
  { title: 'Brief & site visit', text: 'We walk your plot in Pune, check FSI/DCR rules and align on budget and timeline.' },
  { title: '3D massing & plan', text: 'Inspect exterior proportions, sun-path and 3D cutaway floor plans before locking walls.' },
  { title: 'Approvals', text: 'PMC/PCMC submission drawings, fire NOC and authority liaisoning handled in-house.' },
  { title: 'Working drawings', text: 'Detailed RCC, electrical, plumbing and interior joinery sets for contractors.' },
  { title: 'Construction', text: 'Milestone site visits from excavation to final handover.' },
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
      {
        title: 'DSA Signature Tower',
        location: 'Pimpri-Chinchwad, Pune',
        scale: '22 Floors · 4 BHK Sky Suites',
        src: '/client-project/tower-exterior.jpg',
        summary: 'Symmetrical dual-wing elevation with sky-bridge atrium core, flared crown & arrival gatehouse.',
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
      {
        title: 'Grand Arrival & Lounge Podium',
        location: 'Chinchwad, Pune',
        scale: 'Double-Height Lobby',
        src: '/client-project/ground-lounge.jpg',
        summary: 'Sculpted cove ceiling lobby, concierge court and seamless garden drop-off glazing.',
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
      {
        title: '4 BHK Panoramic Living & Dining',
        location: 'Baner–PCMC Corridor',
        scale: '3,930 sq.ft Super Built-Up',
        src: '/client-project/living-dining.jpg',
        summary: "585 sq.ft open living-dining flowing onto a 26'-11\" private sunset terrace deck.",
      },
    ],
  },
  {
    key: 'landscape',
    label: 'Landscape',
    text: 'Courtyards, sky decks and water-wise gardens that passively cool buildings and anchor community life.',
    projects: [
      {
        title: 'Private Sky Deck & Lounge Terrace',
        location: 'Pimpri-Chinchwad, Pune',
        scale: "26'-11\" × 7'-6\" Deck",
        src: '/client-project/sky-deck.jpg',
        summary: 'Timber-decked balcony overlooking the city skyline with indoor-outdoor glass sliders.',
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
        title: 'The Courtyard House',
        location: 'Pradhikaran, Nigdi',
        scale: '4,100 sq.ft · G+1',
        src: '/projects/modern-bungalow.jpg',
        summary: 'Deep timber-soffit overhangs, stone-clad volumes and seamless garden glazing.',
      },
    ],
  },
]

export const values = [
  { title: 'Integrity', text: 'We design with your input so every square foot serves real life.' },
  { title: 'Transparency', text: 'Clear drawings, honest BOQs and open communication from day one.' },
  { title: 'Accountability', text: 'Single-point ownership across architecture, structure and sanctions.' },
  { title: 'Quality', text: 'Uncompromising detailing on paper, in 3D and on the construction site.' },
  { title: 'Innovation', text: 'Real-time 3D building twins and floor-plan simulations before build.' },
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

export const testimonials = [
  {
    quote:
      'From the first 3D building walkthrough to final PCMC sanctioning, Dream Space Architects gave our entire team total clarity. Their attention to floor-plan efficiency is unmatched.',
    author: 'Shevi Group',
    role: 'Residential & Mixed-Use Developer, Pune',
  },
  {
    quote:
      'Seeing our home as a live 3D cutaway before breaking ground saved months of site changes. Every corner of light and ventilation matched what they showed us.',
    author: 'Mr. Vasant Kate',
    role: 'Private Bungalow Client, Pimpri-Chinchwad',
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
