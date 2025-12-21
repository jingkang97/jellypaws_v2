import { useState, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const splineRef = useRef<any>(null);

  const handleSplineLoad = (splineApp: any) => {
    setIsLoading(false);
    splineRef.current = splineApp;
  };

  return (
    <div className="relative w-screen h-screen">
      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black z-20">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-white rounded-full animate-spin"></div>
            <p className="text-white text-lg">Loading scene...</p>
          </div>
        </div>
      )}

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
