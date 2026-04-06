export function AboutSection() {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "30+", label: "Projects Done" },
    { number: "3", label: "Ongoing Projects" },
    { number: "1000+", label: "Connections" },
  ];

  return (
    <section id="about" className="section-padding py-24 md:py-40">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-4">
          <p className="text-label mb-4" data-slide-left>About</p>
          <h2 className="text-display-md text-foreground" data-slide-left>
            The Vision
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-body-lg text-muted-foreground mb-8" data-slide-right>
            I'm a multidisciplinary designer and photographer with a passion for creating bold,
            immersive visual experiences. My work sits at the intersection of art and function —
            every project is an opportunity to push boundaries and tell a compelling story.
          </p>
          <p className="text-body-lg text-muted-foreground mb-12" data-slide-right>
            With expertise spanning photography, UX/UI design, web development, and print media,
            I bring a holistic approach to every creative challenge. I believe in the power of
            maximalism — big ideas, big visuals, big impact.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} data-reveal>
                <p
                  className="text-4xl md:text-5xl font-bold text-foreground mb-2"
                  data-counter={stat.number}
                >
                  {stat.number}
                </p>
                <p className="text-label">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12" data-reveal>
            <button className="px-10 py-4 bg-foreground text-background text-label hover:bg-muted-foreground transition-colors duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
