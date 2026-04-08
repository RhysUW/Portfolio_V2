interface SkillPillProps {
  name: string;
}

export function SkillPill({ name }: SkillPillProps) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--card)",
        color: "var(--muted)",
      }}
    >
      {name}
    </span>
  );
}
