export interface ProjectImages {
   [key: string]: string; // Allows oi1, oi2, etc.
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
