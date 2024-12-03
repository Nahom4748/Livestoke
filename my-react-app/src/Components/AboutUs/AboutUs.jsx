import React from "react";
import { motion } from "framer-motion"; // Optional, for advanced animations
import cowImage from "../../assets/images/10004.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12 min-h-screen flex flex-col justify-center">
      {/* Title Section */}
      <motion.h2
        className="text-center text-5xl font-extrabold text-[rgb(27,74,94)] mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Powers and Duties of the Institute
      </motion.h2>
      <motion.p
        className="text-center text-lg text-[rgb(27,74,94)] mb-10 px-6 sm:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Explore the initiatives and goals we strive for to enhance livestock
        breed improvement and product processing.
      </motion.p>

      {/* Main Content Section */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-8 text-[rgb(27,74,94)]">
          {[
            {
              icon: "fas fa-flask",
              color: "bg-green-500",
              text: "Undertake research and studies on livestock breed improvement to expand sustainable breed supply.",
            },
            {
              icon: "fas fa-lightbulb",
              color: "bg-blue-500",
              text: "Generate policies, strategies, programs, and action plans to ensure competitiveness in breed improvement.",
            },
            {
              icon: "fas fa-recycle",
              color: "bg-yellow-500",
              text: "Support livestock product and by-product processing, providing technical and market insights.",
            },
          ].map(({ icon, color, text }, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <div
                className={`w-14 h-14 ${color} text-white flex justify-center items-center rounded-full shadow-xl transform transition-all duration-300 hover:scale-125`}
              >
                <i className={icon}></i>
              </div>
              <p className="text-lg">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          className="md:w-1/3 flex justify-center my-8 md:my-0"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={cowImage}
            alt="Cow"
            className="w-72 h-72 object-cover rounded-full shadow-2xl border-4 border-green-500 transform transition-all duration-300 hover:scale-110 hover:rotate-6"
          />
        </motion.div>

        {/* Right Side */}
        <div className="md:w-1/2 space-y-8 text-[rgb(27,74,94)]">
          {[
            {
              icon: "fas fa-chart-line",
              color: "bg-red-500",
              text: "Establish model processing units to support private investments in livestock breeding and processing.",
            },
            {
              icon: "fas fa-database",
              color: "bg-purple-500",
              text: "Collect and analyze data for effective breed improvement and processing, developing databases and media.",
            },
            {
              icon: "fas fa-seedling",
              color: "bg-indigo-500",
              text: "Provide technical support to use renewable energy sources and minimize environmental impact.",
            },
          ].map(({ icon, color, text }, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <div
                className={`w-14 h-14 ${color} text-white flex justify-center items-center rounded-full shadow-xl transform transition-all duration-300 hover:scale-125`}
              >
                <i className={icon}></i>
              </div>
              <p className="text-lg">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
