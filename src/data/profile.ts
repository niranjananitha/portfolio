export const profile = {
  name: "Niranjan P N",
  role: "Full Stack & ML Engineer",
  location: "Coimbatore, Tamil Nadu",
  // Stored in two parts and only joined in the browser when someone clicks
  // the contact button, so the address never appears as plain text on the page.
  emailUser: "niranjanperumalsamy",
  emailDomain: "gmail.com",
  github: "https://github.com/niranjananitha",
  linkedin: "https://www.linkedin.com/in/niranjan-p-n-1545a2290",
  leetcode: "https://leetcode.com/u/Niranjananitha/",
  resume: "/Niranjan_P_N.pdf",
  summary:
    "Final-year B.E. AI & ML student. I build end-to-end ML applications: FastAPI and MySQL backends, React and Next.js frontends, and XGBoost models that explain their own decisions with SHAP.",
};

export const projects = [
  {
    name: "AI Powered ClaimAssist",
    year: "2026",
    kind: "Full-stack insurance claims platform",
    stack: ["FastAPI", "MySQL", "Next.js", "TypeScript", "XGBoost", "SHAP"],
    link: "https://github.com/niranjananitha",
    points: [
      "Role-based portals for clients, agents and managers, built on 39 REST APIs.",
      "A server-validated 9-stage claim workflow with audit logging at every transition.",
      "Secured with JWT refresh-token rotation, Argon2 password hashing and RBAC.",
      "An XGBoost fraud-risk model scores each claim 0–100, and SHAP shows agents which factors drove the score.",
      "Backend covered by 75 automated pytest tests.",
    ],
    figures: [
      { n: "39", label: "REST APIs" },
      { n: "9", label: "workflow stages" },
      { n: "75", label: "pytest tests" },
    ],
  },
  {
    name: "Medical Equipment Predictive Maintenance",
    year: "2026",
    kind: "Real-time failure prediction, team project",
    stack: ["FastAPI", "XGBoost", "MySQL"],
    link: "https://github.com/niranjananitha",
    points: [
      "Predicts equipment failure from 12+ telemetry parameters across 20,000+ records.",
      "I built the FastAPI service that serves XGBoost risk scores and repair-action triage.",
      "Managed the MySQL database behind the role-based clinical dashboards.",
    ],
    figures: [
      { n: "12+", label: "telemetry signals" },
      { n: "20k+", label: "records" },
    ],
  },
  {
    name: "AI Automation Agent",
    year: "2025",
    kind: "Browser automation agent",
    stack: ["DeepSeek-R1", "Gemini API", "Browser automation"],
    link: null,
    points: [
      "An agent that uses DeepSeek-R1 and Gemini to run multi-step browser workflows and extract data from the web.",
      "Pipelines for API-driven task processing and dynamic page navigation.",
    ],
    figures: [],
  },
];

export const hackathons = [
  {
    name: "Medical Equipment Failure Prediction System",
    event: "Cognizant Hackathon",
    result: "Finalist",
    year: "2026",
    text: "Built the XGBoost risk-scoring model from scratch, covering preprocessing, feature engineering, training and evaluation, plus the FastAPI backend and MySQL database feeding clinical dashboards.",
  },
  {
    name: "Real-Time Credit Risk System",
    event: "INDUSTRI AI Hackathon, IIT Madras",
    result: "24-hour build",
    year: "2026",
    text: "Designed the data preprocessing, risk model and prediction pipeline for real-time credit assessment.",
  },
];

export const skills: Array<{ group: string; items: string[] }> = [
  { group: "Machine learning", items: ["TensorFlow", "Keras", "Scikit-learn", "XGBoost", "SHAP"] },
  { group: "Computer vision", items: ["Image classification", "CNNs", "Transfer learning"] },
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "SQL"] },
  { group: "Web", items: ["React", "Next.js", "FastAPI", "Flask", "REST APIs", "SQLAlchemy", "Alembic", "JWT auth", "Firebase", "Tailwind CSS"] },
  { group: "Data & testing", items: ["MySQL", "SQLite", "Firebase", "pytest", "Pandas", "NumPy", "Matplotlib"] },
  { group: "Tools & cloud", items: ["AWS", "Azure", "Vercel", "GitHub", "Postman", "Google Colab", "Claude Code", "Gemini", "Google Stitch"] },
];

export const timeline = [
  { date: "2026", kind: "Hackathon", title: "Cognizant Hackathon, finalist", note: "Medical equipment failure prediction" },
  { date: "2026", kind: "Hackathon", title: "INDUSTRI AI Hackathon, IIT Madras", note: "Real-time credit risk system, built in 24 hours" },
  { date: "Jan 2026", kind: "Simulation", title: "Deloitte Australia Data Analytics Job Simulation", note: "Forage" },
  { date: "Jun 2025", kind: "Certificate", title: "Microsoft Azure Fundamentals", note: "Microsoft" },
  { date: "Feb 2025", kind: "Certificate", title: "AWS Cloud Practitioner Essentials", note: "Amazon Web Services" },
  { date: "Aug 2024", kind: "Patent", title: "Design patent granted: baby chair with airbag", note: "Child safety" },
  { date: "Sep 2023", kind: "Education", title: "B.E. Artificial Intelligence & Machine Learning", note: "Sri Krishna College of Technology, CGPA 7.15, graduating May 2027" },
];

/* Patent certificate photos. Drop files into /public/patent/ and list them
   here; the patent section shows them beside the drawing. */
export const patentImages: Array<{ src: string; alt: string; width: number; height: number }> = [];
