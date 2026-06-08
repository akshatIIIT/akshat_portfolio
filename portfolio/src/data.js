// ══════════════════════════════════════════════
//  PORTFOLIO DATA — Edit this file to update
//  your portfolio content.
// ══════════════════════════════════════════════

export const DATA = {

  // ── Personal Info ──────────────────────────
  name: "Akshat Raj",
  initials: "AR",
  role: "B.Tech Computer Science Student",
  institution: "IIIT-DELHI",
  batch: "2023 – 2027",
  location: "India",
  email: "vasubokaro1349@gmail.com",
  phone: "+91 7282877461",   // remove if not needed
  bio: "Passionate about building scalable software solutions and exploring cutting-edge technologies. Focused on full-stack development, machine learning, and competitive programming.",
  status: "Open to Opportunities",

  // ── Social Links ───────────────────────────
  github: "https://github.com/akshatIIIT",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "",        // leave empty to hide
  resume: "https://docs.google.com/document/d/1NGltAFyad0o-sYvrkug3X9BjrHlsIa3muNh1sC3us4I/edit?usp=drive_link",        // link to your resume PDF

  // ── Stats removed from hero ─────────────────
  // (add them back here if you ever want them)

  // ── Skills ─────────────────────────────────
  skillGroups: [
    {
      icon: "💻",
      title: "Languages",
      skills: ["C++", "Python", "JavaScript", "Java", "SQL"],
    },
    {
      icon: "🌐",
      title: "Frontend",
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
    },
    {
      icon: "⚙️",
      title: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
    },
    {
      icon: "🗄️",
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      icon: "🤖",
      title: "AI / ML",
      skills: ["Agentic AI","RAG","GenAI","PyTorch", "TensorFlow", "scikit-learn", "Pandas", "NumPy"],
    },
    {
      icon: "🛠️",
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "Linux", "GitHub Actions", "Figma"],
    },
  ],

  // ── Projects ───────────────────────────────
  projects: [
      {
  tag: "Full Stack",
  title: "EduWorks Platform",
  description:
    "A collaborative student project management platform built during a hackathon, enabling real-time project tracking, team coordination, and streamlined communication.",
  stack: ["React", "Node.js", "Tailwind CSS", "JavaScript"],
  github: "https://github.com/akshatIIIT/HackathonProject",
  live: "https://hackathon-project-ajuv.vercel.app/",
},
{
  tag: "AI/ML",
  title: "Movie Recommendation System",
  description:
    "Built an AI-powered movie recommendation system that combines retrieval-augmented generation, semantic search, and collaborative filtering to deliver explainable and personalized movie recommendations at scale.",
  stack: [
    "Python",
    "FAISS",
    "Sentence Transformers",
    "DistilBERT",
    "RAG",
    "LLMs",
    "Streamlit",
    "Machine Learning"
  ],
  github: "https://github.com/Ay-ritesh/CF-Project",
  live: "https://www.youtube.com/watch?v=Kppy8CT4svM",
},
{
  tag: "JAVA (OOPS)",
  title: "AngryBirds Game",
  description:
    "A 2D physics-based Angry Birds inspired game built using Java and LibGDX, featuring optimized collision handling, rendering, and object-oriented design patterns.",
  stack: ["Java", "LibGDX", "Box2D", "JavaFX", "OOP"],
  github: "https://github.com/akshatIIIT/MyAngryBird-Game",
  live: "https://go.screenpal.com/watch/cT1ZqCnXMk5",
},
{
  tag: "Database",
  title: "Book Bazaar",
  description:
    "A CRUD-based book management platform with optimized database design, intuitive user workflows, and efficient relational data management.",
  stack: ["MySQL", "JavaScript", "HTML", "CSS", "EJS", "Node.js"],
  github: "https://github.com/akshatIIIT/BOOK_BAZAAR",
  live: "https://go.screenpal.com/watch/cT1Tj4nXNiH",
},
{
  tag: "Machine Learning",
  title: "EasyVisa Analysis",
  description:
    "A machine learning system that predicts U.S. visa application outcomes by analyzing large-scale applicant and employment data to identify key approval factors.",
  stack: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
  github: "https://github.com/akshatIIIT/EasyVisa_Full_Code_Notebook",
  live: "",
},
{
  tag: "Data Science",
  title: "FoodHub Data Analysis",
  description:
    "A decision-tree based predictive analytics project for identifying loan default risks and generating insights from financial and credit history data.",
  stack: ["Python", "Pandas", "Scikit-learn", "Decision Trees", "Matplotlib"],
  github: "https://github.com/akshatIIIT/FoodHub_Data_Analysis",
  live: "",
},
{
  tag: "Frontend",
  title: "Ecommerce App",
  description:
    "A responsive e-commerce application with authentication, protected routes, shopping cart functionality, and seamless checkout experience.",
  stack: ["React", "Tailwind CSS", "React Router", "Clerk", "Context API"],
  github: "https://github.com/akshatIIIT/ApniDukaan/tree/main",
  live: "https://apnidukaanfrontend.netlify.app/",
},
{
  tag: "Backened",
  title: "AI Chat App",
  description:
    "A full-stack real-time messaging platform featuring secure user authentication, WebSocket-based communication, and an AI assistant capable of answering user queries through OpenAI integration.",
  stack: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.IO",
    "OpenAI API",
    "EJS",
    "HTML",
    "CSS",
    "Bcrypt"
  ],
  github: "https://github.com/akshatIIIT/basic-chattingAPP",
  live: "",
},
{
  tag: "AI/ML",
  title: "RAG Based GenAI Assistant",
  description:
    "An intelligent RAG + ReAct-based AI assistant that performs document retrieval, tool calling, and context-aware question answering using hybrid search and session memory.",
  stack: ["Python", "LangChain", "Gemini", "Qdrant", "RAG", "ReAct"],
  github: "https://github.com/akshatIIIT/ReActRAG-Assistant",
  live: "",
},
  ],

  // ── Experience ─────────────────────────────
  experience: [
    {
      role: "Backend Engineer Intern",
      company: "FoodoScope Pvt Ltd.",
      period: "Jul 2025 – Dec 2025",
      points: [
        "Migrated SpiceRx API (10+ endpoints) at Foodoscope from Django to MERN, delivering structured JSON responses for frontend consumption, improving maintainability and scaling to 100k+ users",
        "Refactored 15k+ lines of legacy code and deployed scalable backend services on AWS (Elastic Beanstalk), improving system stability and ensuring low-latency, consistent API responses",
        "Conducted root cause analysis of backend performance bottlenecks, leading to the optimization of database queries and reducing average API response time by 1.5 seconds",
      ],
    },
    {
      role: "Full Stack Development Intern",
      company: "DREAMRS Labs, IIIT-DELHI",
      period: "May 2025 – Jun 2025",
      points: [
        "Leveraged USPTO PatentView-API and Selenium library to build a Bioinspired patent retrieval system, indexing over 10,000 patents and improving search relevance for bioinspired patents",
        "Initiated a code refactoring effort, resulting in reduction in code complexity and improving code maintainability within the full-stack system for retrieving bioinspired patents",
        "Automated bioinspired patent data processing by creating 11+ modular React components and REST APIs in Node.js, enhancing search accuracy for SBPs by 25% and streamlining patent visualization",
      ],
    },
  ],

  // ── Education ──────────────────────────────
  education: [
    {
      icon: "🏛️",
      degree: "B.Tech in Computer Science & Engineering",
      school: "IIIT-DELHI",
      year: "2023 – 2027",
      grade: "CGPA: 7.84 / 10",
      badges: ["Dean's List", "Technical Society"],
    },
    {
      icon: "🏫",
      degree: "Class XII (CBSE)",
      school: "R.D International School",
      year: "2023",
      grade: "86.4%",
      badges: ["PCM "],
    },
    {
      icon: "🏫",
      degree: "Class X (CBSE)",
      school: "Bishop Scott Boys School",
      year: "2021",
      grade: "90.6%",
      badges: ["School Topper"],
    },
  ],

  // ── Achievements ───────────────────────────
  // link: URL to certificate/proof page. Leave as "" to hide the button.
  achievements: [
    {
      icon: "🏆",
      title: "Hackathon Certificate",
      description: "Secured Google Cloud Agentic AI Certificate, organized by Hack2skill for contributing an innovative AI-driven idea addressing real-world challenges",
      link: "https://certificate.hack2skill.com/user/aidayideasubmission/2025H2S06AID-I30302", 
    },
    {
      icon: "📣",
      title: "Hackathon Certificate",
      description: "Qualified in the Adobe India Hackathon 2025 by successfully completing the MCQ assessment and coding challenge",
      link: "https://unstop.com/certificate-preview/d3004411-a775-4b88-8e46-9ebcb61678b1",   // e.g. "https://doi.org/your-paper-doi"
    },
    {
      icon: "🥇",
      title: "Hackathon Certificate",
      description: "Secured a Hackathon Certificate at Foodoscope FORK IT 2024, IIIT-DELHI, after spending 36 hours Developing a food application",
      link: "https://unstop.com/certificate-preview/6ccee963-b653-40b2-b6d5-17279ad8c647 ",   // e.g. "https://sih.gov.in/your-result"
    },
    {
      icon: "🏆",
      title: "Hackathon Certificate",
      description: "Successfully completed RIISE 2025 IndustrySolve Idea-Thon & Product-a-Thon at IIIT Delhi, focusing on solution design, product ideation, and implementation",
      link: "https://unstop.com/certificate-preview/ef7af06d-08e1-4d0c-b1de-90f95d6b0f75", 
    },
    {
      icon: "⭐",
      title: "LeetCode",
      description: "Solved 300+ problems of DSA",
      link: "https://leetcode.com/u/tZ9kWAA6jm/",
    },
    {
      icon: "📜",
      title: "JEE (AIR 5022)",
      description: "Ranked in the top 0.4% among 1.16 million candidates in the JEE Main and Qualified in JEE Advance",
      link: "",   // e.g. "https://www.credential.net/your-cert-id"
    },
    {
      icon: "⭐",
      title: "CodeForces",
      description: "Max Rating (880)",
      link: "https://codeforces.com/profile/akshat23063",
    },
    {
      icon: "🎓",
      title: "Merit Scholarship",
      description: "Awarded merit scholarship for academic excellence in semesters.",
      link: "",
    },
  ],
};
