import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Megaphone,
  Monitor,
  PenSquare,
  Printer,
  Sparkles,
} from "lucide-react";
import posterImg from "@/assets/portfolio-poster.jpg";
import fashionImg from "@/assets/portfolio-fashion.jpg";
import architectureImg from "@/assets/portfolio-architecture.jpg";

const channels = [
  {
    title: "Print Posters",
    description: "Large-format layouts with strong hierarchy for event promotion, retail, and campaigns.",
    icon: Printer,
  },
  {
    title: "Digital Ads",
    description: "Social and display ad variants built for clarity and fast visual impact.",
    icon: Monitor,
  },
  {
    title: "Campaign Concepts",
    description: "Messaging, visual hooks, and scalable art direction for multi-channel launches.",
    icon: PenSquare,
  },
];

export default function PosterAdsPage() {
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
            <h1 className="text-display-lg">Advertising visuals</h1>
          </div>
          <p className="text-body-lg text-muted-foreground md:col-span-5 md:pl-6">
            Bold visual campaigns for print and digital channels with message-first compositions and memorable art direction.
          </p>
        </div>
      </section>

      <section className="section-padding pb-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-12">
          <article className="overflow-hidden border border-border bg-card md:col-span-5">
            <img
              src={posterImg}
              alt="Poster advertising campaign"
              className="h-80 w-full object-cover"
              loading="lazy"
              width={1000}
              height={1200}
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold uppercase tracking-[-0.02em]">Hero Poster Concepts</h2>
              <p className="mt-3 text-muted-foreground">
                Attention-grabbing concepts with strong typography and visual tension for immediate recognition.
              </p>
            </div>
          </article>

          <article className="overflow-hidden border border-border bg-card md:col-span-7">
            <div className="grid h-full gap-4 p-4 md:grid-cols-2 md:p-6">
              <img
                src={fashionImg}
                alt="Fashion ad visual"
                className="h-52 w-full object-cover md:h-full"
                loading="lazy"
                width={800}
                height={900}
              />
              <img
                src={architectureImg}
                alt="Architecture ad visual"
                className="h-52 w-full object-cover md:h-full"
                loading="lazy"
                width={800}
                height={900}
              />
            </div>
            <div className="px-6 pb-6">
              <h2 className="text-2xl font-semibold uppercase tracking-[-0.02em]">Ad Variation Sets</h2>
              <p className="mt-3 text-muted-foreground">
                Multi-size ad systems designed to keep campaign identity consistent across every placement.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding pb-24 md:pb-32">
        <div className="divider mb-10" />
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-label mb-3">Offer</p>
            <h2 className="text-display-md">Campaign Assets Delivered</h2>
          </div>
          <div className="space-y-5 md:col-span-8">
            {channels.map((channel) => (
              <div key={channel.title} className="border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <channel.icon size={18} className="text-muted-foreground" />
                  <h3 className="text-xl font-semibold uppercase tracking-[-0.01em]">{channel.title}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pb-20 md:pb-28">
        <div className="border border-border bg-card p-8 md:p-10">
          <div className="mb-4 inline-flex items-center gap-2 text-label">
            <Sparkles size={14} />
            Best For
          </div>
          <h2 className="text-display-md mb-4">Events, Product Launches, and Brand Awareness Drives</h2>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-3xl">
            Every campaign includes poster concepting, copy direction, ad variant resizing, and production-ready exports.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 text-label hover:bg-foreground hover:text-background transition-colors"
          >
            <Megaphone size={16} />
            Explore More Services on Home
          </Link>
        </div>
      </section>
    </main>
  );
}
