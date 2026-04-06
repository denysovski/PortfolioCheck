import portfolioArchitecture from "@/assets/portfolio-architecture.jpg";
import portfolioFashion from "@/assets/portfolio-fashion.jpg";
import portfolioUxui from "@/assets/portfolio-uxui.jpg";
import portfolioPoster from "@/assets/portfolio-poster.jpg";
import portfolioWebdesign from "@/assets/portfolio-webdesign.jpg";
import heroImg from "@/assets/hero-photo.jpg";

const images = [
  { src: portfolioFashion, alt: "Fashion editorial" },
  { src: portfolioArchitecture, alt: "Architecture" },
  { src: heroImg, alt: "Hero portrait" },
  { src: portfolioUxui, alt: "UX/UI project" },
  { src: portfolioPoster, alt: "Poster design" },
  { src: portfolioWebdesign, alt: "Web design" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="section-padding py-24 md:py-40">
      <div className="mb-16 md:mb-24">
        <p className="text-label mb-4" data-reveal>Visual Exploration</p>
        <h2 className="text-display-lg text-foreground" data-reveal>
          Gallery
        </h2>
      </div>

      <div data-line className="divider mb-16" />

      {/* Masonry-style grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="break-inside-avoid group cursor-pointer overflow-hidden"
            data-reveal-image
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full object-cover portfolio-image group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16" data-reveal>
        <button className="px-10 py-4 border border-border text-foreground text-label hover:bg-foreground hover:text-background transition-all duration-500">
          View All Works
        </button>
      </div>
    </section>
  );
}
