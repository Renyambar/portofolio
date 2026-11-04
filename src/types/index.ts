export type Language = 'id' | 'en';
export type Theme = 'light' | 'dark';

export interface Project {
  id: string;
  title: string;
  categories: Array<'AI & Computer Vision' | 'Full-Stack Web' | 'Robotics & Edge AI'>;
  role: {
    id: string;
    en: string;
  };
  achievementBadge?: {
    id: string;
    en: string;
  };
  githubUrl?: string;
  isNda?: boolean;
  demoUrl?: string;
  techStack: string[];
  description: {
    id: string;
    en: string;
  };
  fullDetails?: {
    id: {
      overview: string;
      highlights: string[];
      metrics: string[];
    };
    en: {
      overview: string;
      highlights: string[];
      metrics: string[];
    };
  };
}

export interface SkillCategory {
  title: {
    id: string;
    en: string;
  };
  iconName: string;
  skills: string[];
}

export interface WorkflowStep {
  step: string;
  title: {
    id: string;
    en: string;
  };
  desc: {
    id: string;
    en: string;
  };
  iconName: string;
}

export interface JourneyItem {
  period: {
    id: string;
    en: string;
  };
  role: {
    id: string;
    en: string;
  };
  institution: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  badge?: {
    id: string;
    en: string;
  };
  type: 'research' | 'robotics' | 'education' | 'committee' | 'organization';
}

export interface StatItem {
  value: string;
  label: {
    id: string;
    en: string;
  };
  sublabel: {
    id: string;
    en: string;
  };
}
