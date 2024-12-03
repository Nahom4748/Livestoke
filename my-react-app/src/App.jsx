import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route from react-router-dom
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Carousel from "./Components/Carousel/Carousel";
import AboutUs from "./Components/AboutUs/AboutUs";
import ObjectivesMissionVision from "./Components/ObjectivesMissionVision/ObjectivesMissionVision";
import Footer from "./Components/Footer/Footer";
import News from "./Components/News/News";
import EventComponent from "./Components/EventComponent/EventComponent";
import VacancyComponent from "./Components/VacancyComponent/VacancyComponent";
import ContactComponent from "./Components/ContactComponent/ContactComponent";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import VideoBackground from "./Components/VideoBackground/VideoBackground";
import AdminMenu from "./Components/Admin/AdminMenu";
import Login from "./Components/Login/Login";
import Homapage from "./Components/Homapage/Homapage";

const App = () => {
  return (
    <Router>
      <Navbar />

      {/* Define Routes */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homapage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/objectives-mission-vision"
          element={<ObjectivesMissionVision />}
        />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<EventComponent />} />
        <Route path="/vacancies" element={<VacancyComponent />} />
        <Route path="/contact" element={<ContactComponent />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/menu" element={<AdminMenu />} />

        {/* Video Background Route */}
        <Route path="/video-background" element={<VideoBackground />} />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Footer - This can be placed outside Routes to be visible on all pages */}
      <Footer />
    </Router>
  );
};

export default App;
