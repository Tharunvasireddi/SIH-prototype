import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar";
import Carousel from "./components/caurosel";
import Marquee from "./components/marque";
const App = () => {
  return (
    <>
      <div className="bg-black w-full min-h-screen">
        <header>this header it consist of </header>
        <Navbar />
        <Outlet />
        {/* <Carousel />
        <Marquee /> */}
      </div>
    </>
  );
};

export default App;
