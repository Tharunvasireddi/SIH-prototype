import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react"; // icons
import  image1  from "../assests/govt-logo.jpg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <>
      {/* <nav className="flex items-center justify-between p-10 bg-white ">
        <span>logo</span>
        <ul className="flex space-x-4 text-xl font-serif">
          <li>home</li>
          <li>about</li>
          <li>features</li>
          <li>department</li>
          <li>image</li>
          <li>contact us</li>
        </ul>
      </nav> */}
      <nav className={`sticky top-0 z-50 shadow-md bg-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Left Side: Logo */}
            <div className="flex items-center">
              <img src={image1} alt="Govt Logo" className="h-10 w-auto mr-2" />
              <span className="font-bold text-lg">GOVERNMENT OF STATE</span>
            </div>

            {/* Right Side: Links */}
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#" className="hover:text-blue-600 ">
                Home
              </a>
              <a href="#about" className="hover:text-blue-600">
                About Us
              </a>
              <a href="#features" className="hover:text-blue-600">
                Features
              </a>
              <a href="#images" className="hover:text-blue-600">
                Images
              </a>
              <a href="#contact" className="hover:text-blue-600">
                Contact Us
              </a>

              {/* Search bar */}
              {/* <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            /> */}

              {/* Dark Mode Toggle */}
              <button onClick={toggleDarkMode} className="p-2 rounded-md">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-gray-100 dark:bg-gray-800 px-4 py-3 space-y-2">
            <a href="#" className="block hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="block hover:text-blue-600">
              About Us
            </a>
            <a href="#features" className="block hover:text-blue-600">
              Features
            </a>
            <a href="#images" className="block hover:text-blue-600">
              Images
            </a>
            <a href="#contact" className="block hover:text-blue-600">
              Contact Us
            </a>

            <input
              type="text"
              placeholder="Search..."
              className="w-full px-2 py-1 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button onClick={toggleDarkMode} className="p-2 rounded-md mt-2">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
