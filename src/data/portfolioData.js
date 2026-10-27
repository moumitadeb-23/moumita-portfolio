export const personalInfo = {
  name: "Moumita Deb",
  title: "Data Science & Cloud Computing Enthusiast | Full Stack Developer",
  shortRole: "BCA (Data Science) Scholar",
  tagline: "Building scalable cloud architectures, intelligent analytics platforms, and modern web applications.",
  location: "Konnagar, Hooghly, West Bengal, India",
  phone: "+91 8100690530",
  email: "moumitadeb.official@gmail.com",
  socials: {
    github: "https://github.com/moumitadeb",
    linkedin: "https://linkedin.com/in/moumita-deb",
    email: "mailto:moumitadeb.official@gmail.com"
  },
  careerObjective: "Motivated and detail-oriented BCA student with a strong academic record (9.04 CGPA) and hands-on experience in Python, Java, AWS, database management, and data analytics. Seeking opportunities to apply technical and problem-solving skills in software development, data analytics, and cloud-based projects while continuously learning and contributing to organizational growth.",
  stats: [
    { label: "Academic CGPA", value: "9.04", detail: "MAKAUT (BCA Data Science)" },
    { label: "Completed Projects", value: "3+", detail: "Cloud, AI & Web Systems" },
    { label: "Certifications", value: "4", detail: "Infosys, Cisco, SAP & AWS" },
    { label: "Core Competencies", value: "6+", detail: "Python, AWS, Power BI, Java" }
  ]
};

export const education = [
  {
    course: "BCA (Data Science)",
    institute: "Techno India Hooghly Campus",
    board: "MAKAUT",
    score: "9.04 CGPA",
    scoreType: "CGPA",
    year: "2023 – 2027",
    status: "Currently Pursuing",
    highlight: "Top Academic Tier with deep focus on Data Structures, Cloud Computing, Advanced Python, and Statistical Analytics.",
    subjects: ["Data Analytics", "Cloud Architectures", "Python Programming", "Database Systems (RDBMS)", "Object Oriented Programming (Java)"]
  },
  {
    course: "12th (Science)",
    institute: "Hindmotor Education Centre",
    board: "CBSE",
    score: "71.6%",
    scoreType: "Percentage",
    year: "2023",
    status: "Completed",
    highlight: "Science stream curriculum establishing rigorous analytical reasoning, physics, chemistry, and mathematics foundation.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
  },
  {
    course: "10th Standard",
    institute: "Hindmotor High School",
    board: "WBBSE",
    score: "93%",
    scoreType: "Percentage",
    year: "2021",
    status: "Completed with Distinction",
    highlight: "Graduated with outstanding academic distinction across core disciplines.",
    subjects: ["Mathematics", "Physical Science", "Life Science", "Languages"]
  }
];

export const technicalSkills = [
  {
    category: "Languages",
    description: "Core programming and scripting languages for systems and web.",
    skills: [
      { name: "Python", level: 90, icon: "FileCode", tag: "Advanced" },
      { name: "Java", level: 82, icon: "Coffee", tag: "Proficient" },
      { name: "C", level: 78, icon: "Cpu", tag: "Solid" },
      { name: "JavaScript", level: 85, icon: "Code", tag: "Proficient" },
      { name: "HTML5 & CSS3", level: 92, icon: "Layout", tag: "Expert" }
    ]
  },
  {
    category: "Frameworks & Backend",
    description: "Robust frameworks for developing APIs, microservices, and server-side apps.",
    skills: [
      { name: "Flask", level: 88, icon: "Server", tag: "Production" },
      { name: "Java Spring Boot", level: 80, icon: "Layers", tag: "Backend" },
      { name: "PHP", level: 75, icon: "Database", tag: "Web & CRUD" }
    ]
  },
  {
    category: "Cloud Computing & AWS",
    description: "Hands-on cloud infrastructure, serverless compute, and monitoring.",
    skills: [
      { name: "AWS Lambda", level: 85, icon: "Zap", tag: "Serverless" },
      { name: "Amazon S3", level: 90, icon: "HardDrive", tag: "Storage" },
      { name: "Amazon EC2", level: 80, icon: "Cloud", tag: "Compute" },
      { name: "AWS IAM", level: 82, icon: "ShieldCheck", tag: "Security" },
      { name: "AWS CloudWatch", level: 78, icon: "Activity", tag: "Telemetry" }
    ]
  },
  {
    category: "Data Analytics & Visualization",
    description: "Translating complex data sets into actionable visual business intelligence.",
    skills: [
      { name: "Power BI", level: 88, icon: "BarChart3", tag: "Dashboards" },
      { name: "DAX", level: 82, icon: "TrendingUp", tag: "Formulas" },
      { name: "MySQL / DBMS", level: 86, icon: "Database", tag: "SQL & Relational" },
      { name: "Data Analytics", level: 85, icon: "PieChart", tag: "Insights & AI" }
    ]
  },
  {
    category: "Platforms & Core Areas",
    description: "Operating systems, engineering practices, and architectural domains.",
    skills: [
      { name: "Linux", level: 82, icon: "Terminal", tag: "OS & Shell" },
      { name: "Windows", level: 92, icon: "Monitor", tag: "OS" },
      { name: "Cloud Computing", level: 88, icon: "CloudRain", tag: "Architecture" },
      { name: "Web Development", level: 90, icon: "Globe", tag: "Full Stack" }
    ]
  }
];

