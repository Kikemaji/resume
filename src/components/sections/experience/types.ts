export interface SkillCategory {
  title: string;
  skills: Skill[];
}
export type Skill = { name: string; highlighted: boolean };
export type Link = { name: string; url: string };
