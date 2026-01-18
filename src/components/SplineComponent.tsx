import { useState, useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import LoadingV2 from "./LoadingV2";
import gsap from "gsap";

export default function SplineComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const splineRef = useRef(null);
  const loadTimeRef = useRef(Date.now());
  const loadingRef = useRef<HTMLDivElement>(null);

  const handleSplineLoad = (splineApp: any) => {
    splineRef.current = splineApp;

    const elapsed = Date.now() - loadTimeRef.current;
    const MIN_LOADING_TIME = 10000;

    const remainingTime = Math.max(MIN_LOADING_TIME - elapsed, 0);

    setTimeout(() => {
      setIsLoading(false);
    }, remainingTime);
  };

  useEffect(() => {
    if (!isLoading && loadingRef.current) {
      gsap.to(loadingRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        onComplete: () => {
          if (loadingRef.current) {
            loadingRef.current.style.display = "none"; // ✅ now TypeScript knows `style` exists
          }
        },
      });
    }
  }, [isLoading]);

  return (
    <div className="relative w-screen h-screen">
      {/* Spline ALWAYS mounted */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/TmSrwU5hIY1xCCQ8/scene.splinecode"
          onLoad={handleSplineLoad}
        />
      </div>

      {/* Loading overlay */}
      <div
        ref={loadingRef}
        className="absolute inset-0 z-20"
        style={{ opacity: 1 }}
      >
        <LoadingV2 />
      </div>
    </div>
  );
}