export const projects = [
  {
    id: "finance-analytics",
    title: "Finance Analytics Platform",
    tagline: "AI-Powered Personal Finance & Centralized Financial Tracking",
    description: "Developed a Python Flask-based personal finance platform for managing income, expenses, budgets, investments, and financial goals with data-driven analytics and AI insights.",
    longDescription: "A full-featured personal finance and wealth management system engineered with Python and Flask. Designed to eliminate the fragmentation of personal bookkeeping by providing centralized tracking, visual budgeting analytics, predictive spending alerts, and AI-powered recommendations. Deployed live on PythonAnywhere with secure session management and responsive charting.",
    technologies: ["Python", "Flask", "Data Analytics", "AI Insights", "Chart.js", "PythonAnywhere", "SQLite/MySQL"],
    features: [
      "Income & Expense tracking with categorical breakdown and trend analysis",
      "Dynamic budget allocation and real-time overspending alerts",
      "AI-powered financial insights advising users on saving targets",
      "Centralized financial reporting with downloadable statements",
      "Deployed and actively hosted on PythonAnywhere cloud"
    ],
    github: "https://github.com/moumitadeb/finance-analytics-platform",
    demo: "https://moumitadeb.pythonanywhere.com",
    metrics: "100% centralized tracking with automated financial summaries",
    accentColor: "from-cyan-500 to-blue-600",
    glowColor: "rgba(0, 242, 254, 0.4)",
    type: "analytics"
  },
  {
    id: "serverless-image-sizer",
    title: "Serverless Image Sizer Using AWS",
    tagline: "Event-Driven Auto-Optimization with Edge Caching & Zero Server Overhead",
    description: "Engineered a fully serverless image optimization and resizing pipeline utilizing AWS S3, AWS Lambda, and edge distribution to minimize latency and improve delivery efficiency.",
    longDescription: "An enterprise-grade serverless pipeline designed to handle on-the-fly media transformations without running persistent virtual servers. When an image is uploaded to an input S3 bucket, an event triggers an AWS Lambda function that optimizes and generates multiple viewport resolutions, stores them in an output bucket, and serves them via edge caching for near-instant low-latency worldwide delivery.",
    technologies: ["AWS Lambda", "Amazon S3", "AWS IAM", "CloudWatch", "Edge Caching", "Python / Pillow"],
    features: [
      "Event-driven architecture with zero idle compute costs",
      "Automated image resizing, compression, and WebP format conversion upon upload",
      "Utilized edge caching to improve delivery efficiency and cut network latency",
      "Granular IAM policies for least-privilege security between S3 and Lambda",
      "CloudWatch metrics and alerts monitoring function execution duration and errors"
    ],
    github: "https://github.com/moumitadeb/aws-serverless-image-sizer",
    demo: "#architecture-flow",
    metrics: "Reduced image payload by up to 70% with sub-second execution",
    accentColor: "from-amber-400 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.4)",
    type: "cloud"
  },
  {
    id: "blood-bank-system",
    title: "Blood Bank & Donation Management System",
    tagline: "Life-Saving Donor Coordination & Database-Driven CRUD Platform",
    description: "Developed a comprehensive web-based blood bank management system to streamline donor registration, blood inventory tracking, and urgent blood request fulfillment.",
    longDescription: "A mission-critical medical portal developed to bridge the critical gap between voluntary blood donors, hospital requests, and blood inventory banks. Engineered with PHP and MySQL, the application features role-based authentication, real-time blood group availability tracking, automated request matching, and rigorous database-driven CRUD operations.",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "CRUD Architecture", "Session Auth"],
    features: [
      "Streamlined voluntary donor registration and eligibility screening",
      "Secure administrative authentication and centralized hospital dashboard",
      "Real-time blood stock level monitoring categorized by ABO/Rh blood groups",
      "Full database-driven CRUD operations for donors, patients, and inventory logs",
      "Urgent request dispatch mechanism connecting matching blood group donors"
    ],
    github: "https://github.com/moumitadeb/blood-bank-management-system",
    demo: "#crud-demo",
    metrics: "Instant donor-to-request lookup and real-time stock auditing",
    accentColor: "from-rose-500 to-pink-600",
    glowColor: "rgba(244, 63, 94, 0.4)",
    type: "web"
  }
];

