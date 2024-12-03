import React from "react";
import Hero from "../Hero/Hero";
import AboutUs from "../AboutUs/AboutUs";
import ObjectivesMissionVision from "../ObjectivesMissionVision/ObjectivesMissionVision";
import News from "../News/News";
import VacancyComponent from "../VacancyComponent/VacancyComponent";
import ContactComponent from "../ContactComponent/ContactComponent";
import EventComponent from "../EventComponent/EventComponent";

function Homapage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ObjectivesMissionVision />
      <News />
      <EventComponent />
      <VacancyComponent />
      <ContactComponent />
    </>
  );
}

export default Homapage;
