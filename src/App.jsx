import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import RaceInfo from "./sections/RaceInfo.jsx";
import Packages from "./sections/Packages.jsx";
import RouteMap from "./sections/RouteMap.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <RaceInfo />
        <Packages />
        <RouteMap />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;