import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaSearch,
} from "react-icons/fa"; // Icons for modern look

const Footer = () => {
  return (
    <footer
      className="py-10 bg-[rgb(27,74,94)] text-white"
      style={{ backgroundColor: "rgb(27,74,94)" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">About Us</h3>
          <p className="leading-relaxed">
            Vision: By 2022, the Institute shall be a Center of Excellence for
            research, capacity building, consultancy, and technology transfer in
            animal genetic improvement and animal product processing.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-white" />
              <span>Tel: 011 439 00 60</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-white" />
              <span>P.O. Box: 22692</span>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition duration-300 flex items-center"
            >
              <FaFacebook className="text-3xl" />
              <span className="ml-2">Facebook</span>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-400 transition duration-300 flex items-center"
            >
              <FaYoutube className="text-3xl" />
              <span className="ml-2">YouTube</span>
            </a>
          </div>
        </div>

        {/* Quick Search Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Quick Search</h3>
          <button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300">
            <FaSearch />
            <span>Vacancy</span>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-600"></div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Your Institute Name. All rights
          reserved.
        </p>
        <p className="text-center mt-4 md:mt-0">
          Made with by Your Organization.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
