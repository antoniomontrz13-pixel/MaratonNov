import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import RaceInfo from "./sections/RaceInfo.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <RaceInfo />
      </main>
    </>
  );
}

export default App;