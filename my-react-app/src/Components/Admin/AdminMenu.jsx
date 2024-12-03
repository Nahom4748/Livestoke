import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for routing

const AdminMenu = () => {
  return (
    <div className="min-h-screen flex bg-[rgb(244,244,244)]">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col p-6">
        <h2 className="text-2xl font-extrabold mb-8">Admin Panel</h2>

        <div className="space-y-4">
          <Link
            to="/admin/add-user"
            className="flex items-center space-x-3 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
          >
            <i className="fas fa-user-plus"></i>
            <span>Add Users</span>
          </Link>

          <Link
            to="/admin/manage-users"
            className="flex items-center space-x-3 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
          >
            <i className="fas fa-cogs"></i>
            <span>Manage Users</span>
          </Link>

          <Link
            to="/admin/list-users"
            className="flex items-center space-x-3 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
          >
            <i className="fas fa-users"></i>
            <span>List of Users</span>
          </Link>

          <Link
            to="/admin/assign-communication-experts"
            className="flex items-center space-x-3 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
          >
            <i className="fas fa-comment-dots"></i>
            <span>Assign Communication Experts</span>
          </Link>

          <Link
            to="/admin/assign-hr-users"
            className="flex items-center space-x-3 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
          >
            <i className="fas fa-user-tie"></i>
            <span>Assign HR Users</span>
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-8">
        {/* You can render specific pages based on the current route */}
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome to the Admin Panel
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Select an option from the sidebar to manage users and actions.
        </p>
      </div>
    </div>
  );
};

export default AdminMenu;
