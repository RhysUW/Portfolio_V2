import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";

export function Footer() {
  return (
    <footer
      className="border-t py-8"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Rhys. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/RhysUW"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-opacity"
            aria-label="GitHub"
          >
            <GitHubIcon width={18} height={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/rhys-underwood/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-opacity"
            aria-label="LinkedIn"
          >
            <LinkedInIcon width={18} height={18} />
          </a>
          <a
            href="mailto:rhysunderwood1@gmail.com"
            className="opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
