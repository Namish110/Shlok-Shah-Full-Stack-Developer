import bondsaddaImg from "../assets/images/bondsadda.png";
import dppcccvrImg from "../assets/images/dppcccvr.png";
import employeemImg from "../assets/images/employeem.png";
import hospitalImg from "../assets/images/hospital.png";

export const heroStats = [
  { label: "Years of Experience", value: "4+" },
  { label: "Projects Delivered", value: "20+" },
  { label: "Users Served", value: "10K+" },
];

export const techStack = [
  "ASP.NET Core",
  "C#",
  "React.js",
  "Microservices",
  "SignalR",
  "AWS",
  "Azure",
  "SQL Server",
  "Docker",
  "OAuth/JWT",
  "Entity Framework",
];

export const aboutTiles = [
  { label: "Focus", value: "Enterprise web apps" },
  { label: "Specialty", value: "Government solutions" },
  { label: "Strength", value: "Secure delivery" },
  { label: "Style", value: "Clean UX + speed" },
];

export const skillCategories = {
  Backend: [
    "ASP.NET Core",
    "C#",
    "Microservices",
    "SignalR",
    "REST APIs",
    "Entity Framework",
  ],
  Frontend: ["React.js", "JavaScript", "Tailwind CSS", "Responsive UI", "Framer Motion"],
  Cloud: ["AWS", "Azure", "CI/CD", "Docker", "Deployment Pipelines"],
  Database: ["SQL Server", "MySQL", "Schema Design", "Query Tuning", "Stored Procedures"],
  Security: ["OAuth/JWT", "OWASP", "Role-Based Access", "Secure APIs", "CORS"],
  Tools: ["Git", "Postman", "Swagger", "Jira", "VS Code", "Figma"],
};

export const skillSummary = [
  { label: "API speed improvement", value: "45%" },
  { label: "Users supported", value: "10K+" },
  { label: "Security posture", value: "OWASP" },
];

export const experienceEntries = [
  {
    time: "2025 — Present",
    role: "Senior Software Engineer",
    company: "Dimension Groups",
    accent: "blue",
    tags: ["Gov + Enterprise", "BSE API", "Shriram API"],
    points: [
      "Built secure enterprise workflows for finance-facing web applications.",
      "Integrated BSE and Shriram APIs to streamline bonds operations.",
      "Improved reliability and reduced friction across daily user journeys.",
    ],
  },
  {
    time: "2024 — 2025",
    role: "Dot Net Developer",
    company: "NEGD / NIC",
    accent: "green",
    tags: ["React", ".NET MVC", "MySQL"],
    points: [
      "Delivered citizen-facing portal features in coordination with government teams.",
      "Supported portal modules, documentation, and API validation workflows.",
      "Strengthened performance and maintainability across release cycles.",
    ],
  },
  {
    time: "2022 — 2024",
    role: "Full Stack Developer",
    company: "IREDA",
    accent: "amber",
    tags: ["REST APIs", "SQL Server", "CI/CD"],
    points: [
      "Designed APIs and database workflows for business-critical systems.",
      "Improved response times by optimizing service calls and queries.",
      "Contributed to cloud deployment, testing, and release support.",
    ],
  },
  {
    time: "2021 — 2022",
    role: "Dot Net Developer",
    company: "Vocman",
    accent: "purple",
    tags: ["ASP.NET", "Support", "Stability"],
    points: [
      "Supported feature delivery and bug-fix cycles in a fast-moving product team.",
      "Worked on issue resolution, code quality, and production stability.",
      "Collaborated closely with product stakeholders to keep releases smooth.",
    ],
  },
];

export const projects = [
  {
    title: "Gov Portal",
    accent: "blue",
    image: dppcccvrImg,
    desc: "Government portal for streamlined document workflows and citizen services.",
    tech: "React.js • ASP.NET Core • SQL Server",
  },
  {
    title: "Healthcare Platform",
    accent: "green",
    image: hospitalImg,
    desc: "Healthcare operations dashboard for records, scheduling, and coordination.",
    tech: "React.js • Microservices • Azure",
  },
  {
    title: "Analytics Suite",
    accent: "amber",
    image: bondsaddaImg,
    desc: "Insightful analytics workspace for performance tracking and reporting.",
    tech: "ASP.NET Core • SQL Server • SignalR",
  },
  {
    title: "Microservices Hub",
    accent: "purple",
    image: employeemImg,
    desc: "Modular internal platform focused on workflows, user roles, and scalability.",
    tech: "Microservices • Docker • OAuth/JWT",
  },
];

export const contactTiles = [
  {
    label: "Email",
    value: "guptanamish11@gamail.com",
    href: "mailto:guptanamish11@gamail.com",
    accent: "blue",
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/shlokshahdeveloper",
    accent: "green",
  },
  {
    label: "GitHub",
    value: "View code and builds",
    href: "https://github.com/Namish110",
    accent: "purple",
  },
];
