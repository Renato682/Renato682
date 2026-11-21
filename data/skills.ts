import {
  BarChart3,
  Braces,
  Database,
  FileCode2,
  GitBranch,
  LayoutTemplate,
  type LucideIcon,
  Server,
  Workflow,
} from "lucide-react";

export type Skill = {
  name: string;
  level: number;
  icon: LucideIcon;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML & CSS", level: 78, icon: LayoutTemplate },
      { name: "TypeScript", level: 65, icon: FileCode2 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Java & Spring Boot", level: 78, icon: Braces },
      { name: "Python", level: 72, icon: Server },
      { name: "SQL & MySQL", level: 75, icon: Database },
    ],
  },
  {
    name: "Ferramentas & dados",
    skills: [
      { name: "Power BI & DAX", level: 82, icon: BarChart3 },
      { name: "Git & GitHub", level: 76, icon: GitBranch },
      { name: "ETL & automação", level: 70, icon: Workflow },
    ],
  },
];
