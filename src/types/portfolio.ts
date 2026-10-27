export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageSrc: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    context: string;
  }[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  role: string;
  institution: string;
  description: string;
  details: string[];
}

export interface Achievement {
  title: string;
  category: string;
  context: string;
  description: string;
  iconName: string;
}

export interface EducationStage {
  id: string;
  stageNumber: string;
  schoolName: string;
  classes: string;
  board?: string;
  location?: string;
  period?: string;
  description: string;
  milestones: string[];
  scores?: {
    examName: string;
    board: string;
    details: string;
    highlight?: string;
  }[];
  isCurrent?: boolean;
}

