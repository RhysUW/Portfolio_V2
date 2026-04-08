import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Denta Drive",
    description:
      "A dental patient managment application developed to aid clinitians manage their patients",
    techStack: ["Node.js", "React", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/RhysUW/Denta-Drive",
    liveUrl: "https://denta-drive.vercel.app/login",
    featured: true,
    status: "active",
  },
  {
    id: "project-2",
    title: "Graph Hub",
    description:
      "A graph visualization website developed while taking Data Structures and ALgorithms class to help visualize different graph traversal algorithms",
    techStack: ["Javascript", "HTML", "CSS"],
    githubUrl: "https://github.com/RhysUW/GraphHub",
    featured: true,
    status: "active",
  },
  {
    id: "project-3",
    title: "40k Tabletop Simulator",
    description:
      "Dipping my toes into game development this is an ongoing project to build a way to play Warhammer 40k online with firends",
    techStack: ["C#", "Unity", "Blender"],
    githubUrl: "https://github.com/RhysUW/project-three",
    liveUrl: "https://project-three.example.com",
    featured: false,
    status: "active",
  },
];
