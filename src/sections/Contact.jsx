import React from "react";
import { raceInfo } from "../data/raceData";

function Contact() {
  const whatsappMessage = encodeURIComponent(
    `Hola, quiero información para inscribirme a ${raceInfo.name}.`
  );

  const whatsappUrl = `https://wa.me/${raceInfo.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="contact section" id="contacto">
      <div className="container contact__content">
        <p className="section-kicker">Contacto</p>

        <h2>¿Listo para unirte a la misión?</h2>

        <p>
          Para dudas, paquetes e inscripción, comunícate directamente con el
          organizador por WhatsApp.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact__button"
        >
          Inscribirme por WhatsApp
        </a>

        <div className="contact__note">
          <span>Evento:</span>
          <strong>{raceInfo.name}</strong>
        </div>
      </div>
    </section>
  );
}

export default Contact;