import DotBackground from "./DotBackground";
import loadingJelly from "../assets/loadingjelly.png";

const LoadingV2 = () => {
  //   const loadingTexts = [
  //     "mixing jelly...",
  //     "adding flavor...",
  //     "blending smoothly...",
  //     "preparing pawsomeness...",
  //   ];
  const loadingBarAnimation = `
    @keyframes loadingBar {
      0% { width: 0%; }
      6.25% { width: 10%; }
      12.5% { width: 40%; }
      37.5% { width: 40%; }
      50% { width: 90%; }
      62.5% { width: 90%; }
      68.75% { width: 100%; }
      93.75% { width: 100%; }
      100% { width: 100%; }
    }
    @keyframes loadingJellyWithBounce {
      0% { left: 0%; transform: translateY(-50%) translateX(-50%) scale(1); }
      5% { left: 10%; transform: translateY(-50%) translateX(-50%) scale(1); }
      6% { left: 10%; transform: translateY(-50%) translateX(-50%) scaleX(0.95) scaleY(1.15); }
      6.5% { left: 10%; transform: translateY(-50%) translateX(-50%) scaleX(1.15) scaleY(0.95); }
      7.5% { left: 10%; transform: translateY(-50%) translateX(-50%) scale(1); }
      12% { left: 40%; transform: translateY(-50%) translateX(-50%) scale(1); }
      13% { left: 40%; transform: translateY(-50%) translateX(-50%) scaleX(0.95) scaleY(1.15); }
      13.75% { left: 40%; transform: translateY(-50%) translateX(-50%) scaleX(1.15) scaleY(0.95); }
      14.75% { left: 40%; transform: translateY(-50%) translateX(-50%) scale(1); }
      37.5% { left: 40%; transform: translateY(-50%) translateX(-50%) scale(1); }
      49% { left: 90%; transform: translateY(-50%) translateX(-50%) scale(1); }
      49.75% { left: 90%; transform: translateY(-50%) translateX(-50%) scaleX(0.95) scaleY(1.15); }
      50.25% { left: 90%; transform: translateY(-50%) translateX(-50%) scaleX(1.15) scaleY(0.95); }
      51.25% { left: 90%; transform: translateY(-50%) translateX(-50%) scale(1); }
      62.5% { left: 90%; transform: translateY(-50%) translateX(-50%) scale(1); }
      68% { left: 100%; transform: translateY(-50%) translateX(-50%) scale(1); }
      68.75% { left: 100%; transform: translateY(-50%) translateX(-50%) scaleX(0.95) scaleY(1.15); }
      69.5% { left: 100%; transform: translateY(-50%) translateX(-50%) scaleX(1.15) scaleY(0.95); }
      70.5% { left: 100%; transform: translateY(-50%) translateX(-50%) scale(1); }
      93.75% { left: 100%; transform: translateY(-50%) translateX(-50%) scale(1); }
      100% { left: 100%; transform: translateY(-50%) translateX(-50%) scale(1); }
    }
  `;

  return (
    <div className="absolute inset-0 bg-[rgb(179,241,241)] flex items-center justify-center overflow-hidden">
      <style>{loadingBarAnimation}</style>
      <div className="absolute inset-0 flex items-center justify-center z-10 flex-col gap-8">
        <div className="text-4xl" style={{ fontFamily: "'Cherry Bomb One'" }}>
          Loading jellies...
        </div>

        {/* Loading Bar */}
        <div className="relative w-64 h-5 rounded-full border-2 border-white">
          {/* Inner solid bar with animation */}
          <div
            className="absolute rounded-full bg-white z-10"
            style={{
              inset: "2px",
              height: "12px",
              animation: "loadingBar 10s ease-in-out",
            }}
          ></div>
          {/* Image at the end of the bar */}
          <img
            src={loadingJelly}
            alt="loading"
            className="absolute w-15 h-15 z-20"
            style={{
              top: "50%",
              animation: "loadingJellyWithBounce 10s ease-in-out",
            }}
          />
        </div>
      </div>
      <DotBackground />
    </div>
  );
};

export default LoadingV2;
