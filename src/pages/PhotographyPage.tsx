import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Camera,
  ImageIcon,
  Lightbulb,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import architectureImg from "@/assets/portfolio-architecture.jpg";
import fashionImg from "@/assets/portfolio-fashion.jpg";
import heroImg from "@/assets/hero-photo.jpg";

const galleryItems = [
  {
    title: "Architectural Story",
    description: "Structured lines, depth, and dramatic shadow studies for brands and editorial clients.",
    image: architectureImg,
  },
  {
    title: "Fashion Portrait",
    description: "Narrative portrait work with controlled studio light and natural movement.",
    image: fashionImg,
  },
  {
    title: "Signature Hero Shot",
    description: "High-impact visual centerpiece designed for campaign covers and website hero banners.",
    image: heroImg,
  },
];

const process = [
  {
    title: "Discovery Call",
    description: "We align on tone, audience, usage rights, and visual goals before the first shot.",
    icon: MessageSquare,
  },
  {
    title: "Creative Direction",
    description: "Moodboards, references, and location planning define the look and production flow.",
    icon: Lightbulb,
  },
  {
    title: "Shoot & Delivery",
    description: "Final edited image set optimized for web, print, and social content rollouts.",
    icon: Camera,
  },
];

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-padding pt-12 pb-16 md:pt-16 md:pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-label hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-label mb-4">Service Page</p>
            <h1 className="text-display-lg">Photography</h1>
          </div>
          <p className="text-body-lg text-muted-foreground md:col-span-5 md:pl-6">
            Cinematic photography crafted for brands, creators, and campaigns that want memorable visual storytelling.
          </p>
        </div>
      </section>

      <section className="section-padding pb-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-12">
          {galleryItems.map((item, index) => (
            <article
              key={item.title}
              className={`overflow-hidden border border-border bg-card ${index === 0 ? "md:col-span-8" : "md:col-span-4"}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover md:h-80"
                loading="lazy"
                width={1200}
                height={800}
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold uppercase tracking-[-0.02em]">{item.title}</h2>
                <p className="mt-3 text-muted-foreground">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding pb-24 md:pb-32">
        <div className="divider mb-10" />
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-label mb-3">Process</p>
            <h2 className="text-display-md">How We Build Each Shoot</h2>
          </div>
          <div className="space-y-5 md:col-span-8">
            {process.map((step) => (
              <div key={step.title} className="border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <step.icon size={18} className="text-muted-foreground" />
                  <h3 className="text-xl font-semibold uppercase tracking-[-0.01em]">{step.title}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pb-20 md:pb-28">
        <div className="border border-border bg-card p-8 md:p-10">
          <div className="mb-4 inline-flex items-center gap-2 text-label">
            <Sparkles size={14} />
            Availability
          </div>
          <h2 className="text-display-md mb-4">Booking For Summer Campaigns</h2>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-3xl">
            Ideal for brand launches, product storytelling, and editorial features. Sessions include creative direction, production guidance, and final retouched outputs.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 text-label hover:bg-foreground hover:text-background transition-colors"
          >
            <ImageIcon size={16} />
            Visit Contact Section on Home
          </Link>
        </div>
      </section>
    </main>
  );
}
