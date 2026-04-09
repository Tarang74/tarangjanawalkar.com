import { useEffect, useRef } from "react";
import "./GradientBackground.css";

const BLOBS = [
  // [baseX%, baseY%, rangeX%, rangeY%, fx1, fy1, fx2, fy2, phase]
  [16, 22, 14, 11, 0.91, 0.65, 0.37, 0.29, 0.0],
  [83, 76, 11, 10, 0.72, 1.03, 0.41, 0.58, 1.3],
  [50, 44, 17, 13, 0.48, 0.55, 0.23, 0.34, 2.6],
  [78, 28, 10, 12, 0.38, 0.42, 0.61, 0.27, 0.7],
  [22, 72, 13, 11, 0.6, 0.5, 0.29, 0.43, 3.9],
  [62, 18, 12, 9, 0.28, 0.32, 0.53, 0.19, 1.8],
] as const;

export function GradientBackground() {
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let t = 0;
    let frame: number;

    function animate() {
      t += 0.004;

      BLOBS.forEach(([bx, by, rx, ry, fx1, fy1, fx2, fy2, ph], i) => {
        // Sum of two waves per axis → Lissajous-like path, never loops
        const x =
          bx +
          rx * Math.sin(t * fx1 + ph) +
          rx * 0.4 * Math.cos(t * fx2 + ph + 1.1);
        const y =
          by +
          ry * Math.cos(t * fy1 + ph) +
          ry * 0.4 * Math.sin(t * fy2 + ph + 2.3);
        el.style.setProperty(`--b${i + 1}x`, `${x.toFixed(2)}%`);
        el.style.setProperty(`--b${i + 1}y`, `${y.toFixed(2)}%`);
      });

      frame = requestAnimationFrame(animate);
    }

    animate();
    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className="gradient-bg" />;
}
