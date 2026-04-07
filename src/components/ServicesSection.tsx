import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import portfolioFashion from "@/assets/portfolio-fashion.jpg";
import portfolioArchitecture from "@/assets/portfolio-architecture.jpg";
import portfolioWebdesign from "@/assets/portfolio-webdesign.jpg";
import portfolioUxui from "@/assets/portfolio-uxui.jpg";
import portfolioPoster from "@/assets/portfolio-poster.jpg";
import heroPhoto from "@/assets/hero-photo.jpg";
import buildImage from "@/assets/headphones.png";

const services = [
  {
    number: "01",
    title: "Photography",
    description: "Fine art and editorial photography with a focus on dramatic lighting and composition.",
    href: "/photography",
    images: [portfolioFashion, portfolioArchitecture, heroPhoto, portfolioFashion, portfolioArchitecture, heroPhoto],
  },
  {
    number: "02",
    title: "Web Design",
    description: "High-performance websites with bold layouts, smooth animations, and pixel-perfect craft.",
    href: "/web-design",
    images: [portfolioWebdesign, portfolioUxui, portfolioWebdesign, portfolioUxui, portfolioWebdesign, portfolioUxui],
  },
  {
    number: "03",
    title: "Advertising visuals",
    description: "Eye-catching visual communication for print and digital advertising campaigns.",
    href: "/poster-ads",
    images: [portfolioPoster, heroPhoto, portfolioPoster, heroPhoto, portfolioPoster, heroPhoto],
  },
];

// Shiny text component
function ShinyText({ text }: { text: string }) {
  return (
    <span className="relative inline-block group">
      <style>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          50% { background-position: 1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .shiny-text {
          background: linear-gradient(
            90deg,
            #000,
            #000 20%,
            #555 50%,
            #000 80%,
            #000
          );
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s infinite;
        }
      `}</style>
      <span className="shiny-text">{text}</span>
    </span>
  );
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isTrailEnabled, setIsTrailEnabled] = useState(false);
  const [trail, setTrail] = useState<{
    visible: boolean;
    x: number;
    y: number;
    segment: number;
    images: string[];
  }>({
    visible: false,
    x: 0,
    y: 0,
    segment: 0,
    images: services[0].images,
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    const intro = sectionRef.current.querySelector<HTMLElement>("[data-services-intro]");
    if (!intro) return;

    let raf = 0;
    const syncTrailState = () => {
      raf = 0;
      const opacity = Number.parseFloat(window.getComputedStyle(intro).opacity || "1");
      const enabled = Number.isFinite(opacity) && opacity <= 0.03;

      setIsTrailEnabled((prev) => (prev === enabled ? prev : enabled));
      if (!enabled) {
        setTrail((prev) => (prev.visible ? { ...prev, visible: false } : prev));
      }
    };

    const queueSync = () => {
      if (!raf) raf = window.requestAnimationFrame(syncTrailState);
    };

    queueSync();
    window.addEventListener("scroll", queueSync, { passive: true });
    window.addEventListener("resize", queueSync);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", queueSync);
      window.removeEventListener("resize", queueSync);
    };
  }, []);

  const handleMove = (event: MouseEvent<HTMLElement>, images: string[]) => {
    if (!isTrailEnabled || window.innerWidth < 1024 || !(window.matchMedia("(hover: hover)").matches)) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 0.9999);
    const segment = Math.floor(ratio * 6);

    setTrail({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      segment,
      images,
    });
  };

  const hideTrail = () => {
    setTrail((prev) => ({ ...prev, visible: false }));
  };

  return (
    <section id="services" ref={sectionRef} className="relative min-h-[180vh] md:min-h-[240vh]">
      <div
        className={`fixed left-0 top-0 z-[70] pointer-events-none transition-opacity duration-300 hidden lg:block ${trail.visible ? "opacity-100" : "opacity-0"}`}
        style={{ transform: `translate(${trail.x - 330}px, ${trail.y - 70}px)` }}
      >
        <img
          src={trail.images[trail.segment]}
          alt="service preview"
          className="h-44 w-64 rounded-[28px] object-cover shadow-[0_18px_48px_rgba(0,0,0,0.42)] transition-all duration-300"
        />
      </div>

      {/* Sticky white panel that grows */}
      <div className="sticky top-0 h-[100svh] overflow-hidden z-[60]">
        <div
          data-services-reveal
          className="relative h-full w-full origin-center bg-white text-black overflow-hidden will-change-[transform] rounded-[18px] md:rounded-[32px]"
        >
          {/* Main intro text - Gets bigger and then disappears */}
          <div data-services-intro className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-12">
            <h2 className="text-display-lg max-w-6xl text-black leading-[0.9] text-center">
              <span className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                <ShinyText text="I BUILD" />
                <img
                  src={buildImage}
                  alt="Headphones"
                  data-build-image
                  className="inline-block object-contain align-middle"
                  style={{ height: "0.82em", width: "34px", transition: "width 0.1s ease-out" }}
                />
                <ShinyText text="BRANDING" />
              </span>
              <span className="block mt-2 md:mt-3">
                <ShinyText text="FOR YOUR MVP" />
              </span>
            </h2>
          </div>

          {/* Services content - appears after intro disappears */}
          <div data-services-content className="absolute inset-0 flex items-center opacity-0 translate-x-[-48px] px-4 sm:px-6 md:px-16 lg:px-24 section-padding py-10 md:py-16">
            <div className="w-full">
              <div className="mb-8 md:mb-12">
                <p className="text-[clamp(0.75rem,1vw,1rem)] uppercase tracking-[0.22em] text-black/60 mb-3 font-[var(--font-headline)]">What I Do</p>
                <h2 className="text-display-md text-black">
                  Services
                </h2>
              </div>

              <div>
                {services.map((service) => (
                  <div key={service.number}>
                    <div data-line className="w-full h-px bg-black/15" />
                    <Link
                      to={service.href}
                      className="py-7 md:py-9 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 group cursor-pointer"
                      onMouseMove={(event) => handleMove(event, service.images)}
                      onMouseEnter={(event) => handleMove(event, service.images)}
                      onMouseLeave={hideTrail}
                      data-reveal
                    >
                      <span className="text-label !text-black/55 md:col-span-1">{service.number}</span>
                      <h3 className="md:col-span-5 text-[clamp(1.35rem,3vw,2.5rem)] font-headline font-bold uppercase tracking-[-0.02em] leading-[0.95] text-black group-hover:text-black/65 transition-colors duration-300 flex items-center gap-3">
                        {service.title}
                        <ArrowUpRight className="w-5 h-5 text-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0" />
                      </h3>
                      <p className="text-[clamp(0.92rem,1.1vw,1.12rem)] leading-relaxed text-black/65 md:col-span-6">
                        {service.description}
                      </p>
                    </Link>
                  </div>
                ))}
                <div data-line className="w-full h-px bg-black/15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
