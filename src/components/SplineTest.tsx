import { useState, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const splineRef = useRef<any>(null);

  const handleSplineLoad = (splineApp: any) => {
    setIsLoading(false);
    splineRef.current = splineApp;
  };

  const handleButtonClick = () => {
    if (splineRef.current) {
      // Trigger a Spline event
      // Replace "eventName" with your actual event name from Spline
      splineRef.current.emitEvent("eventName");

      // Or navigate to a frame:
      // splineRef.current.goToFrameByName("FrameName");

      // Or trigger an animation:
      // splineRef.current.play();
    }
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
      {/* <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8">
        <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg">
          JellyPaws
        </h1>
        <h2 className="text-5xl font-bold text-white text-center drop-shadow-lg">
          Discover your true flavor!
        </h2>

        <div className="flex gap-4">
          <button
            onClick={handleButtonClick}
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors drop-shadow-lg"
          >
            Start Journey
          </button>
        </div>
      </div> */}
    </div>
  );
}
