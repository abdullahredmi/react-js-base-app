import React from "react";
import { About as AboutSection } from "../sections/about";
import JsonData from "../data/data.json";

const About = () => {
  return <AboutSection data={JsonData.About} />;
};

export default About;