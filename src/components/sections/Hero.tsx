"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: text content */}
          <motion.div
            className="flex flex-col gap-6 flex-1"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting */}
            <motion.p
              variants={item}
              className="text-sm font-mono"
              style={{ color: "var(--accent)" }}
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none"
            >
              Rhys
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={item}
              className="text-xl sm:text-2xl font-light"
              style={{ color: "var(--muted)" }}
            >
              Software Developer
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="text-base leading-relaxed max-w-md"
              style={{ color: "var(--muted)" }}
            >
              Im a third year computer science student at the University of Victoria
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
              <Button variant="primary" onClick={() => handleScroll("projects")}>
                View My Work
              </Button>
              <Button variant="ghost" onClick={() => handleScroll("contact")}>
                Get In Touch
              </Button>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={item} className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com/RhysUW"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-40 hover:opacity-100 transition-opacity"
                aria-label="GitHub"
              >
                <GitHubIcon width={20} height={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rhys-underwood/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-40 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <LinkedInIcon width={20} height={20} />
              </a>
              <button
                onClick={() => handleScroll("contact")}
                className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
                aria-label="Contact"
              >
                <Mail size={20} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" as const }}
          >
            <div
              className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border"
              style={{ borderColor: "var(--border)" }}
            >
              <Image
                src="/IMG_6238.JPG"
                alt="Rhys Underwood"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
