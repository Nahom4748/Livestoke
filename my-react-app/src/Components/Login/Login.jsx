import React, { useState } from "react";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa"; // Import icons
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    // Example validation for correct username and password
    if (username === "admin" && password === "admin123") {
      navigate("/dashboard"); // Redirect to the dashboard on successful login
    } else {
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login
        </h2>

        {/* Error message */}
        {error && (
          <div className="text-red-500 text-sm text-center mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm text-gray-700 mb-2"
            >
              Username
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter username"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <FaLock className="text-gray-500 mr-3" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[rgb(27,74,94)] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 ease-in-out"
          >
            <FaSignInAlt className="inline-block mr-2" />
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
