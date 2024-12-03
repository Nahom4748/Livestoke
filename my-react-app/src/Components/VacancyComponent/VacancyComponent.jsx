import React from "react";

const vacancies = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Tech Solutions",
    location: "Remote",
    description:
      "We are looking for a Full Stack Developer with experience in React, Node.js, and MongoDB.",
  },
  {
    id: 2,
    title: "Front-End Developer",
    company: "Creative Agency",
    location: "New York, NY",
    description:
      "Join our team as a Front-End Developer to work on exciting projects using React and Tailwind CSS.",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "DevX Corp.",
    location: "San Francisco, CA",
    description:
      "Looking for a Backend Developer with experience in Node.js and Express for building scalable applications.",
  },
];

const VacancyComponent = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Job Vacancies
      </h2>
      <div className="space-y-6">
        {vacancies.map((vacancy) => (
          <div
            key={vacancy.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-bold text-gray-800">
              {vacancy.title}
            </h3>
            <p className="text-lg text-gray-600">{vacancy.company}</p>
            <p className="text-sm text-gray-500 mb-4">{vacancy.location}</p>
            <p className="text-gray-700 mb-6">{vacancy.description}</p>
            <button className="px-6 py-2 bg-[rgb(27,74,94)] text-white font-semibold rounded-lg hover:bg-[rgb(27,74,94)]/80 transition duration-300 ease-in-out">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VacancyComponent;
