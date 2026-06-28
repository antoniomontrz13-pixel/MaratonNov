import React from "react";
import { racePackages } from "../data/raceData";
import PackageCard from "../components/PackageCard.jsx";

function Packages() {
  return (
    <section className="packages section" id="paquetes">
      <div className="container">
        <div className="packages__header">
          <p className="section-kicker">Paquetes</p>
          <h2>Elige tu pase para la misión</h2>
          <p>
            Cada paquete te conecta directamente con el organizador por WhatsApp
            para resolver dudas y continuar con tu inscripción.
          </p>
        </div>

        <div className="packages__grid">
          {racePackages.map((packageData, index) => (
            <PackageCard
              key={packageData.name}
              packageData={packageData}
              featured={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;