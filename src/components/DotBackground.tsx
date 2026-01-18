import { useMemo } from "react";

export default function DotBackground() {
  const isPortrait =
    typeof window !== "undefined" &&
    window.matchMedia("(orientation: portrait)").matches;

  const dots = useMemo(() => {
    const dots: any = [];
    const DOT_COUNT = 1000;
    const MIN_DIST = 6;

    let tries = 0;
    while (dots.length < DOT_COUNT && tries < 8000) {
      tries++;

      const dot = {
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: Math.random() * 0.1 + 0.3,
      };

      const tooClose = dots.some(
        (d: any) => Math.hypot(d.x - dot.x, d.y - dot.y) < MIN_DIST
      );

      if (!tooClose) dots.push(dot);
    }

    return dots;
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute pointer-events-none"
      style={{
        inset: 0,
        width: isPortrait ? "100vh" : "100vw",
      }}
    >
      {dots.map((d: any, i: any) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="white" opacity="0.9" />
      ))}
    </svg>
  );
}
