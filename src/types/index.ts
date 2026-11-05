export type Language = 'id' | 'en';
export type Theme = 'light' | 'dark';

export interface ProjectItem {
  id: string;
  index: string;
  category: 'Web Development' | 'Computer Vision & AI' | 'Robotics';
  year: string;
  title: string;
  subtitle: string;
  description: { id: string; en: string };
  techStack: string[];
  githubUrl: string;
  role: { id: string; en: string };
  gallery: Array<{
    src: string;
    caption: { id: string; en: string };
  }>;
  overview: { id: string; en: string };
  features: { id: string[]; en: string[] };
}

export interface ExperienceItem {
  id: string;
  period: { id: string; en: string };
  role: { id: string; en: string };
  institution: { id: string; en: string };
  badge?: { id: string; en: string };
  points: { id: string[]; en: string[] };
  repoUrl?: string;
}

export interface MilestoneItem {
  index: string;
  title: { id: string; en: string };
  year: string;
}

export interface WorkflowStage {
  step: string;
  title: string;
  desc: { id: string; en: string };
}

export interface SkillCategory {
  id: string;
  title: { id: string; en: string };
  skills: string[];
}
