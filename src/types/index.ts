export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  status: "active" | "archived" | "wip";
}

export interface Skill {
  name: string;
  category: "language" | "framework" | "tool" | "other";
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
