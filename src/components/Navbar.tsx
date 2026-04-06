import { useState, useEffect } from "react";
import { Menu, X, Instagram, Dribbble, Linkedin } from "lucide-react";
import dsLogo from "@/assets/DSLogo.png";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoCenter, setLogoCenter] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setLogoCenter(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-5 left-0 right-0 z-50 section-padding pointer-events-none">
        <div className="relative flex items-center justify-end">
          <a
            href="#"
            className={`pointer-events-auto absolute top-0 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] hover:opacity-80 ${
              logoCenter || isOpen ? "left-1/2 -translate-x-1/2" : "left-0 translate-x-0"
            }`}
          >
            <img
              src={dsLogo}
              alt="DS logo"
              className="h-12 w-auto brightness-0 invert transition-all duration-500"
            />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="pointer-events-auto z-[60] relative inline-flex items-center gap-3 text-white transition-all duration-500"
            aria-label="Toggle menu"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-medium">
              {isOpen ? "Close" : "Menu"}
            </span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-background/60 backdrop-blur-sm z-[55] transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[92vw] sm:w-[64vw] lg:w-[38vw] xl:w-[30vw] bg-card z-[56] flex flex-col justify-between overflow-y-auto overscroll-contain px-6 sm:px-10 lg:px-12 py-28 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        data-lenis-prevent
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:bg-white hover:text-black"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col gap-6">
          <div className="mb-4">
            <p className="text-[10px] uppercase tracking-[0.45em] mb-4 text-white/55 transition-colors duration-500">
              MENU
            </p>
            <div className="h-px w-full bg-white/15 transition-colors duration-500" />
          </div>

          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.href)}
              className={`sidebar-menu-link text-[clamp(1.75rem,9vw,3.5rem)] leading-[0.95] font-semibold uppercase tracking-[-0.02em] text-left text-white transition-all duration-300 ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? `${i * 80 + 200}ms` : "0ms" }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-12 mb-6 h-px w-full bg-white/15 transition-colors duration-500" />

        <div className="flex flex-col gap-4">
          <p className="text-label text-white/55 transition-colors duration-500">
            hello@studio.com
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 text-white/75 flex items-center justify-center transition-colors duration-300 hover:text-white hover:border-white"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 text-white/75 flex items-center justify-center transition-colors duration-300 hover:text-white hover:border-white"
            >
              <Dribbble size={16} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 text-white/75 flex items-center justify-center transition-colors duration-300 hover:text-white hover:border-white"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
