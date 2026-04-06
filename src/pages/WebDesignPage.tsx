import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Globe,
  Layers,
  MousePointerClick,
  Rocket,
  Sparkles,
} from "lucide-react";
import webDesignImg from "@/assets/portfolio-webdesign.jpg";
import uxUiImg from "@/assets/portfolio-uxui.jpg";
import heroImg from "@/assets/hero-photo.jpg";

const features = [
  {
    title: "Strategic UX Architecture",
    description: "Information structure and flows that prioritize clarity, conversion, and accessibility.",
    icon: Layers,
  },
  {
    title: "Interface & Motion Systems",
    description: "Visually sharp components and smooth interactions that strengthen brand perception.",
    icon: MousePointerClick,
  },
  {
    title: "Performance-Ready Build",
    description: "Fast-loading, responsive frontends optimized for desktop and mobile experiences.",
    icon: Rocket,
  },
];

export default function WebDesignPage() {
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
            <h1 className="text-display-lg">Web Design</h1>
          </div>
          <p className="text-body-lg text-muted-foreground md:col-span-5 md:pl-6">
            Conversion-focused websites blending bold visual identity, seamless UX, and modern front-end performance.
          </p>
        </div>
      </section>

      <section className="section-padding pb-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-12">
          <article className="overflow-hidden border border-border bg-card md:col-span-8">
            <img
              src={webDesignImg}
              alt="Web design project showcase"
              className="h-72 w-full object-cover md:h-96"
              loading="lazy"
              width={1400}
              height={900}
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold uppercase tracking-[-0.02em]">Landing Experiences</h2>
              <p className="mt-3 text-muted-foreground">
                Custom landing pages and portfolio websites designed for speed, storytelling, and measurable action.
              </p>
            </div>
          </article>

          <article className="overflow-hidden border border-border bg-card md:col-span-4">
            <img
              src={uxUiImg}
              alt="UX and UI layout showcase"
              className="h-72 w-full object-cover md:h-96"
              loading="lazy"
              width={1000}
              height={900}
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold uppercase tracking-[-0.02em]">UX/UI Systems</h2>
              <p className="mt-3 text-muted-foreground">
                Cohesive components, interactions, and visual rhythm that make products easier and faster to use.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding pb-24 md:pb-32">
        <div className="divider mb-10" />
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-label mb-3">What You Get</p>
            <h2 className="text-display-md">Design to Deployment Mindset</h2>
          </div>
          <div className="space-y-5 md:col-span-8">
            {features.map((feature) => (
              <div key={feature.title} className="border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <feature.icon size={18} className="text-muted-foreground" />
                  <h3 className="text-xl font-semibold uppercase tracking-[-0.01em]">{feature.title}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pb-20 md:pb-28">
        <div className="border border-border bg-card p-8 md:p-10">
          <div className="mb-4 inline-flex items-center gap-2 text-label">
            <Sparkles size={14} />
            Project Types
          </div>
          <h2 className="text-display-md mb-4">Personal Brands, Agencies, Product Landing Pages</h2>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-3xl">
            Ideal for creators and companies that need a high-impact website with clear message hierarchy and polished visual execution.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 text-label hover:bg-foreground hover:text-background transition-colors"
          >
            <Globe size={16} />
            Return to Landing Page
          </Link>
        </div>
      </section>

      <section className="section-padding pb-20">
        <img
          src={heroImg}
          alt="Creative direction mood image"
          className="h-64 w-full object-cover border border-border"
          loading="lazy"
          width={1600}
          height={700}
        />
      </section>
    </main>
  );
}
