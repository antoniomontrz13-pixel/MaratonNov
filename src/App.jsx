import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import RaceInfo from "./sections/RaceInfo.jsx";
import Packages from "./sections/Packages.jsx";
import RouteMap from "./sections/RouteMap.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  useEffect(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const elements = document.querySelectorAll(
    ".section, .race-info__main-card, .race-info__card, .package-card, .map-card, .weather-card, .site-footer"
  );

  if (prefersReducedMotion) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -80px 0px",
    }
  );

  elements.forEach((element, index) => {
    element.classList.add("reveal-on-scroll");
    element.style.setProperty("--reveal-delay", `${Math.min(index * 50, 220)}ms`);
    observer.observe(element);
  });

  return () => observer.disconnect();
}, []);
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