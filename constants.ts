
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
    skills: [
      { name: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" }
    ]
  },
  {
    name: "Backend & Cloud",
    skills: [
      { name: "Microservices" },
      { name: "gRPC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg" },
      { name: "WebSocket" },
      { name: "RESTful APIs" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "etcd", icon: "https://raw.githubusercontent.com/cncf/artwork/master/projects/etcd/icon/color/etcd-icon-color.svg" },
      { name: "Cassandra", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cassandra/cassandra-original.svg" }
    ]
  },
  {
    name: "Web & Frameworks",
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Gin (Go)" },
      { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" }
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "CI/CD" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "High Availability" },
      { name: "System Design" },
      { name: "Automated Testing" }
    ]
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
      { label: "2024 Computex Showcase", url: "https://www.qnap.com/en-us/news/2024/computex-2024-qnap-showcases-storage-and-network-solutions-in-ai-smart-manufacturing-high-availability-cloud-video-editing-and-air-gap-backup" }
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
      { label: "View Publication", url: "https://sso.nknu.edu.tw/FacultyExpertise/previewAndLog.aspx?cAES=TGq%2BXQ4N2J3%2BHSR0hQkPlu8h8z5S8449CaNVJ1vH6%2Bx5sTYxUImIICRGninZRvksr24xBMjG0dOb2tH0ginVoJlbNCJXLzJ2no2wUYHDoPbxhNj8iyHOFMG2%2FZqZeYp8D6jtRMC%2FyNy8Evk2pRyllwoPkhaYOW9Tp44dus5kqWk%3D" }
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
