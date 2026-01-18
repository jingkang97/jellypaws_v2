import SplineComponent from "@/components/SplineComponent";

const Home = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background */}
      <SplineComponent />

      {/* Center text overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -translate-y-64">
        <h1
          className="text-center text-white text-4xl sm:text-5xl md:text-6xl font-bold"
          style={{ fontFamily: "'Cherry Bomb One'" }}
        >
          Welcome to JellyPaws!
        </h1>
      </div>
    </div>
  );
};

export default Home;
