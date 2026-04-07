export function AboutSection() {
  const visionTexture = "https://images.unsplash.com/photo-1772214832215-5597cc76876e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "30+", label: "Projects Done" },
    { number: "3", label: "Ongoing Projects" },
    { number: "1000+", label: "Connections" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden py-20 md:py-40">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 grayscale"
        style={{ backgroundImage: `url(${visionTexture})` }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/70" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/60 to-black/80" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        <div className="md:col-span-4">
          <p className="text-label mb-4" data-slide-left>About</p>
          <h2 className="text-display-md text-foreground" data-slide-left>
            The Vision
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-body-lg text-foreground/90 mb-8" data-slide-right>
            I'm a multidisciplinary designer and photographer with a passion for creating bold,
            immersive visual experiences. My work sits at the intersection of art and function —
            every project is an opportunity to push boundaries and tell a compelling story.
          </p>
          <p className="text-body-lg text-foreground/85 mb-12" data-slide-right>
            With expertise spanning photography, UX/UI design, web development, and print media,
            I bring a holistic approach to every creative challenge. I believe in the power of
            maximalism — big ideas, big visuals, big impact.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} data-reveal>
                <p
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2"
                  data-counter={stat.number}
                >
                  {stat.number}
                </p>
                <p className="text-label">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-12" data-reveal>
            <button className="w-full sm:w-auto px-8 md:px-10 py-4 bg-foreground text-background text-label hover:bg-muted-foreground transition-colors duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
