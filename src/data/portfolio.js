export const personalInfo = {
  name: "Suraj G Rao",
  title: "AI/ML Engineer | Software Engineer | Generative AI & ML Enthusiast",
  intro:
    "Dedicated Computer Science student specializing in Artificial Intelligence and Machine Learning, passionate about building intelligent systems that solve real-world problems across AI and software engineering.",
  about:
    "I have hands-on experience in Machine Learning, Deep Learning, Generative AI, ML and Backend Development. My work spans building fraud detection systems, GenAI-powered knowledge graph applications, and deploying production-ready ML systems. I also have industry experience as a Trainee Software Engineer.",
  email: "surajgrao0203@gmail.com",
  github: "https://github.com/Suraj-G-Rao",
  linkedin: "https://www.linkedin.com/in/suraj-g-rao/",
  instagram: "https://www.instagram.com/_suraj.rao_",
  twitter: "https://x.com/SurajGRao020",
  resume:
    "https://drive.google.com/file/d/16jsDt2T4MP32RdXz_zibFd4l33BMhqky/view?usp=sharing",
};

export const stats = [
  { label: "Major Projects", value: 3, suffix: "+", icon: "🚀" },
  { label: "Internships / Roles", value: 2, suffix: "+", icon: "💼" },
  { label: "CGPA", value: 9.46, suffix: "/10", icon: "🎓", decimals: 2 },
  { label: "NITK Hackathon Winner", value: 1, suffix: "st", icon: "🏆" },
];

export const skills = {
  "Programming Languages": {
    icon: "💻",
    color: "#4483BE",
    items: ["Python", "Java", "C++", "C", "PL/SQL"],
  },
  "Frameworks & Libraries": {
    icon: "🧩",
    color: "#7C3AED",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "FastAPI",
      "Flask",
      "Streamlit",
      "LangChain",
    ],
  },
  Databases: {
    icon: "🗄️",
    color: "#06B6D4",
    items: ["MySQL", "PostgreSQL", "Neo4j", "PL/SQL"],
  },
  "Tools & Platforms": {
    icon: "🛠️",
    color: "#10B981",
    items: ["Docker", "Git", "GitHub", "MLflow", "DagsHub", "Power BI", "Excel"],
  },
  Specializations: {
    icon: "🧠",
    color: "#F59E0B",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Generative AI",
      "Reinforcement Learning",
      "Graph Knowledge Representation",
    ],
  },
  "Core Subjects": {
    icon: "📚",
    color: "#EC4899",
    items: ["DSA", "DBMS", "OS", "Computer Networks"],
  },
};

export const experience = [
  {
    role: "Trainee Software Engineer",
    company: "LCode Technologies Private Limited",
    period: "Jan 2026 – Jun 2026",
    duration: "6 months",
    type: "Industry",
    color: "#4483BE",
    icon: "💼",
    logo: "/logos/Lcode.jpg",
    points: [
      "Working on backend development and real-world software engineering practices",
      "Gaining hands-on exposure to enterprise software development",
      "Contributing to fraud detection and banking-related software modules",
    ],
  },
  {
    role: "Research Intern",
    company: "National Institute of Technology Karnataka (NITK), Surathkal",
    period: "Dec 2024 – Feb 2025",
    duration: "3 months",
    type: "Research",
    color: "#7C3AED",
    icon: "🔬",
    logo: "/logos/NITK.png",
    points: [
      "Conducted research under ISEA Phase-III initiative using neural networks",
      "Implemented encryption/decryption for training data generation",
      "Built Bidirectional LSTM model for pattern prediction from complex data",
    ],
  },
  {
    role: "Placement Coordinator",
    company: "The National Institute of Engineering, Mysore",
    period: "Dec 2024 – May 2026",
    duration: "1 yr 6 months",
    type: "Leadership",
    color: "#06B6D4",
    icon: "🎓",
    logo: "/logos/NIE.png",
    points: [
      "Coordinating placement activities for AI & ML Department",
      "Bridging communication between students and Training & Placement Office",
      "Supporting placement operations and workshops",
    ],
  },
];

export const projects = [
  {
    title: "RL Based Threat Detection System",
    description:
      "Developed an RL-powered Threat Detection System leveraging Deep Q-Networks with NASIM for real-time attack mitigation in 6G networks. Integrated Knowledge Graph with Neo4j and built a GenAI-powered Cypher query generation system using Groq/Gemini.",
    tech: ["Python", "RL", "DQN", "NASIM", "Neo4j", "Streamlit", "Groq", "Gemini"],
    github: "https://github.com/Suraj-G-Rao/RL-Based-Cyber-Threat-Detection",
    color: "#4483BE",
    gradient: "from-blue-600/20 to-purple-600/10",
    icon: "🛡️",
    category: "AI/ML",
    featured: true,
  },
  {
    title: "DES Decryption Using BiLSTM",
    description:
      "Applied Bidirectional LSTM networks to recover plaintext from DES encrypted ciphertext by learning encryption patterns without access to keys. Research-grade implementation produced during NITK internship.",
    tech: ["Python", "DES", "Deep Learning", "BiLSTM"],
    github: "https://github.com/Suraj-G-Rao/DES-Decryption-Using-BiLSTM",
    color: "#7C3AED",
    gradient: "from-purple-600/20 to-pink-600/10",
    icon: "🔐",
    category: "Deep Learning + Cryptography",
    featured: true,
  },
  {
    title: "Student Performance Prediction",
    description:
      "Developed an end-to-end ML pipeline to predict student academic performance with Flask deployment and Dockerized production setup. Full MLOps lifecycle with MLflow tracking.",
    tech: ["Python", "Flask", "Docker", "Scikit-learn", "MLflow"],
    github: "https://github.com/Suraj-G-Rao/Student-Performance-Prediction",
    color: "#06B6D4",
    gradient: "from-cyan-600/20 to-blue-600/10",
    icon: "📊",
    category: "MLOps + ML",
    featured: false,
  },
];

