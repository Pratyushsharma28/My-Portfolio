import { Project, SkillCategory, JourneyMilestone, Achievement, EducationStage } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Pratyush Sharma',
  eyebrow: "HELLO, I'M",
  role: 'First-Year CSE (AI & ML) Student | Aspiring Developer | Tech Enthusiast',
  subtitle: 'First-Year CSE (AI & ML) Student / Aspiring Developer',
  statement: 'Turning curiosity into code.',
  description: 'First-year Computer Science student exploring programming, artificial intelligence, and web development while building projects and learning through practical experiences.',
  location: 'Bengaluru, Karnataka, India',
  education: {
    institution: 'Quad AI School of Technology',
    period: '2026–2030',
    program: 'Computer Science Engineering',
    specialization: 'Artificial Intelligence and Machine Learning',
    yearStatus: 'First-Year Student',
  },
  about: `I'm Pratyush Sharma, a first-year Computer Science student at Quad AI School of Technology, Bengaluru. I'm exploring programming, artificial intelligence, and web development while building projects and learning through practical experiences. I enjoy participating in hackathons, experimenting with new tools, and improving my technical skills one project at a time.`,
  github: 'https://github.com/Pratyushsharma28',
  verifiedEmail: 'pratyush2865@gmail.com',
};

export const PROJECTS: Project[] = [
  {
    id: 'board-ace-ai',
    number: '01',
    title: 'Board Ace AI',
    category: 'EdTech & AI Learning Platform',
    summary: 'An AI-powered CBSE learning platform with interactive quiz generation and practice features.',
    description:
      'Board Ace AI was engineered to assist students preparing for CBSE curriculum exams. By integrating intelligent assessment algorithms and targeted practice modules, the platform generates dynamic quizzes, evaluates concept comprehension, and adapts to students’ learning pace.',
    highlights: [
      'Automated syllabus-aligned quiz and mock exam generation',
      'Concept mastery diagnostics and performance feedback loops',
      'Deployed on Render with responsive, accessible student interface',
    ],
    technologies: ['Python', 'Web Development', 'AI Generation', 'Render'],
    liveUrl: 'https://board-ace-ai-m6cl.onrender.com',
    githubUrl: 'https://github.com/Pratyushsharma28/Board-Ace-AI',
    imageSrc: '/src/assets/images/board_ace_ai_abstract_1793128941694.jpg',
  },
  {
    id: 'urbanpulse-ai',
    number: '02',
    title: 'UrbanPulse AI',
    category: 'Urban Intelligence & Smart Mobility',
    summary: 'An AI-powered urban intelligence concept using public transport fleet data to explore smarter mobility and city planning.',
    description:
      'UrbanPulse AI explores how aggregated municipal transport telemetry and commuter traffic flow can inform real-time transit dispatching, route congestion relief, and metropolitan infrastructure planning through machine learning models.',
    highlights: [
      'Fleet telemetry ingestion concept for dynamic headway optimization',
      'Spatial-temporal heatmaps analyzing commuter density bottlenecks',
      'Predictive dispatch models aimed at reducing idle public bus emissions',
    ],
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Urban Analytics'],
    imageSrc: '/src/assets/images/urban_pulse_ai_abstract_1793128942727.jpg',
  },
  {
    id: 'campuscart',
    number: '03',
    title: 'CampusCart',
    category: 'Hyperlocal Student Marketplace',
    summary: 'A college-focused marketplace project designed for student needs.',
    description:
      'CampusCart addresses common campus commerce challenges — buying and reselling academic textbooks, lab equipment, hostel essentials, and stationery inside verified collegiate micro-communities without extortionate delivery costs.',
    highlights: [
      'Tailored listings schema for textbooks, course calculators, and dorm gear',
      'Internal campus discovery filter and peer-to-peer verification flows',
      'Clean responsive user experience optimized for desktop and mobile browsers',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    imageSrc: '/src/assets/images/campus_cart_abstract_1793128943312.jpg',
  },
  {
    id: 'techmatch-ai',
    number: '04',
    title: 'TechMatch AI',
    category: 'Graph-Powered Knowledge Discovery',
    summary: 'An AI-powered technology matching project explored using Neo4j, Google AI Studio, and Render.',
    description:
      'TechMatch AI harnesses graph database relationships to map developer capabilities, project requirements, and technology stacks. By linking dependencies and complementary skills in a Neo4j knowledge graph with AI evaluation, it matches compatible tools and collaborators.',
    highlights: [
      'Graph-based semantic modeling of programming languages, tools, and libraries in Neo4j',
      'Generative matching logic prototyped with Google AI Studio',
      'Cloud service integration and continuous API deployment on Render',
    ],
    technologies: ['Neo4j', 'Google AI Studio', 'Render', 'Python', 'JavaScript'],
    imageSrc: '/src/assets/images/tech_match_ai_abstract_1793128943372.jpg',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core programming fundamentals and algorithmic problem solving as a first-year student',
    skills: [
      { name: 'Python', level: 'Actively Practicing', context: 'Data modeling, algorithmic scripting, problem-solving, and AI experimentation' },
      { name: 'C', level: 'Academic Core', context: 'Foundational systems logic, pointers, memory concepts, and structured programming' },
      { name: 'JavaScript', level: 'Interactive Logic', context: 'DOM manipulation, dynamic client behavior, and event-driven scripting' },
    ],
  },
  {
    title: 'Web Development Basics',
    description: 'Foundational front-end markup and styling for structuring responsive pages',
    skills: [
      { name: 'HTML', level: 'Semantic Markup', context: 'Standard-compliant webpage structuring, tags, and accessibility basics' },
      { name: 'CSS', level: 'Styling & Layout', context: 'Flexbox, responsive grids, media queries, and visual design fundamentals' },
    ],
  },
  {
    title: 'Database',
    description: 'Relational database concepts and structured data storage',
    skills: [
      { name: 'MySQL', level: 'Relational Queries', context: 'Writing SQL queries, tables, primary/foreign keys, and data relationships' },
    ],
  },
  {
    title: 'Tools & Platforms',
    description: 'Everyday developer environment and version control utilities',
    skills: [
      { name: 'Git', level: 'Version Tracking', context: 'Local version control, commits, branches, and command-line repository hygiene' },
      { name: 'GitHub', level: 'Code Collaboration', context: 'Hosting repositories, sharing code, and tracking project versions' },
      { name: 'VS Code', level: 'Primary Editor', context: 'Configured coding environment with extensions and terminal integration' },
    ],
  },
  {
    title: 'Platforms Explored Through Projects',
    description: 'Modern developer platforms and cloud services explored during project building',
    skills: [
      { name: 'Google AI Studio', level: 'Applied Tool', context: 'Prototyping prompt logic and AI exploration for project concepts' },
      { name: 'Render', level: 'Deployment Host', context: 'Hosting and deploying live web services such as Board Ace AI' },
      { name: 'Neo4j', level: 'Graph Exploration', context: 'Exploring graph nodes, edges, and relationship models in TechMatch AI' },
    ],
  },
];

export const EDUCATION_STAGES: EducationStage[] = [
  {
    id: 'school-01',
    stageNumber: '01',
    schoolName: 'Singhania Public School, Songadh',
    classes: 'Classes: 1–3',
    location: 'Songadh, Gujarat',
    description: 'The beginning of my school journey. Here my early curiosity took root, exploring reading, arithmetic, basic science, and discovering the joy of learning.',
    milestones: [
      'Early primary school education and foundational literacy & numeracy',
      'Cultivated an early curiosity for puzzles, shapes, and discovery',
      'Active participation in school sports and classroom activities',
    ],
  },
  {
    id: 'school-02',
    stageNumber: '02',
    schoolName: 'Metas Adventist International School',
    classes: 'Classes: 4–7',
    description: 'The next stage of my schooling. Deepened academic fundamentals, developed teamwork through sports, and began exploring computers and logical thinking.',
    milestones: [
      'Expanded analytical thinking and language proficiency across middle school',
      'Introduction to introductory computer labs and digital tools',
      'Participated in sports tournaments and collaborative school exhibitions',
    ],
  },
  {
    id: 'school-03',
    stageNumber: '03',
    schoolName: 'Atomic Energy Central School',
    classes: 'Classes: 8–12',
    board: 'CBSE',
    description: 'Secondary and Senior Secondary education under the Central Board of Secondary Education (CBSE). Focused intensively on Science and Mathematics, laying the engineering groundwork.',
    milestones: [
      'Completed Class 10 and Class 12 CBSE Board examinations with dedication',
      'Pursued Science stream (Physics, Chemistry, Mathematics, and Computer Science)',
      'Earned prize honors in competitive chess tournaments and represented school in volleyball',
    ],
    scores: [
      {
        examName: 'Class 10 CBSE Board Examination',
        board: 'CBSE Secondary School Examination',
        details: 'Successfully cleared with distinction in Mathematics, Science, and Social Studies, establishing core analytical rigor.',
        highlight: 'Class 10 (CBSE)',
      },
      {
        examName: 'Class 12 CBSE Board Examination',
        board: 'CBSE Senior School Certificate Examination',
        details: 'Rigorous preparation in Physics, Chemistry, and Mathematics, paving the pathway to Computer Science Engineering.',
        highlight: 'Class 12 (CBSE)',
      },
    ],
  },
  {
    id: 'college',
    stageNumber: '04',
    schoolName: 'Quad AI School of Technology',
    classes: 'B.Tech Undergrad (First-Year)',
    location: 'Bengaluru, Karnataka, India',
    period: '2026–2030',
    board: 'Computer Science Engineering (AI & ML)',
    description: 'Currently a First-Year Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning in Bengaluru.',
    milestones: [
      'First-year student learning computer science principles, C, Python, and web fundamentals',
      'Selected for Smart India Hackathon 2026 (SIH 2026)',
      'Quad AI School of Technology Coding Club member',
      'College orientation treasure hunt runner-up',
    ],
    isCurrent: true,
  },
];


export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    period: 'Foundational Years',
    title: 'School Experiences & First Code',
    role: 'Curious Learner',
    institution: 'School Education',
    description:
      'Early curiosity about how digital systems function sparked my exploration of computing fundamentals, logic puzzles, and sports discipline.',
    details: [
      'Discovered basic programming logic and hands-on computer science concepts',
      'Developed strategic thinking through competitive chess tournaments',
      'Strengthened teamwork and resilience participating in inter-school volleyball competitions',
    ],
  },
  {
    period: '2026',
    title: 'Starting CSE at Quad AI School of Technology',
    role: 'B.Tech Undergrad (2026–2030)',
    institution: 'Quad AI School of Technology',
    description:
      'Commenced Computer Science Engineering with a dedicated specialization in Artificial Intelligence and Machine Learning in Bengaluru, India’s premier tech capital.',
    details: [
      'Immersed in AI & Machine Learning coursework and rigorous engineering mathematics',
      'Active participant in campus life, earning runner-up in the college orientation treasure hunt',
      'Inducted into the Quad AI School of Technology Coding Club to collaborate on student software initiatives',
    ],
  },
  {
    period: '2026 & Ongoing',
    title: 'Mastering Programming & Web Architecture',
    role: 'Software Developer',
    institution: 'Self-Directed & Academic',
    description:
      'Systematically deepened mastery across C, Python, JavaScript, HTML, CSS, and relational database systems with MySQL.',
    details: [
      'Practiced clean code architecture, data structures, and algorithmic optimization',
      'Constructed responsive web interfaces with modern CSS layout systems and JavaScript execution',
      'Designed structured schemas and relational databases for persistent web applications',
    ],
  },
  {
    period: '2026',
    title: 'Building AI-Powered Products & Platforms',
    role: 'Project Builder',
    institution: 'Independent Projects & Explorations',
    description:
      'Bridged theoretical AI models with functional web applications, releasing production projects like Board Ace AI on Render.',
    details: [
      'Developed Board Ace AI for CBSE automated quiz generation and student practice',
      'Explored graph-based AI technology matching utilizing Neo4j and Google AI Studio',
      'Conceived UrbanPulse AI for public transport fleet optimization and CampusCart for collegiate trade',
    ],
  },
  {
    period: '2026 & Beyond',
    title: 'Hackathons & Collaborative Innovation',
    role: 'Competitive Innovator',
    institution: 'National & Regional Competitions',
    description:
      'Channeling curiosity into competitive hackathons, prototyping solutions for real societal and industrial challenges.',
    details: [
      'Selected for Smart India Hackathon 2026 (SIH 2026) to engineer solutions for national problem statements',
      'Partnering with fellow student engineers to architect rapid prototypes under tight sprint constraints',
      'Continuously pushing technical limits in machine learning, graph networks, and product design',
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Selected for Smart India Hackathon 2026',
    category: 'National Engineering Competition',
    context: 'SIH 2026',
    description:
      'Qualified for India’s premier nationwide hackathon, competing against top engineering teams to devise innovative digital solutions for critical institutional and public-sector challenges.',
    iconName: 'Award',
  },
  {
    title: 'College Orientation Treasure Hunt Runner-Up',
    category: 'Campus Leadership & Problem Solving',
    context: 'Quad AI School of Technology',
    description:
      'Achieved 2nd place in the competitive orientation treasure hunt, navigating complex analytical clues, collaborative problem-solving, and team coordination across campus.',
    iconName: 'Compass',
  },
  {
    title: 'Chess Prize Winner',
    category: 'Strategic Competition',
    context: 'Competitive Chess',
    description:
      'Earned tournament prize honors in competitive chess, cultivating rigorous tactical foresight, patience, opening theory, and strategic calculation under timed clock pressure.',
    iconName: 'Trophy',
  },
  {
    title: 'Inter-School Volleyball Experience',
    category: 'Athletics & Sportsmanship',
    context: 'School Volleyball Tournament',
    description:
      'Represented school in competitive volleyball tournaments, developing high-pressure team communication, physical agility, court positioning, and dedicated sportsmanship.',
    iconName: 'Activity',
  },
  {
    title: 'Coding Club Member',
    category: 'Technical Community',
    context: 'Quad AI School of Technology',
    description:
      'Active contributor to the official student Coding Club, participating in collaborative code sprints, technical peer workshops, and campus software development initiatives.',
    iconName: 'Code',
  },
];

export const CURRENTLY_EXPLORING = [
  {
    title: 'AI-Powered Applications',
    focus: 'Applied Intelligence',
    description: 'Designing end-user software that leverages modern generative models and adaptive learning feedback loops to solve real-world problems.',
  },
  {
    title: 'Machine Learning Fundamentals',
    focus: 'Core Theory & Math',
    description: 'Deepening mathematical understanding of loss optimization, gradient descent, feature embeddings, and neural network foundations.',
  },
  {
    title: 'Web Development & Architecture',
    focus: 'Frontend & APIs',
    description: 'Crafting performant, accessible web systems with responsive layout mechanics, smooth animations, and clean modular structures.',
  },
  {
    title: 'Graph & Relational Databases',
    focus: 'Data Storage & Graphs',
    description: 'Comparing relational relational schemas in MySQL with high-dimensional knowledge graphs in Neo4j to model complex entities.',
  },
  {
    title: 'Hackathon Innovation Projects',
    focus: 'Rapid Prototyping',
    description: 'Forming agile teams, analyzing problem statements, and delivering minimum viable products under rigorous hackathon time constraints.',
  },
];
