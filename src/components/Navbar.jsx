import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link } from "@tanstack/react-router";
import image2 from "../assests/jharknd_govt.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-white border-b border-gray-200 p-4 border-b-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Left Side: Logo */}
          <div className="flex items-center space-x-4">
            <img src={image2} alt="Govt Logo" className="h-20 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-800 leading-tight">
                GOVERNMENT OF JHARKAND
              </span>
              <span className="text-sm text-gray-600 font-medium">
                Official website of the state
              </span>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <ul className="flex items-center space-x-8">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Analytics", path: "/analytics" },
                { name: "Images", path: "/images" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, idx) => (
                <li key={idx} className="relative group">
                  <Link
                    to={link.path}
                    className="relative px-4 py-2 text-gray-700 font-medium text-base transition-colors duration-300 hover:text-yellow-600"
                  >
                    {link.name}
                    {/* Yellow underline animation */}
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Auth Buttons & Controls */}
          <div className="flex items-center space-x-4">
            {/* Auth Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/login"
                className="px-4 py-2 text-gray-700 font-medium text-sm transition-all duration-300 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg border border-gray-200 hover:border-yellow-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-yellow-500 text-white font-medium text-sm transition-all duration-300 hover:bg-yellow-600 hover:scale-105 rounded-lg shadow-md hover:shadow-lg"
              >
                Register
              </Link>
            </div>

            {/* Dark Mode Toggle */}
            {/* <button
              onClick={toggleDarkMode}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110"
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button> */}

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300"
              >
                {isOpen ? (
                  <X size={24} className="text-gray-700" />
                ) : (
                  <Menu size={24} className="text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {/* Navigation Links */}
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Features", path: "/features" },
              { name: "Images", path: "/images" },
              { name: "Contact Us", path: "/contact" },
            ].map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="block px-4 py-3 text-gray-700 font-medium text-base transition-all duration-300 hover:text-yellow-600 hover:bg-gray-50 rounded-lg"
              >
                {link.name}
              </Link>
            ))}

            {/* Divider */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Auth Buttons - Mobile */}
            <div className="space-y-3">
              <Link
                to="/login"
                className="block w-full px-4 py-3 text-center text-gray-700 font-medium text-base transition-all duration-300 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg border border-gray-200 hover:border-yellow-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block w-full px-4 py-3 text-center bg-yellow-500 text-white font-medium text-base transition-all duration-300 hover:bg-yellow-600 rounded-lg shadow-md hover:shadow-lg"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
