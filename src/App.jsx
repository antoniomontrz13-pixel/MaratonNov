import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import RaceInfo from "./sections/RaceInfo.jsx";
import Packages from "./sections/Packages.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <RaceInfo />
        <Packages />
      </main>
    </>
  );
}

export default App;