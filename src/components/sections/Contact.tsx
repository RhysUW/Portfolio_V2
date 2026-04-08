import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactForm } from "@/components/ui/ContactForm";
import { ElementType, SVGProps } from "react";

type IconComponent = ElementType<SVGProps<SVGSVGElement>>;

const contactLinks: Array<{
  icon: IconComponent;
  label: string;
  value: string;
  href: string;
}> = [
  {
    icon: Mail as IconComponent,
    label: "Email",
    value: "rhysunderwood1@gmail.com",
    href: "mailto:rhysunderwood1@gmail.com",
  },
  {
    icon: GitHubIcon as IconComponent,
    label: "GitHub",
    value: "github.com/RhysUW",
    href: "https://github.com/RhysUW",
  },
  {
    icon: LinkedInIcon as IconComponent,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/rhys-underwood/",
    href: "https://www.linkedin.com/in/rhys-underwood/",
  },
];

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl font-semibold tracking-tight mb-14">
        Get In Touch
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: copy + direct links */}
        <div className="flex flex-col gap-8">
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Have a project in mind, want to collaborate, or just want to say hi?
            Feel free to reach out — I&apos;ll get back to you as soon as I can.
          </p>

          <div className="flex flex-col gap-4">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4"
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg border shrink-0 transition-colors group-hover:border-white/20"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
                >
                  <Icon
                    width={16}
                    height={16}
                    className="opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--muted)" }}>
                    {label}
                  </span>
                  <span className="text-sm group-hover:underline">{value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}
