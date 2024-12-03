import React from "react";
import { motion } from "framer-motion"; // Optional for animations
import { FaBullseye, FaRocket, FaEye } from "react-icons/fa"; // Icon library

const ObjectivesMissionVision = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold text-[rgb(27,74,94)] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Objectives, Mission, and Vision
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover the core values and aspirations that guide us towards a
          better future.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Objective Section */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[rgb(27,74,94)] text-white flex justify-center items-center rounded-full">
              <FaBullseye size={32} />
            </div>
          </div>
          <motion.h3
            className="text-center text-2xl font-bold text-[rgb(27,74,94)] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Objective
          </motion.h3>
          <motion.p
            className="text-center text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            To drive sustainable growth through innovative solutions, enhancing
            breed improvement and livestock product processing.
          </motion.p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[rgb(27,74,94)] text-white flex justify-center items-center rounded-full">
              <FaRocket size={32} />
            </div>
          </div>
          <motion.h3
            className="text-center text-2xl font-bold text-[rgb(27,74,94)] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Mission
          </motion.h3>
          <motion.p
            className="text-center text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            To empower livestock breeders, processors, and the community with
            cutting-edge knowledge, tools, and technologies for sustainable
            practices.
          </motion.p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[rgb(27,74,94)] text-white flex justify-center items-center rounded-full">
              <FaEye size={32} />
            </div>
          </div>
          <motion.h3
            className="text-center text-2xl font-bold text-[rgb(27,74,94)] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Vision
          </motion.h3>
          <motion.p
            className="text-center text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            To be the leading institute in livestock breed improvement,
            processing, and sustainable practices, shaping a prosperous future
            for all.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default ObjectivesMissionVision;
