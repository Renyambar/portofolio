export type Language = 'id' | 'en';
export type Theme = 'light' | 'dark';

export interface ExperienceItem {
  id: string;
  role: { id: string; en: string };
  institution: { id: string; en: string };
  period: { id: string; en: string };
  badge?: { id: string; en: string };
  description: { id: string; en: string };
  repoUrl?: string;
  isNda?: boolean;
}

export interface ProjectItem {
  id: string;
  title: { id: string; en: string };
  subtitle: { id: string; en: string };
  year: string;
  techStack: string[];
  description: { id: string; en: string };
  githubUrl: string;
}

export interface SkillCategory {
  id: string;
  title: { id: string; en: string };
  focus: { id: string; en: string };
  skills: string[];
}
