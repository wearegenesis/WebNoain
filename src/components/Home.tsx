import React, { useEffect } from "react";
import { HeroSection } from "./HeroSection";
import { NewsSection } from "./NewsSection";
import { TeamsSection } from "./TeamsSection";
import { JoinUsSection } from "./JoinUsSection";
import { ContactSection } from "./ContactSection";

export const Home: React.FC = () => {
  // Fix para que al cargar la home empiece arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="inicio">
      <HeroSection />
      <NewsSection />
      <TeamsSection />
      <JoinUsSection />
      <ContactSection />
    </div>
  );
};
