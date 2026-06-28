import React from "react";
import { raceInfo, raceDistances } from "../data/raceData";

function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappMessage = encodeURIComponent(
    `Hola, quiero información para inscribirme a ${raceInfo.name}.`
  );

  const whatsappUrl = `https://wa.me/${raceInfo.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="site-footer" id="contacto">
      <div className="site-footer__emblem" aria-hidden="true">
        ✦
      </div>

      <div className="container site-footer__content">
        <div className="site-footer__column">
          <h3>Contacto</h3>
          <p>{raceInfo.location}</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp del organizador
          </a>
        </div>

        <div className="site-footer__brand">
          <h2>{raceInfo.name}</h2>
          <p>{raceInfo.subtitle}</p>

          <div className="site-footer__actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__button site-footer__button--primary"
            >
              Inscribirme
            </a>

            <a
              href="#paquetes"
              className="site-footer__button site-footer__button--secondary"
            >
              Ver paquetes
            </a>
          </div>
        </div>

        <div className="site-footer__column site-footer__column--right">
          <h3>Ir rápido</h3>
          <a href="#inicio">Inicio</a>
          <a href="#paquetes">Paquetes</a>
          <a href="#ruta">Ubicación</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>
          {raceInfo.date} · {raceInfo.time} · {raceDistances.join(" / ")}
        </span>

        <span>© {currentYear} {raceInfo.name}</span>
      </div>
    </footer>
  );
}

export default Footer;