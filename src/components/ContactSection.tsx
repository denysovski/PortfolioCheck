import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import flowerImg from "@/assets/flower.png";

export function ContactSection() {
  return (
    <section id="contact" data-contact-section className="section-padding py-20 md:py-40 overflow-hidden">
      <div data-line className="divider mb-16" />

      <div data-scale-up>
        <p className="text-label mb-8">Get In Touch</p>
        <div className="relative inline-block mb-10 md:mb-12 max-w-full">
          <h2 className="text-display-xl text-foreground">
            Let's<br />Create
          </h2>
          <img
            src={flowerImg}
            alt="Decorative flower"
            data-flower-grow
            className="flower-grow pointer-events-none absolute z-10 h-[220px] w-[220px] object-contain hidden md:block md:h-[360px] md:w-[360px]"
             style={{ right: "-240px", top: "200px" }}
          />
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10 md:mb-12">
          <a
            href="mailto:hello@studio.com"
            className="inline-flex justify-center items-center gap-4 px-6 md:px-8 py-4 bg-foreground text-background text-label hover:bg-muted-foreground transition-colors duration-300 group w-full sm:w-auto"
          >
            Send Email
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
          <button className="px-6 md:px-8 py-4 border border-border text-foreground text-label hover:bg-foreground hover:text-background transition-all duration-300 w-full sm:w-auto">
            Book a Call
          </button>
        </div>

        <p className="text-body-lg text-muted-foreground" data-reveal>
          hello@studio.com
        </p>
      </div>

      <div className="mt-10 md:mt-16" data-reveal>
        <div className="inline-flex items-center gap-3 md:gap-4 text-muted-foreground">
          <ArrowDownRight size={44} className="text-foreground md:w-14 md:h-14" />
          <p className="text-sm uppercase tracking-[0.2em]">Or use the contact form below</p>
        </div>
      </div>

      <div className="mt-10 flex justify-center" data-reveal>
        <div className="w-full max-w-3xl">
          <h3 className="text-display-md text-foreground mb-6 text-center md:text-left">Contact Form</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col gap-2">
            <span className="font-headline font-black uppercase tracking-[-0.01em] text-[clamp(1rem,1.8vw,1.4rem)] text-foreground">
            Full Name
            </span>
            <input
              type="text"
              placeholder="Daniel Svoboda"
              className="h-12 rounded-full bg-transparent border border-border px-5 text-foreground outline-none focus:border-white transition-colors w-full"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-headline font-black uppercase tracking-[-0.01em] text-[clamp(1rem,1.8vw,1.4rem)] text-foreground">
            Email
            </span>
            <input
              type="email"
              placeholder="you@example.com"
              className="h-12 rounded-full bg-transparent border border-border px-5 text-foreground outline-none focus:border-white transition-colors w-full"
            />
          </label>
          <label className="flex flex-col gap-2 md:col-span-2">
            <span className="font-headline font-black uppercase tracking-[-0.01em] text-[clamp(1rem,1.8vw,1.4rem)] text-foreground">
            Project Type
            </span>
            <input
              type="text"
              placeholder="Photography / Web Design / Advertising visuals"
              className="h-12 rounded-full bg-transparent border border-border px-5 text-foreground outline-none focus:border-white transition-colors w-full"
            />
          </label>
          <label className="flex flex-col gap-2 md:col-span-2">
            <span className="font-headline font-black uppercase tracking-[-0.01em] text-[clamp(1rem,1.8vw,1.4rem)] text-foreground">
            Message
            </span>
            <textarea
              placeholder="Tell me about your idea, timeline, and goals..."
              rows={6}
              className="rounded-[28px] bg-transparent border border-border px-5 py-4 text-foreground outline-none focus:border-white transition-colors resize-none w-full"
            />
          </label>
          <div className="md:col-span-2 flex justify-stretch md:justify-end pt-1">
            <button
              type="submit"
              className="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background text-label hover:bg-muted-foreground transition-colors duration-300 w-full md:w-auto"
            >
              Submit Inquiry
              <ArrowUpRight size={16} />
            </button>
          </div>
          </form>
        </div>
      </div>

      <footer className="mt-24 md:mt-40 border-t border-border pt-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="text-label mb-4">Studio</p>
          <p className="text-sm text-muted-foreground">© 2026 DS Studio. Built for photography, web design, and advertising visuals.</p>
        </div>

        <div>
          <p className="text-label mb-4">Quick Links</p>
          <div className="flex flex-col gap-2">
            {["Home", "Featured Projects", "Services", "Contact"].map((item) => (
              <a key={item} href="#" className="nav-link-luxury">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-label mb-4">Policies</p>
          <div className="flex flex-col gap-2">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Licensing"].map((item) => (
              <a key={item} href="#" className="nav-link-luxury">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-label mb-4">Newsletter</p>
          <p className="text-sm text-muted-foreground mb-4">Monthly creative notes, selected projects, and availability updates.</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="h-11 flex-1 bg-background border border-border px-3 text-sm text-foreground outline-none focus:border-white transition-colors"
            />
            <button className="h-11 px-4 border border-white text-white text-xs uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-colors w-full sm:w-auto">
              Join
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
}
