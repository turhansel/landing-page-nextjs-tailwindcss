import React from "react";
import FeaturesSection from "./FeaturesSection";
import Header from "./Header";
import Hero from "./Hero";
import PinkSection from "./PinkSection";

export default function Layout() {
  return (
    <div>
      <Header />
      <Hero />
      <PinkSection />
      <FeaturesSection />
    </div>
  );
}
