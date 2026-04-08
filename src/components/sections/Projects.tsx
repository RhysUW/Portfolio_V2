"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  const sorted = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  };

  return (
    <SectionWrapper id="projects">
      {/* Header row */}
      <div className="flex items-end justify-between mb-14 gap-4">
        <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
        <a
          href="https://github.com/RhysUW"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm opacity-50 hover:opacity-100 transition-opacity shrink-0"
        >
          All on GitHub
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Grid */}
      <motion.div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {sorted.map((project) => (
          <motion.div key={project.id} variants={cardVariant}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
