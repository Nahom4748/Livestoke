import React from "react";
import newsList from "./newsList.json"; // Adjust path if needed

const News = () => {
  return (
    <section className="py-10 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Sticky and Styled Heading */}
        <div className="sticky top-0 bg-gray-100 py-4 z-10">
          <h2
            className="text-4xl font-extrabold text-center"
            style={{ color: "rgb(27,74,94)" }}
          >
            Latest News
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {newsList.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* News Image */}
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-64 object-cover"
              />

              {/* News Content */}
              <div className="p-6 space-y-4">
                <h3
                  className="text-2xl font-semibold"
                  style={{ color: "rgb(27,74,94)" }}
                >
                  {news.title}
                </h3>
                <p className="text-sm text-gray-500">{news.date}</p>
                <p className="text-gray-700 leading-relaxed">
                  {news.description}
                </p>
              </div>

              {/* Facebook Embed */}
              <div className="px-6 pb-6">
                {/* Example Facebook Post Embed */}
                <div
                  className="fb-post"
                  data-href="https://www.facebook.com/YourPage/posts/123456789"
                  data-width="500"
                  data-show-text="true"
                >
                  {/* Facebook Embed iframe */}
                  <blockquote
                    cite="https://www.facebook.com/YourPage/posts/123456789"
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/YourPage/posts/123456789">
                      Example Facebook Post
                    </a>
                  </blockquote>
                </div>
              </div>

              {/* Read More Button */}
              <div className="px-6 pb-6">
                <a
                  href="#"
                  className="inline-block"
                  style={{
                    backgroundColor: "rgb(27,74,94)",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "9999px",
                    transition: "background-color 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "rgb(15, 50, 64)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "rgb(27,74,94)")
                  }
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
