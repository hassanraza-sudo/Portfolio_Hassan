export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  extendedDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architecture: string;
  challenges: string;
  lessons: string;
  image: string;
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  skills: string[];
}

export interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Achievement {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}
