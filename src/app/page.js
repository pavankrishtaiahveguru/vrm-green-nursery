import React from "react";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Varieties from "@/components/home/Varieties";
import DemoFarm from "@/components/home/DemoFarm";
import Services from "@/components/home/Services";
import CTA from "@/components/common/CTA";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Varieties />
      <Services />
      <DemoFarm />
      <CTA />
    </>
  );
};

export default page;
