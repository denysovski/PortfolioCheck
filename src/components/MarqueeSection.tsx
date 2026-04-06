import { useEffect, useRef } from "react";

const labels = ["PHOTOGRAPHY", "WEB DESIGN", "ADVERTISING VISUALS"];

function VelocitySegment({ rowKey }: { rowKey: string }) {
  return (
    <div className="velocity-segment" aria-hidden="true">
      {Array.from({ length: 4 }).map((_, i) => (
        <span
          key={`${rowKey}-${i}`}
          className="velocity-item text-display-md text-black"
          style={{ animationDelay: `${(i % 4) * 0.2}s` }}
        >
          <span>{labels[0]}</span>
          <span className="velocity-star" aria-hidden="true">★</span>
          <span>{labels[1]}</span>
          <span className="velocity-star" aria-hidden="true">★</span>
          <span>{labels[2]}</span>
          <span className="velocity-star" aria-hidden="true">★</span>
        </span>
      ))}
    </div>
  );
}

export function MarqueeSection() {
  const trackARef = useRef<HTMLDivElement>(null);
  const trackBRef = useRef<HTMLDivElement>(null);
  const segmentARef = useRef<HTMLDivElement>(null);
  const segmentBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let xA = 0;
    let xB = 0;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let targetVelocity = 0;
    let smoothedVelocity = 0;

    const onScroll = () => {
      const now = performance.now();
      const y = window.scrollY;
      const dt = Math.max(now - lastT, 16);
      const dy = y - lastY;
      const velocity = dy / dt;

      targetVelocity = Math.max(-24, Math.min(24, velocity * 14));
      lastY = y;
      lastT = now;
    };

    const render = () => {
      const widthA = segmentARef.current?.offsetWidth ?? 0;
      const widthB = segmentBRef.current?.offsetWidth ?? 0;

      smoothedVelocity += (targetVelocity - smoothedVelocity) * 0.12;
      targetVelocity *= 0.92;

      const baseSpeedA = 1.1;
      const baseSpeedB = 0.95;

      xA -= baseSpeedA + smoothedVelocity * 0.035;
      xB += baseSpeedB + smoothedVelocity * 0.03;

      if (widthA > 0 && xA <= -widthA) xA += widthA;
      if (widthB > 0 && xB >= 0) xB -= widthB;

      if (trackARef.current) {
        trackARef.current.style.transform = `translate3d(${xA}px, 0, 0)`;
      }

      if (trackBRef.current) {
        trackBRef.current.style.transform = `translate3d(${xB}px, 0, 0)`;
      }

      raf = window.requestAnimationFrame(render);
    };

    onScroll();
    raf = window.requestAnimationFrame(render);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section data-marquee-focus className="py-20 md:py-28 overflow-hidden border-y border-black/10 bg-white">
      <style>{`
        @keyframes velocity-wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .velocity-row {
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }

        .velocity-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        .velocity-segment {
          display: flex;
          align-items: center;
          gap: 2.25rem;
          white-space: nowrap;
          padding-right: 2.25rem;
        }

        .velocity-item {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          animation: velocity-wave 2.8s ease-in-out infinite;
          will-change: transform;
        }

        .velocity-star {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(1rem, 2vw, 1.4rem);
          line-height: 1;
          margin-inline: 0.1rem;
        }
      `}</style>

      <div className="space-y-3 md:space-y-5">
        <div className="velocity-row" aria-hidden="true">
          <div ref={trackARef} className="velocity-track">
            <div ref={segmentARef}>
              <VelocitySegment rowKey="row-a-1" />
            </div>
            <VelocitySegment rowKey="row-a-2" />
          </div>
        </div>

        <div className="velocity-row" aria-hidden="true">
          <div ref={trackBRef} className="velocity-track">
            <div ref={segmentBRef}>
              <VelocitySegment rowKey="row-b-1" />
            </div>
            <VelocitySegment rowKey="row-b-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
