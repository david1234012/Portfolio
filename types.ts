
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  image: string;
  fullDescription?: string[];
  highlights?: string[];
}

export interface SubRole {
  title: string;
  period: string;
  description: string[];
}

export interface ExperienceItem {
  id: number;
  company: string;
  role?: string;
  period?: string; // Can be total period for company if subRoles exist
  description?: string[];
  subRoles?: SubRole[];
  logo?: string;
  relatedLinks?: { label: string; url: string }[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ChatState {
  IDLE,
  THINKING,
  STREAMING,
  ERROR
}
