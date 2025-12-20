import "./App.css";
import Loading from "./components/Loading";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-[#B3F1F1] h-screen w-screen overflow-hidden">
      <Home />
      <Loading />
    </div>
  );
}

export default App;
