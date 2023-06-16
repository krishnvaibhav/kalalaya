import React from "react";
import Hero from "./hero";
import WhyUs from "./WhyUs";
import Classes from "./Classes";
import Contactus from "./Contactus";
import Location from "./location";

const home = () => {
  return (
    <div>
      <Hero />
      <WhyUs />
      <Classes />
      <Location />
      <Contactus />
    </div>
  );
};

export default home;
