import React, { useState } from "react";
import image1 from "../../assets/images/10003.jpg"; // Your image path
import image2 from "../../assets/images/10004.jpg"; // Replace with your second image
import image3 from "../../assets/images/10005.jpg"; // Replace with your third image

function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false); // For handling the video modal state

  const slides = [
    {
      title: "Welcome To Our Site",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-blue-600",
      videoSrc: "/docs/videos/flowbite.mp4", // Your video source
    },
    {
      title: "Empower Your Future",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgColor: "bg-green-600",
      videoSrc: "", // No video
    },
    {
      title: "Achieve Your Goals",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      bgColor: "bg-yellow-600",
      videoSrc: "", // No video
    },
  ];

  const handlePrev = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div>
      <div
        id="hero-carousel"
        className="relative w-full h-screen bg-gray-900 text-white"
        data-carousel="slide"
      >
        <div className="relative w-full h-full overflow-hidden">
          {/* Slide */}
          <div
            className={`duration-700 ease-in-out h-full ${slides[slideIndex].bgColor}`}
            data-carousel-item
          >
            <img
              src={
                slideIndex === 0 ? image1 : slideIndex === 1 ? image2 : image3
              }
              className="absolute inset-0 object-cover w-full h-full"
              alt={`Slide ${slideIndex + 1}`}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50">
              <h1 className="text-4xl md:text-6xl font-bold text-center text-shadow-lg">
                {slides[slideIndex].title}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200 text-center">
                {slides[slideIndex].description}
              </p>
              {slides[slideIndex].videoSrc && (
                <div
                  onClick={openVideoModal}
                  className="mt-6 cursor-pointer text-white text-4xl"
                >
                  <i className="fa fa-video text-4xl animate-pulse"></i>{" "}
                  {/* Video Icon */}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute flex space-x-3 -translate-x-1/2 bottom-6 left-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-4 h-4 rounded-full ${
                slideIndex === index ? "bg-white" : "bg-white/30 hover:bg-white"
              }`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setSlideIndex(index)}
            ></button>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 text-white cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 bg-black/50 rounded-full group-hover:bg-black/70">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 text-white cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 bg-black/50 rounded-full group-hover:bg-black/70">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 9l4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-xl transform transition-all duration-500 ease-in-out scale-100 hover:scale-105">
            <button
              onClick={closeVideoModal}
              className="absolute top-2 right-2 text-black text-3xl hover:text-gray-700 focus:outline-none"
            >
              &times;
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <video className="w-full" autoPlay controls>
                <source src={slides[slideIndex].videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
