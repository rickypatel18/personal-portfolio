import { IconType } from "react-icons";

export interface ProjectImages {
  [key: string]: string; // Allows image1, image2, etc.
}

export interface Project {
  id: string;
  bgColor?: `bg-${string}-${number}`;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  githubLink: string;
  image: string;
  otherImages?: ProjectImages[];
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  tasks: string[];
}

export interface AboutSkillData {
  id: number,
  tech: string,
  icon: IconType,
  items: string[],
  font: string
}

export interface AboutExperience {
  id: number,
  title: string,
  company: string,
  ul: string[],
}

export interface AboutEducation {
  id: number,
  title: string,
  college: string,
  ul: string[],
}