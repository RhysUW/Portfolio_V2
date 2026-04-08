import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SkillPill } from "@/components/ui/SkillPill";
import { skills } from "@/data/skills";

const categories: Array<{ label: string; key: "language" | "framework" | "tool" | "other" }> = [
  { label: "Languages", key: "language" },
  { label: "Frameworks & Libraries", key: "framework" },
  { label: "Tools & Platforms", key: "tool" },
];

export function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl font-semibold tracking-tight mb-14">About</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: bio */}
        <div className="flex flex-col gap-5">
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            I&apos;m a Computer Science student at the University of Victoria driven by a passion for learning new technologies and solving complex problems.
            I&apos;m particularly interested in building robust backend systems, from designing scalable APIs to optimizing performance behind the scenes.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            When I&apos;m not coding, you can find me snowboarding in the mountains,
            at the gym, or playing a variety of tabletop miniature games.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            I value clean code, thoughtful architecture, and shipping things that actually work.
          </p>
        </div>

        {/* Right: skills */}
        <div className="flex flex-col gap-8">
          {categories.map(({ label, key }) => {
            const filtered = skills.filter((s) => s.category === key);
            if (!filtered.length) return null;
            return (
              <div key={key}>
                <p
                  className="text-xs font-mono uppercase tracking-widest mb-3"
                  style={{ color: "var(--muted)" }}
                >
                  {label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {filtered.map((skill) => (
                    <SkillPill key={skill.name} name={skill.name} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
