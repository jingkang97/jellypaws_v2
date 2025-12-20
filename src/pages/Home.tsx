import CurvedLoop from "@/components/CurvedLoop";
import Lanyard from "@/components/Lanyard";

export default function Home() {
  return (
    <div>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      <CurvedLoop
        marqueeText="Jelly ✦ Paws ✦ Jelly ✦ Paws ✦"
        speed={1}
        curveAmount={500}
        direction="right"
        // interactive={true}
        className="z-10 absolute top-10 h-screen w-screen text-8xl font-semibold text-black"
      />
    </div>
  );
}
