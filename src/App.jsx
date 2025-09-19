import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="bg-white w-full min-h-screen">
        <Navbar />
        <Outlet />
        {/* <Carousel />
        <Marquee /> */}
      </div>
    </>
  );
};

export default App;
