
import { ExperienceItem, Project, SkillCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Jui-Hsun (David) Wang",
  title: "Senior Engineer",
  tagline: "Architecting robust enterprise middleware and high-availability systems.",
  bio: "I'm a Senior Engineer at QNAP Systems with a focus on enterprise NAS middleware, microservices, and system robustness. I specialize in Golang, Node.js, and React.js, with a proven track record of designing High Availability Managers and optimizing software architecture. I am passionate about integrating microservices, improving fault tolerance, and automating CI/CD pipelines to boost development efficiency.",
  email: "david1234012@gmail.com",
  phone: "(+886) 971-851-691",
  location: "Taipei, Taiwan",
  social: {
    github: "#",
    linkedin: "#",
    twitter: "#"
  }
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Golang", "Python", "JavaScript", "Java", "HTML/CSS"]
  },
  {
    name: "Backend & Cloud",
    skills: ["Microservices", "gRPC", "RESTful APIs", "Docker", "etcd", "Cassandra"]
  },
  {
    name: "Web & Frameworks",
    skills: ["React.js", "Redux", "Node.js", "Gin (Go)", "Selenium"]
  },
  {
    name: "DevOps & Tools",
    skills: ["CI/CD", "Git", "High Availability", "System Design", "Automated Testing"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    company: "QNAP Systems",
    role: "Senior Engineer",
    period: "Apr. 2020 – Present",
    subRoles: [
      { title: "Senior Engineer", period: "2025 – Present", description: [] },
      { title: "High Level Engineer", period: "2023 – 2025", description: [] },
      { title: "Junior Engineer", period: "2020 – 2023", description: [] }
    ],
    description: [
      "Engineered enterprise NAS middleware, integrating microservices to enhance modularity and system robustness.",
      "Integrated multiple microservices to enable seamless interaction between different functional modules.",
      "Led the design of a High Availability Manager, improving fault tolerance and reducing downtime.",
      "Improved software architecture to enhance maintainability, readability, and scalability.",
      "Implemented CI/CD pipelines and automated testing frameworks, increasing development efficiency by 30%."
    ],
    relatedLinks: [
      { label: "2024 Computex Showcase", url: "#" }
    ]
  },
  {
    id: 3,
    company: "TSMC",
    role: "Intern",
    period: "Jul. 2018 – Aug. 2018",
    description: [
      "Organized client negotiation records to provide actionable insights for sales strategy.",
      "Conducted competitive analysis to prioritize high-value clients, contributing to improved client engagement."
    ]
  },
  {
    id: 2,
    company: "National Central University",
    role: "MS in Computer Science",
    period: "Sep. 2017 – Jul. 2019",
    description: [
      "Academic Excellence Award (Ranked #1/10 in Software Engineering Division).",
      "Thesis: 'Causal Rule Mining Based on Multi-Dimensional Structure for Institutional Research Decision-Support Task.'"
    ],
    relatedLinks: [
      { label: "View Thesis", url: "#" }
    ]
  },
  {
    id: 4,
    company: "National Kaohsiung Normal University",
    role: "BS in Software Engineering",
    period: "Sep. 2013 – Jul. 2017",
    description: [
      "Publication: 'The Implementation of NFC-Based Roll-Calling Application System', presented at the 2016 Taiwan Conference on Software Engineering."
    ],
    relatedLinks: [
      { label: "View Publication", url: "#" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "High Availability Manager",
    description: "Centralized HA management processes for QuTS, enhancing system reliability and reducing downtime to 30 seconds.",
    fullDescription: [
      "Designed and implemented a centralized High Availability (HA) management system for the QuTS operating system. The primary goal was to enhance system reliability for enterprise customers who cannot afford downtime.",
      "The system autonomously monitors the health of cluster nodes and services. Upon detecting a failure, it triggers an automatic failover process to standby nodes, ensuring business continuity."
    ],
    highlights: [
      "Reduced system downtime to under 30 seconds during critical failures.",
      "Showcased successfully at 2024 Computex as a key enterprise feature.",
      "Designed a robust cluster foundation architecture with efficient failover workflows.",
      "Developed scalable middleware using Golang, focusing on modularity for future extensions."
    ],
    tags: ["Golang", "High Availability", "Clustering", "Failover", "System Architecture"],
    link: "#",
    image: "https://picsum.photos/800/500?random=10"
  },
  {
    id: 2,
    title: "Maglev Storage Firmware",
    description: "A new firmware with virtualized development environment and independent micro-service architecture. Implemented frontend components using React.js.",
    fullDescription: [
      "Maglev represents the next generation of QNAP enterprise storage firmware. The project involved moving from a monolithic architecture to a containerized, micro-service-based approach.",
      "My role focused on bridging the gap between the complex backend microservices and the user interface, ensuring a responsive and intuitive experience for system administrators."
    ],
    highlights: [
      "Implemented dynamic frontend components using React.js and Redux.",
      "Improved state management and UI performance for large-scale storage data visualization.",
      "Designed and integrated comprehensive automated test processes using Selenium.",
      "Contributed to a virtualized development environment that accelerated feature delivery."
    ],
    tags: ["React.js", "Redux", "Microservices", "Selenium", "UI Performance"],
    link: "#",
    image: "https://picsum.photos/800/500?random=20"
  },
  {
    id: 3,
    title: "QuCS Hyper-Converged Storage",
    description: "Infrastructure integrating computing, storage, and networking resources. Developed middleware using Node.js and Python.",
    fullDescription: [
      "QuCS is a Hyper-Converged Infrastructure (HCI) solution that integrates computing, storage, and networking into a unified system. It allows users to manage virtualized resources alongside physical storage.",
      "I developed the critical middleware layer that orchestrates commands between the frontend dashboard and the underlying infrastructure services."
    ],
    highlights: [
      "Developed middleware using Node.js and Python to integrate various microservices.",
      "Architected an event-triggered mechanism that reduced API calls by 60%.",
      "Significantly improved system responsiveness and user experience.",
      "Unified management interface for diverse hardware resources."
    ],
    tags: ["Node.js", "Python", "Middleware", "Event-Driven", "Optimization"],
    link: "#",
    image: "https://picsum.photos/800/500?random=30"
  }
];

// System prompt for the AI agent
export const AI_SYSTEM_PROMPT = `
You are an AI assistant for Jui-Hsun (David) Wang's personal portfolio website. 
Your goal is to answer questions about David's professional background, skills, and projects in a friendly, professional, and concise manner.

Here is David's Resume Context:
Name: ${PERSONAL_INFO.name}
Title: ${PERSONAL_INFO.title}
Bio: ${PERSONAL_INFO.bio}

Skills: ${JSON.stringify(SKILLS)}
Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS)}

Guidelines:
- Be polite and enthusiastic.
- Keep answers relatively short (under 3 paragraphs) unless asked for detail.
- If asked about something not in the resume (like personal address or political views), politely decline and steer back to professional topics.
- Emphasize David's expertise in Golang, Microservices, System Architecture, and High Availability systems.
- You are speaking on behalf of David's website, not as David himself (e.g., say "David has experience in..." instead of "I have experience in...").
`;
