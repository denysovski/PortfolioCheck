import { Instagram, Dribbble, Linkedin } from "lucide-react";

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function SocialFloating() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className="w-12 h-12 rounded-full border border-border bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground hover:scale-110 transition-all duration-300"
        >
          <s.icon size={18} />
        </a>
      ))}
    </div>
  );
}
