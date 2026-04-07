import React, { useState, useEffect } from "react";

import { Features } from "../sections/features";
import { About } from "../sections/about";
import { Services } from "../sections/services";
import { Gallery } from "../sections/gallery";
import { Testimonials } from "../sections/testimonials";
// import { Team } from "../sections/team";
import { Contact } from "../sections/contact";
import HeroCarousel from "../sections/Home/Carousel";
import LogoCarousel from "../sections/Home/Partners";
import FeatureGrid from "../sections/Home/Department";
import HorizontalPrograms from "../sections/Home/Hospitals";
import WhyDoctutorials from "../sections/Home/WhyDoctutorials";
import Doctors from "../sections/Home/Doctors";
import Fellowship from "../sections/Home/Fellowship";
import AboutDoc from "../sections/Home/AboutDoc";
import DocWorks from "../sections/Home/DocWorks";
import Journey from "../sections/Home/Journey";
import FindProgram from "../sections/Home/FindProgram";
import FAQ from "../sections/Home/FAQ";
import Blog from "../sections/Home/Blog";
import Explore from "../sections/Home/Explore";

import JsonData from "../data/data.json";

const Home = () => {

  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      {/* <div style={{ paddingTop: "50px" }}></div> */}
      <HeroCarousel />
      {/* <LogoCarousel /> */}
      <DocWorks />
      <Journey />
      <FindProgram />
      <FAQ />
      <Blog />
      <Explore />
      {/* <FeatureGrid /> */}
      {/* <HorizontalPrograms /> */}
      {/* <WhyDoctutorials /> */}
      {/* <Doctors /> */}
      {/* <AboutDoc /> */}
      {/* <Fellowship /> */}
      {/* <Features data={landingPageData.Features} /> */}
      {/* <About data={landingPageData.About} /> */}
      {/* <Services data={landingPageData.Services} /> */}
      {/* <Gallery data={landingPageData.Gallery} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      {/* <Contact data={landingPageData.Contact} /> */}
    </>
  );
};

export default Home;