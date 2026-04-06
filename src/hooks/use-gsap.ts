import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal text elements with staggered progressive animation
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0, rotateX: 8 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Reveal images with clip-path wipe
      gsap.utils.toArray<HTMLElement>("[data-reveal-image]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(100% 0 0 0)", scale: 1.15 },
          {
            clipPath: "inset(0% 0 0 0)",
            scale: 1,
            duration: 1.4,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Parallax images
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.to(el, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      // Horizontal line reveals
      gsap.utils.toArray<HTMLElement>("[data-line]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0, transformOrigin: "left" },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Progressive scale-up sections
      gsap.utils.toArray<HTMLElement>("[data-scale-up]").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.85, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
      });

      // Horizontal slide-in from left
      gsap.utils.toArray<HTMLElement>("[data-slide-left]").forEach((el) => {
        gsap.fromTo(
          el,
          { x: -120, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Horizontal slide-in from right
      gsap.utils.toArray<HTMLElement>("[data-slide-right]").forEach((el) => {
        gsap.fromTo(
          el,
          { x: 120, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Featured project cards entrance from left/right
      gsap.utils.toArray<HTMLElement>("[data-reveal-project]").forEach((el) => {
        const side = el.getAttribute("data-project-side");
        const xOffset = side === "left" ? -80 : 80;

        gsap.fromTo(
          el,
          { x: xOffset, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Layer overlap lift for Featured Projects over the marquee section
      gsap.utils.toArray<HTMLElement>("[data-overlap-layer]").forEach((el) => {
        const marqueeFocus = document.querySelector<HTMLElement>("[data-marquee-focus]");

        gsap.fromTo(
          el,
          {
            y: 160,
            scale: 0.965,
            boxShadow: "0 -8px 20px rgba(0,0,0,0.14)",
          },
          {
            y: -168,
            scale: 1,
            boxShadow: "0 -48px 118px rgba(0,0,0,0.48)",
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 105%",
              end: "top 14%",
              scrub: 2.6,
            },
          }
        );

        if (marqueeFocus) {
          gsap.fromTo(
            marqueeFocus,
            {
              filter: "blur(0px)",
              opacity: 1,
              scale: 1,
            },
            {
              filter: "blur(20px)",
              opacity: 0.05,
              scale: 0.93,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 105%",
                end: "top 18%",
                scrub: 2.6,
              },
            }
          );
        }
      });

      // Services section expansion: smooth unified animation
      gsap.utils.toArray<HTMLElement>("[data-services-reveal]").forEach((el) => {
        const intro = el.querySelector<HTMLElement>("[data-services-intro]");
        const content = el.querySelector<HTMLElement>("[data-services-content]");
        const buildImage = el.querySelector<HTMLElement>("[data-build-image]");

        // Unified panel growth: center -> full screen
        gsap.fromTo(
          el,
          { scale: 0.72, transformOrigin: "center center" },
          {
            scale: 1,
            transformOrigin: "center center",
            ease: "linear",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top -50%",
              scrub: 1.5,
              markers: false,
            },
          }
        );

        // Intro text fades and shifts out
        if (intro) {
          gsap.fromTo(
            intro,
            { opacity: 1, x: 0 },
            {
              opacity: 0,
              x: 150,
              ease: "linear",
              scrollTrigger: {
                trigger: el,
                start: "top 40%",
                end: "top -20%",
                scrub: 1.5,
              },
            }
          );
        }

        // Growing image between BUILD and BRANDING
        if (buildImage) {
          gsap.fromTo(
            buildImage,
            { width: 40 },
            {
              width: 200,
              ease: "linear",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                end: "top -20%",
                scrub: 1.5,
              },
            }
          );
        }

        // Content appears
        if (content) {
          gsap.fromTo(
            content,
            { opacity: 0 },
            {
              opacity: 1,
              ease: "linear",
              scrollTrigger: {
                trigger: el,
                start: "top 0%",
                end: "top -50%",
                scrub: 1.5,
              },
            }
          );
        }
      });

      // Counter animation for stats
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const target = el.getAttribute("data-counter") || "0";
        const num = parseInt(target.replace(/\D/g, ""));
        const suffix = target.replace(/\d/g, "");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: num,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix;
          },
        });
      });

      const contactSection = containerRef.current?.querySelector<HTMLElement>("[data-contact-section]");
      const flower = contactSection?.querySelector<HTMLElement>("[data-flower-grow]");

      if (contactSection && flower) {
        gsap.fromTo(
          flower,
          { scale: 0.2, opacity: 0, transformOrigin: "center center" },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: contactSection,
              start: "top 88%",
              end: "top 40%",
              scrub: 1.6,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
