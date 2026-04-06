import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import portfolioArchitecture from "@/assets/portfolio-architecture.jpg";
import portfolioFashion from "@/assets/portfolio-fashion.jpg";
import portfolioUxui from "@/assets/portfolio-uxui.jpg";
import portfolioPoster from "@/assets/portfolio-poster.jpg";
import portfolioWebdesign from "@/assets/portfolio-webdesign.jpg";

const styles = [
  {
    name: "Maximalism",
    description: "Bold and layered. Dense visual storytelling with purposeful hierarchy.",
  },
  {
    name: "Minimalism",
    description: "Clean and intentional. Every element has meaning, restraint creates impact.",
  },
  {
    name: "Modern",
    description: "Contemporary with smooth motion. Timeless design meets current trends.",
  },
  {
    name: "Futuristic",
    description: "Experimental and forward-focused. Innovation through design boundaries.",
  },
];

function StyleBubble({
  style,
  index,
  isDimmed,
  isActive,
  onHoverStart,
  onHoverEnd,
}: {
  style: typeof styles[0];
  index: number;
  isDimmed: boolean;
  isActive: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const duration = 4.2 + index * 0.9;
  const delay = -(index * 0.85);

  return (
    <div
      className={`relative transition-all duration-300 ${isDimmed ? "blur-[2px] opacity-45 scale-[0.98]" : "blur-0 opacity-100 scale-100"}`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <div
        className="genre-btn"
        style={{
          ["--genre-spin-duration" as string]: `${duration}s`,
          ["--genre-spin-delay" as string]: `${delay}s`,
        }}
      >
        <button
          type="button"
          className="relative z-[1] px-6 py-4 md:px-8 md:py-5 bg-white text-black rounded-[0.85rem] text-center transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]"
        >
          <p className="text-sm md:text-base font-medium tracking-tight">{style.name}</p>
        </button>
      </div>
      {isActive && (
        <div className="absolute bottom-full right-0 mb-3 w-48 bg-white text-black rounded-xl p-3 shadow-[0_12px_48px_rgba(0,0,0,0.2)] z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-200">
          <p className="text-xs leading-relaxed font-normal text-black/75">{style.description}</p>
        </div>
      )}
    </div>
  );
}

const projects = [
  {
    title: "Ethereal Frames",
    category: "Photography",
    image: portfolioFashion,
    year: "2024",
    aspect: "aspect-[3/4]",
    summary: "Portrait editorial direction and dramatic lighting treatment.",
    bullets: ["Camera: Sony A7 IV", "Lens: 85mm f/1.8", "Settings: ISO 200 | f/2.0 | 1/250", "Editing: Lightroom + Photoshop"],
  },
  {
    title: "Digital Canvas",
    category: "UX/UI Design",
    image: portfolioUxui,
    year: "2024",
    aspect: "aspect-[16/10]",
    summary: "Interface refresh focused on visual hierarchy and flow clarity.",
    bullets: ["Tools: Figma + FigJam", "Stack: React + TypeScript", "Motion: GSAP", "Focus: conversion-first layout"],
  },
  {
    title: "Monolith",
    category: "Web Design",
    image: portfolioWebdesign,
    year: "2023",
    aspect: "aspect-[16/10]",
    summary: "High-contrast website system with cinematic transitions.",
    bullets: ["Tools: Figma + VS Code", "Stack: Vite + React", "Styling: Tailwind CSS", "Perf: lazy media + optimized assets"],
  },
  {
    title: "Concrete Poetry",
    category: "Photography",
    image: portfolioArchitecture,
    year: "2023",
    aspect: "aspect-[3/4]",
    summary: "Architectural narrative series built on shape and scale.",
    bullets: ["Camera: Canon R6", "Lens: 24-70mm f/2.8", "Settings: ISO 320 | f/5.6 | 1/160", "Editing: contrast geometry workflow"],
  },
  {
    title: "Bold Voices",
    category: "Advertising visuals",
    image: portfolioPoster,
    year: "2024",
    aspect: "aspect-[3/4]",
    summary: "Poster-led advertising system for multi-channel launch.",
    bullets: ["Tools: Illustrator + Photoshop", "Formats: A1, A3, social variants", "Type: bold hierarchy system", "Output: print + digital packs"],
  },
];

export function WorkSection() {
  const [activeStyle, setActiveStyle] = useState<string | null>(null);

  return (
    <section
      id="work"
      data-overlap-layer
      className="section-padding relative z-30 -mt-10 md:-mt-16 pt-20 md:pt-28 pb-24 md:pb-40 bg-background rounded-t-[30px] md:rounded-t-[44px] shadow-[0_-26px_56px_rgba(0,0,0,0.3)]"
    >
      <style>{`
        @keyframes genre-border-spin {
          to { transform: rotate(360deg); }
        }
        .genre-btn {
          position: relative;
          border-radius: 1rem;
          padding: 3.5px;
          overflow: hidden;
          isolation: isolate;
        }
        .genre-btn::before {
          content: "";
          position: absolute;
          inset: -120%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 210deg,
            rgba(34, 211, 238, 0.95) 250deg,
            rgba(103, 232, 249, 0.95) 295deg,
            transparent 340deg,
            transparent 360deg
          );
          animation: genre-border-spin var(--genre-spin-duration, 4.8s) linear infinite;
          animation-delay: var(--genre-spin-delay, 0s);
        }
      `}</style>
      <div className="mb-16 md:mb-24">
        <p className="text-label mb-4" data-reveal>Selected Works</p>
        <h2 className="text-display-lg text-foreground" data-reveal>
          Featured<br />Projects
        </h2>
        <div className="mt-8 flex flex-wrap gap-3 md:gap-4 justify-center md:justify-end" data-reveal>
          {styles.map((style, index) => (
            <StyleBubble
              key={style.name}
              style={style}
              index={index}
              isDimmed={activeStyle !== null && activeStyle !== style.name}
              isActive={activeStyle === style.name}
              onHoverStart={() => setActiveStyle(style.name)}
              onHoverEnd={() => setActiveStyle(null)}
            />
          ))}
        </div>
      </div>

      <div data-line className="divider mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`group cursor-pointer ${i === 1 ? "md:mt-24" : ""} ${i === 3 ? "md:mt-[-4rem]" : ""}`}
            data-reveal-project
            data-project-side={i % 2 === 0 ? "left" : "right"}
          >
            <div className={`${project.aspect} overflow-hidden mb-6 relative`} data-reveal-image>
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover portfolio-image"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-500" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ul className="list-disc pl-5 space-y-1 text-sm text-white/90">
                  {project.bullets.map((bullet) => (
                    <li key={`${project.title}-${bullet}`}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex items-start justify-between" data-reveal>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-1 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                </h3>
                <p className="text-muted-foreground text-sm">{project.category}</p>
              </div>
              <span className="text-label">{project.year}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-3" data-reveal>
              {project.summary}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-end" data-reveal>
        <p className="max-w-4xl text-sm text-muted-foreground text-right">
          Fast turnarounds. Strong visual language. Production-ready assets across photo, web, and advertising outputs.
        </p>
      </div>

      <div className="flex justify-center mt-16" data-reveal>
        <button className="px-10 py-4 border border-border text-foreground text-label hover:bg-foreground hover:text-background transition-all duration-500">
          All Projects
        </button>
      </div>
    </section>
  );
}
