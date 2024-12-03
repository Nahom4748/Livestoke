import React, { useState } from "react";
import { FaUsers, FaCog, FaSignOutAlt, FaFileAlt } from "react-icons/fa"; // Import the icons

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // State to toggle sidebar visibility

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-gray-800 text-white transition-all duration-300 p-4`}
      >
        <div className="flex justify-between items-center">
          <h2 className={`${isSidebarOpen ? "text-2xl" : "text-lg"} font-bold`}>
            Admin Dashboard
          </h2>
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="text-white text-2xl"
          >
            {isSidebarOpen ? "<<" : ">>"}
          </button>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white transition duration-300"
              >
                <FaDashboard className="mr-3" />
                {isSidebarOpen && "Dashboard"}
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white transition duration-300"
              >
                <FaUsers className="mr-3" />
                {isSidebarOpen && "Users"}
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white transition duration-300"
              >
                <FaFileAlt className="mr-3" />
                {isSidebarOpen && "Reports"}
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white transition duration-300"
              >
                <FaCog className="mr-3" />
                {isSidebarOpen && "Settings"}
              </a>
            </li>
            <li className="mt-4">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white transition duration-300"
              >
                <FaSignOutAlt className="mr-3" />
                {isSidebarOpen && "Logout"}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Dashboard</h1>

        {/* Add more sections/content here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Users Overview</h3>
            <p className="text-gray-600">Some quick stats about users...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Sales Overview</h3>
            <p className="text-gray-600">Some quick stats about sales...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Settings</h3>
            <p className="text-gray-600">
              Settings and configuration options...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