export const achievements = [
  {
    title: "NITK Surathkal Hackathon Winner",
    event: "Software & Systems Security Bootcamp",
    date: "Feb 2025",
    badge: "🏆 1st Place",
    description: "Secured 1st place at NITK Surathkal in a competitive Software & Systems Security Bootcamp by building an AI-driven cyber threat detection system using Reinforcement Learning and Knowledge Graphs.",
    icon: "🥇",
    color: "#F59E0B",
    image: "/photos/nitk-hackathon.jpg",
    gradient: "from-yellow-500/20 to-orange-500/10",
  },
  {
    title: "Rags to Riches Competition Winner",
    event: "Entrepreneurship Competition (Onyx E-Cell)",
    date: "Jan 2024",
    badge: "🏆 1st Place",
    description: "Won 1st place in a business simulation competition by maximizing returns from ₹100 seed capital through strategic decision-making and execution.",
    icon: "💰",
    color: "#10B981",
    image: "/photos/rags-to-riches.jpg",
    gradient: "from-emerald-500/20 to-green-500/10",
  },
  {
    title: "District-Level Chess Player",
    event: "Competitive Chess",
    date: "Aug 2019",
    badge: "♟ Chess",
    description: "Achieved district-level recognition in chess, demonstrating strong strategic thinking, analytical ability, and decision-making skills.",
    icon: "♟️",
    color: "#4483BE",
    image: "/photos/chess.jpeg",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
];

export const leadership = [
  {
    org: "ALPHA Innovation & Tinkerers' Lab",
    icon: "🔭",
    color: "#7C3AED",
    logo: "/logos/alpha.jpg",
    roles: [
      {
        title: "Head, Department of Project Development & Research",
        period: "Nov 2024 – May 2025",
        current: true,
        description:
          "Contributed to the initial setup and development phase, establishing the foundation by supporting planning, coordination, and early-stage activities to build an environment focused on innovation and hands-on learning.",
      },
      {
        title: "Student Council Member",
        period: "Jun 2024 – Nov 2024",
        current: false,
        description:
          "Served as a Student Council Member during the early formation phase of the ALPHA Innovation and Tinkerers' Lab.",
      },
    ],
  },
  {
    org: "Anveshan NIE",
    icon: "🔍",
    color: "#06B6D4",
    logo: "/logos/anveshan.jpg",
    roles: [
      {
        title: "Core Member",
        period: "Nov 2024 – May 2025",
        current: true,
        description:
          "Organized technical events and workshops focused on Machine Learning, while mentoring peers and juniors in ML concepts and projects. Supported community engagement and knowledge-sharing initiatives.",
      },
      {
        title: "Volunteer",
        period: "May 2024 – Oct 2024",
        current: false,
        description:
          "Volunteered in organizing club activities and supporting technical events for the ML community at NIE.",
      },
    ],
  },
  {
    org: "Vidyavardhaka First Grade College, Mysuru",
    icon: "🎤",
    color: "#10B981",
    logo: "/logos/vvfgc.jpg",
    roles: [
      {
        title: "Resource Person – AI & Applications",
        period: "Apr 2024",
        current: false,
        description:
          "Addressed final-year BCA students on AI and its practical applications, covering NLP and ML topics. Guided by M J Yogesh sir during this session.",
      },
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering – CSE (AI & ML)",
    institution: "The National Institute of Engineering, Mysore",
    period: "2022 – 2026",
    score: "CGPA: 9.46/10",
    icon: "🎓",
    color: "#4483BE",
    logo: "/logos/NIE.png",
  },
  {
    degree: "Pre-University (Science)",
    institution: "Sri Chaitanya College of Education",
    period: "2020 – 2022",
    score: "94%",
    icon: "📖",
    color: "#7C3AED",
    logo: "/logos/puc.png",
  },
  {
    degree: "SSLC",
    institution: "Sri Mahalingeshwara English Medium School",
    period: "2019 – 2020",
    score: "92.16%",
    icon: "🏫",
    color: "#06B6D4",
    logo: "/logos/school.png",
  },
];

export const certifications = [
  {
    title: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
    issuer: "Udemy",
    image: "/photos/complete-data-science.jpg",
    credential: "https://ude.my/UC-5a625427-9e55-4bd8-a4fa-88049b8e9667",
    color: "#4483BE",
  },
  {
    title: "AI Fluency: AI Capabilities & Limitations",
    issuer: "Anthropic",
    image: "/photos/anthropic.jpg",
    credential: "https://verify.skilljar.com/c/p8owhpzjmjng",
    color: "#D97757",
  },
  {
    title: "Complete Generative AI Course with Langchain and Huggingface",
    issuer: "Udemy",
    image: "/photos/generative-ai.jpg",
    credential: "https://ude.my/UC-ac4941ba-2340-412b-800c-b261f47ce2ce",
    color: "#06B6D4",
  },
];

export const techIcons = [
  { label: "Python", emoji: "🐍", color: "#3B82F6" },
  { label: "TensorFlow", emoji: "🧠", color: "#FF6F00" },
  { label: "PyTorch", emoji: "🔥", color: "#EE4C2C" },
  { label: "Docker", emoji: "🐳", color: "#2496ED" },
  { label: "Neo4j", emoji: "🕸️", color: "#008CC1" },
  { label: "ML", emoji: "⚡", color: "#F59E0B" },
  { label: "AI", emoji: "🤖", color: "#7C3AED" },
  { label: "LangChain", emoji: "🔗", color: "#10B981" },
];