export const certifications = [
  {
    title: "Infosys Virtual Internship 7.0",
    domain: "Python Domain",
    issuer: "Infosys Springboard",
    description: "Completed intensive technical internship focusing on Python software development, algorithmic problem-solving, and clean coding best practices.",
    badge: "Python Certified",
    color: "from-blue-500 to-cyan-500",
    highlights: ["Advanced Python paradigms", "Software engineering workflows", "Real-world project delivery"]
  },
  {
    title: "Introduction to Data Science",
    domain: "Data Science & Statistical Analysis",
    issuer: "Cisco Networking Academy",
    description: "Mastered fundamental concepts in data collection, cleaning, exploratory data analysis, and statistical modeling for computational insights.",
    badge: "Data Science",
    color: "from-teal-500 to-emerald-500",
    highlights: ["Exploratory Data Analysis (EDA)", "Data visualization principles", "Statistical inference"]
  },
  {
    title: "SAP S/4HANA Development",
    domain: "Enterprise Systems & ERP Architecture",
    issuer: "Techno India University, West Bengal",
    description: "Gained foundational expertise in SAP S/4HANA enterprise resource planning, database architectures, and business process automation.",
    badge: "Enterprise Systems",
    color: "from-purple-500 to-indigo-500",
    highlights: ["S/4HANA In-Memory Database concepts", "Enterprise business process integration", "Application modernization"]
  },
  {
    title: "Cloud Computing with AWS",
    domain: "AWS Architecture & Cloud Infrastructure",
    issuer: "Techno Billion AI",
    description: "Comprehensive hands-on training on Amazon Web Services including EC2 provisioning, S3 bucket management, IAM security, Lambda functions, and CloudWatch.",
    badge: "AWS Practitioner",
    color: "from-amber-500 to-orange-500",
    highlights: ["AWS Core Services (EC2, S3, IAM)", "Serverless compute with Lambda", "Cloud monitoring with CloudWatch"]
  }
];

export const personalityTraits = [
  {
    trait: "Quick Learner",
    description: "Rapidly assimilates emerging technologies, cloud paradigms, and complex algorithmic frameworks.",
    icon: "Zap",
    accent: "text-amber-400"
  },
  {
    trait: "Team Player",
    description: "Thrives in cross-functional collaborative settings, valuing active listening, code reviews, and shared ownership.",
    icon: "Users",
    accent: "text-cyan-400"
  },
  {
    trait: "Strong Problem Solving",
    description: "Applies analytical thinking and mathematical rigor to dismantle intricate bugs and architect efficient solutions.",
    icon: "Puzzle",
    accent: "text-emerald-400"
  },
  {
    trait: "Good Communication Skills",
    description: "Articulates technical nuances clearly across technical peers and non-technical stakeholders alike.",
    icon: "MessageSquare",
    accent: "text-purple-400"
  }
];
