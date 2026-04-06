import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImg from "../../PortfolioImage.jpg";

export function HeroSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      imageRef.current,
      { scale: 1.4, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2 }
    )
      .fromTo(
        titleRef.current?.querySelectorAll(".hero-word") || [],
        { y: 200, opacity: 0, rotateX: 40 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.4, stagger: 0.15 },
        "-=1.5"
      )
      .fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      );
  }, []);

  const scrollToWork = () => {
    const el = document.querySelector("#work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div ref={imageRef} className="absolute inset-0 opacity-0">
        <img
          src={heroImg}
          alt="Creative portfolio hero"
          className="w-full h-full object-cover grayscale brightness-[0.55] contrast-[1.35]"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding pb-16 md:pb-24 w-full">
        <div ref={titleRef} className="overflow-hidden mb-6">
          <span className="hero-word inline-block text-display-xl text-foreground">Daniel</span>
          <br />
          <span className="hero-word inline-block text-display-xl text-foreground">Svoboda</span>
        </div>
        <div ref={subtitleRef} className="max-w-lg opacity-0 mb-10">
          <p className="text-body-lg text-muted-foreground">
            Photography · Web Design · Advertising visuals
          </p>
        </div>
        <div ref={ctaRef} className="flex gap-4 opacity-0">
          <button
            onClick={scrollToWork}
            className="px-8 py-4 bg-foreground text-background text-label hover:bg-muted-foreground transition-colors duration-300"
          >
            View Projects
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border border-white text-foreground text-label hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>


    </section>
  );
}
