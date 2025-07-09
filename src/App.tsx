import React from 'react';
import { useTheme } from './hooks/useTheme';
import { ThemeTransition } from './components/ThemeTransition';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeSection } from './components/MarqueeSection';
import { About } from './components/About';
import { NearbyPlaces } from './components/NearbyPlaces';
import { PopularPlaces } from './components/PopularPlaces';
import { TryAR } from './components/TryAR';
import { ComingSoon } from './components/ComingSoon';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const { isTransitioning } = useTheme();

  return (
    <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
      <ThemeTransition isTransitioning={isTransitioning} />
      <Navbar />
      <Hero />
      <MarqueeSection />
      <About />
      <NearbyPlaces />
      <PopularPlaces />
      <TryAR />
      <ComingSoon />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;