import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="group flex flex-col gap-4 rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--card)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(255,255,255,0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-base leading-snug">
          {project.title}
        </h3>
        <div className="flex items-center gap-3 shrink-0 mt-0.5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-40 hover:opacity-100 transition-opacity"
            aria-label={`${project.title} on GitHub`}
          >
            <GitHubIcon width={16} height={16} />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 transition-opacity"
              aria-label={`${project.title} live site`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed line-clamp-2 flex-1"
        style={{ color: "var(--muted)" }}
      >
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono"
            style={{ color: "var(--muted)" }}
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
