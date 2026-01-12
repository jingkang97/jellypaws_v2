import { useState, useRef } from "react";
import Spline from "@splinetool/react-spline";
import Loading from "./Loading";

export default function SplineComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const splineRef = useRef<any>(null);

  const handleSplineLoad = (splineApp: any) => {
    setIsLoading(false);
    splineRef.current = splineApp;
  };

  return (
    <div className="relative w-screen h-screen">
      {/* Loading spinner */}
      {isLoading && <Loading />}

      {/* Spline scene as background */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/8oHlWu7JWnaNyDhj/scene.splinecode"
          onLoad={handleSplineLoad}
        />
      </div>
    </div>
  );
}
