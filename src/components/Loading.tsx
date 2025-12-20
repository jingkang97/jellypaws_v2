import MetaBalls from "./MetaBalls";
import SplitText from "./SplitText";
export default function Loading() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="relative flex items-center justify-center h-screen w-screen bg-[#B3F1F1]">
      <MetaBalls
        color="#000000"
        cursorBallColor="#000000"
        cursorBallSize={10}
        ballCount={200}
        animationSize={50}
        enableMouseInteraction={false}
        enableTransparency={true}
        hoverSmoothness={0.05}
        clumpFactor={2}
        speed={0.3}
      />
      <SplitText
        text="mixing jellies... :3"
        className="absolute text-4xl font-semibold text-center text-white"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}
