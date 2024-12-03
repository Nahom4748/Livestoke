import React from "react";

const VideoBackground = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Content over the video */}
      <div className="relative z-20 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg">
            Experience the best of our services and offerings
          </p>
          <a
            href="#services"
            className="inline-block mt-6 py-2 px-6 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoBackground;
