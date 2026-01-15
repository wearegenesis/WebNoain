import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { NewsSection } from './components/NewsSection';
import { TeamsSection } from './components/TeamsSection';
import { JoinUsSection } from './components/JoinUsSection';
import { ContactSection } from './components/ContactSection';
import { AllNewsPage } from './components/AllNewsPage';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-slate-950">
      <Navbar />
      <HeroSection />
      <NewsSection />
      <TeamsSection />
      <JoinUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default App;