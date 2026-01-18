import { useState, useRef } from "react";
import Spline from "@splinetool/react-spline";
import LoadingV2 from "./LoadingV2";

export default function SplineComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const splineRef = useRef(null);
  const loadTimeRef = useRef(Date.now());

  const handleSplineLoad = (splineApp: any) => {
    splineRef.current = splineApp;

    const elapsed = Date.now() - loadTimeRef.current;
    const MIN_LOADING_TIME = 10000;

    const remainingTime = Math.max(MIN_LOADING_TIME - elapsed, 0);

    setTimeout(() => {
      setIsLoading(false);
    }, remainingTime);
  };

  return (
    <div className="relative w-screen h-screen">
      {/* Spline ALWAYS mounts */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/TmSrwU5hIY1xCCQ8/scene.splinecode"
          onLoad={handleSplineLoad}
        />
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-20">
          <LoadingV2 />
        </div>
      )}
    </div>
  );
}
