export const personalInfo = {
  name: "Suraj G Rao",
  title: "AI/ML Engineer | Software Engineer | Generative AI & ML Enthusiast",
  intro:
    "Dedicated Computer Science student specializing in Artificial Intelligence and Machine Learning, passionate about building intelligent systems that solve real-world problems across AI, cybersecurity, and software engineering.",
  about:
    "I have hands-on experience in Machine Learning, Deep Learning, Generative AI, ML and Backend Development. My work spans building fraud detection systems, RL-based cyber threat detection models, GenAI-powered knowledge graph applications, and deploying production-ready ML systems. I also have industry experience as a Trainee Software Engineer and research experience in cryptanalysis using neural networks.",
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
  { label: "Hackathon Winner", value: 1, suffix: "st", icon: "🏆" },
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
      "Cybersecurity",
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
    period: "Jan 2026 – Present",
    type: "Industry",
    color: "#4483BE",
    icon: "💼",
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
    type: "Research",
    color: "#7C3AED",
    icon: "🔬",
    points: [
      "Conducted research under ISEA Phase-III initiative in cryptanalysis using neural networks",
      "Implemented DES encryption/decryption for training data generation",
      "Built Bidirectional LSTM model for plaintext prediction from ciphertext patterns",
    ],
  },
  {
    role: "Placement Coordinator",
    company: "The National Institute of Engineering, Mysore",
    period: "Dec 2024 – Present",
    type: "Leadership",
    color: "#06B6D4",
    icon: "🎓",
    points: [
      "Coordinating placement activities for AI & ML Department",
      "Bridging communication between students and Training & Placement Office",
      "Supporting placement operations and workshops",
    ],
  },
];

export const projects = [
  {
    title: "RL Based Cyber Threat Detection System",
    description:
      "Developed an RL-powered Cyber Threat Detection System leveraging Deep Q-Networks with NASIM for real-time attack mitigation in 6G networks. Integrated Cyber Knowledge Graph with Neo4j and built a GenAI-powered Cypher query generation system using Groq/Gemini.",
    tech: ["Python", "RL", "DQN", "NASIM", "Neo4j", "Streamlit", "Groq", "Gemini"],
    github: "https://github.com/Suraj-G-Rao/RL-Based-Cyber-Threat-Detection",
    color: "#4483BE",
    gradient: "from-blue-600/20 to-purple-600/10",
    icon: "🛡️",
    category: "AI/ML + Security",
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
    title: "1st Place",
    event: "NITK Software & Systems Security Bootcamp",
    description: "Secured top position at the prestigious NIT Karnataka security-focused bootcamp.",
    icon: "🥇",
    color: "#F59E0B",
    gradient: "from-yellow-500/20 to-orange-500/10",
  },
  {
    title: "State-Level Winner",
    event: "SAP Hackathon 2025",
    description: "Won at the state level in the SAP Hackathon 2025 with an innovative AI solution.",
    icon: "🏆",
    color: "#4483BE",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
];

export const leadership = [
  {
    role: "Head, Department of Project Development & Research",
    org: "ALPHA Innovation & Tinkerers' Lab",
    icon: "🔭",
    color: "#7C3AED",
  },
  {
    role: "Core Member",
    org: "Anveshan NIE",
    icon: "🔍",
    color: "#06B6D4",
  },
  {
    role: "Resource Person",
    org: "AI & Applications Session for BCA Students",
    icon: "🎤",
    color: "#10B981",
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
  },
  {
    degree: "Pre-University (Science)",
    institution: "Sri Chaitanya College of Education",
    period: "2020 – 2022",
    score: "94%",
    icon: "📖",
    color: "#7C3AED",
  },
  {
    degree: "SSLC",
    institution: "Sri Mahalingeshwara English Medium School",
    period: "2019 – 2020",
    score: "92.16%",
    icon: "🏫",
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
