import React from "react";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <IntroSection />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;