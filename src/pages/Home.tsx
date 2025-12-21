import CurvedLoop from "@/components/CurvedLoop";
import Lanyard from "@/components/Lanyard";
import Aurora from "@/components/Aurora";

export default function Home() {
  return (
    <div>
      <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
      {/* <div className="absolute text-6xl">Discover your true flavor!</div> */}

      {/* <Aurora
        colorStops={["#ffffff", "#ffffff", "#ffffff"]}
        blend={0}
        amplitude={0.5}
        speed={0.3}
      /> */}
      <CurvedLoop
        marqueeText="Jelly ✦ Paws ✦ Jelly ✦ Paws ✦"
        speed={1}
        curveAmount={400}
        direction="right"
        // interactive={true}
        // className="z-10 absolute h-screen w-screen text-8xl font-semibold text-black"
      />
    </div>
  );
}
