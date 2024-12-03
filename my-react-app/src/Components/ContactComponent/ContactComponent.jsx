import React, { useState } from "react";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-gray-700 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(27,74,94)]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-700 font-semibold">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(27,74,94)]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-gray-700 font-semibold"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(27,74,94)]"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[rgb(27,74,94)] text-white font-semibold rounded-lg hover:bg-[rgb(27,74,94)]/80 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Google Map Section (Addis Ababa) */}
        <div className="w-full h-96 lg:h-[500px] rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.682506970578!2d38.757759768493655!3d9.040242510784315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8503e616b561%3A0x7f6b9b6bbf5b1d5e!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1696416407383!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            title="Map of Addis Ababa"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
