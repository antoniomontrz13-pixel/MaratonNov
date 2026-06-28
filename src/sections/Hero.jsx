import React from "react";
import { raceInfo, raceDistances } from "../data/raceData";

function Hero() {
  const whatsappMessage = encodeURIComponent(
    `Hola, quiero información para inscribirme a ${raceInfo.name}.`
  );

  const whatsappUrl = `https://wa.me/${raceInfo.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="hero" id="inicio">
      <div className="hero__orb hero__orb--one"></div>
      <div className="hero__orb hero__orb--two"></div>

      <div className="container hero__content animate-fade-up">
        <p className="hero__eyebrow">
          Carrera temática · {raceDistances.join(" / ")}
        </p>

        <h1 className="hero__title">{raceInfo.name}</h1>

        <p className="hero__subtitle">{raceInfo.subtitle}</p>

        <p className="hero__description">{raceInfo.description}</p>

        <div className="hero__info">
          <span>{raceInfo.date}</span>
          <span>{raceInfo.time}</span>
          <span>{raceInfo.location}</span>
        </div>

        <div className="hero__actions">
          <a href="#paquetes" className="hero__button hero__button--primary">
            {raceInfo.primaryButtonText}
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__button hero__button--secondary"
          >
            {raceInfo.secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;