import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplineComponent from "@/components/SplineComponent";

const Home = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        delay: 11, // ⏱️ 10 seconds delay
        ease: "elastic.out(1, 0.6)", // jelly feel
      }
    );
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background */}
      <SplineComponent />

      {/* Center text overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -translate-y-64">
        <h1
          ref={titleRef}
          className="text-center text-white text-4xl sm:text-5xl md:text-6xl font-bold"
          style={{
            fontFamily: "'Cherry Bomb One'",
            transformOrigin: "center",
          }}
        >
          Welcome to JellyPaws!
        </h1>
      </div>
    </div>
  );
};

export default Home;
