import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaNewspaper,
  FaRegHandshake,
  FaBook,
  FaBuilding,
  FaPhoneAlt,
  FaLanguage,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa"; // Importing icons from react-icons
import logo from "../../assets/images/Logo.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNewsMenuOpen, setIsNewsMenuOpen] = useState(false);
  const [isCentersMenuOpen, setIsCentersMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const navigate = useNavigate();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleNewsMenu = () => setIsNewsMenuOpen(!isNewsMenuOpen);
  const toggleCentersMenu = () => setIsCentersMenuOpen(!isCentersMenuOpen);

  // Handle language change
  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
  };

  // Handle navigation on menu item click
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="bg-[rgb(27,74,94)] shadow-lg p-2 sticky top-0 z-50">
      {" "}
      {/* Updated background color */}
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Language Selector */}
        <div className="absolute top-1 right-4 flex space-x-6 text-white">
          <button
            onClick={() => handleLanguageChange("en")}
            className={`flex items-center space-x-2 ${
              currentLanguage === "en" ? "underline" : ""
            }`}
          >
            <FaLanguage className="text-lg" />
            <span>English</span>
          </button>
          <button
            onClick={() => handleLanguageChange("am")}
            className={`flex items-center space-x-2 ${
              currentLanguage === "am" ? "underline" : ""
            }`}
          >
            <FaLanguage className="text-lg" />
            <span>አማርኛ</span>
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex justify-center items-center overflow-hidden mr-5">
            {/* Logo Image */}
            <img
              src={logo} // Increased logo size
              alt="Logo"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          <li>
            <a
              href="/"
              onClick={() => handleNavigation("#home")}
              className="text-white flex items-center hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaHome className="mr-2" />
              {currentLanguage === "en" ? "Home" : "መነሻ"}
            </a>
          </li>
          <li>
            <a
              href="/about-us"
              onClick={() => handleNavigation("#about")}
              className="text-white flex items-center hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaInfoCircle className="mr-2" />
              {currentLanguage === "en" ? "About Us" : "ስለ እኛ"}
            </a>
          </li>

          {/* News and Events Dropdown */}
          <li className="relative">
            <a
              href="/news"
              onClick={toggleNewsMenu}
              className="text-white flex items-center hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaNewspaper className="mr-2" />
              {currentLanguage === "en" ? "News and Events" : "መረጃ እና ተዘጋጅቷል"}
              <span className="ml-2">
                {isNewsMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </a>
            {isNewsMenuOpen && (
              <div className="absolute left-0 bg-gray-800 text-white p-2 mt-2 rounded-lg shadow-lg w-48 z-50 transition-all duration-300">
                <ul>
                  <li>
                    <a
                      href="/news"
                      onClick={() => handleNavigation("#news")}
                      className="block text-white hover:text-blue-500 p-2"
                    >
                      {currentLanguage === "en" ? "News" : "መረጃ"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/events"
                      onClick={() => handleNavigation("#events")}
                      className="block text-white hover:text-blue-500 p-2"
                    >
                      {currentLanguage === "en" ? "Events" : "ተዘጋጅቷል"}
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <a
              href="#services"
              onClick={() => handleNavigation("#services")}
              className="text-white flex items-center hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaRegHandshake className="mr-2" />
              {currentLanguage === "en" ? "Services" : "አገልግሎቶች"}
            </a>
          </li>
          <li>
            <a
              href="#publications"
              onClick={() => handleNavigation("#publications")}
              className="text-white flex items-center hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaBook className="mr-2" />
              {currentLanguage === "en" ? "Publications" : "ስራምስክር"}
            </a>
          </li>

          {/* Centers Dropdown */}
          <li className="relative">
            <a
              href="#centers"
              onClick={toggleCentersMenu}
              className="text-white flex items-center hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaBuilding className="mr-2" />
              {currentLanguage === "en" ? "Centers" : "ማዕከላት"}
              <span className="ml-2">
                {isCentersMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </a>
            {isCentersMenuOpen && (
              <div className="absolute left-0 bg-gray-800 text-white p-2 mt-2 rounded-lg shadow-lg w-48 z-50 transition-all duration-300">
                <ul>
                  <li>
                    <a
                      href="#bishoftu-center"
                      onClick={() => handleNavigation("#bishoftu-center")}
                      className="block text-white hover:text-blue-500 p-2"
                    >
                      {currentLanguage === "en"
                        ? "Bishoftu Center"
                        : "ቢሾፍቱ ማዕከል"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#holota-center"
                      onClick={() => handleNavigation("#holota-center")}
                      className="block text-white hover:text-blue-500 p-2"
                    >
                      {currentLanguage === "en" ? "Holota Center" : "ሆሎታ ማዕከል"}
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => handleNavigation("#contact")}
              className="text-white flex items-center hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaPhoneAlt className="mr-2" />
              {currentLanguage === "en" ? "Contact" : "እንከተኛ"}
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path d="M3 6h18M3 12h18M3 18h18"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[rgb(27,74,94)] p-5 absolute top-0 left-0 right-0 z-50">
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => handleNavigation("#home")}
                className="text-white block py-2 hover:text-blue-500"
              >
                {currentLanguage === "en" ? "Home" : "መነሻ"}
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handleNavigation("#about")}
                className="text-white block py-2 hover:text-blue-500"
              >
                {currentLanguage === "en" ? "About Us" : "ስለ እኛ"}
              </a>
            </li>
            <li>
              <a
                href="#news"
                onClick={() => handleNavigation("#news")}
                className="text-white block py-2 hover:text-blue-500"
              >
                {currentLanguage === "en" ? "News and Events" : "መረጃ እና ተዘጋጅቷል"}
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => handleNavigation("#services")}
                className="text-white block py-2 hover:text-blue-500"
              >
                {currentLanguage === "en" ? "Services" : "አገልግሎቶች"}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handleNavigation("#contact")}
                className="text-white block py-2 hover:text-blue-500"
              >
                {currentLanguage === "en" ? "Contact" : "እንከተኛ"}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
