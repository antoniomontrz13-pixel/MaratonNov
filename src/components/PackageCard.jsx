import React from "react";
import { raceInfo } from "../data/raceData";

function PackageCard({ packageData, featured = false }) {
  const whatsappMessage = encodeURIComponent(packageData.whatsappMessage);
  const whatsappUrl = `https://wa.me/${raceInfo.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <article className={`package-card ${featured ? "package-card--featured" : ""}`}>
      {featured && <span className="package-card__badge">Más elegido</span>}

      <div className="package-card__header">
        <h3>{packageData.name}</h3>
        <p>{packageData.price}</p>
      </div>

      <ul className="package-card__list">
        {packageData.includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="package-card__button"
      >
        Inscribirme por WhatsApp
      </a>
    </article>
  );
}

export default PackageCard;