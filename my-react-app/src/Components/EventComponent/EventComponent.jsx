import React from "react";
import events from "./data.json"; // Adjust the path if needed

const EventComponent = () => {
  return (
    <section className="py-10 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-8"
          style={{ color: "rgb(27,74,94)" }}
        >
          Upcoming Events
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3
                  className="text-2xl font-semibold mb-2"
                  style={{ color: "rgb(27,74,94)" }}
                >
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{event.date}</p>
                <p className="text-gray-700 leading-relaxed">
                  {event.description}
                </p>
              </div>
              <div className="px-6 pb-6">
                <a
                  href="#"
                  className="inline-block bg-[rgb(27,74,94)] text-white py-2 px-4 rounded-full shadow-lg hover:bg-[rgb(15,50,64)] transition duration-300"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventComponent;
