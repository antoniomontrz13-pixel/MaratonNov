import React from "react";
import { raceInfo, raceHighlights } from "../data/raceData";

function RaceInfo() {
  return (
    <section className="race-info section" id="detalles">
      <div className="container">
        <div className="race-info__header">
          <p className="section-kicker">Detalles de la misión</p>
          <h2>Todo lo que necesitas saber antes de correr</h2>
          <p>
            Una experiencia deportiva con energía espacial, pensada para vivir
            la carrera como si fuera una misión interestelar.
          </p>
        </div>

        <div className="race-info__main-card">
          <div>
            <span className="race-info__label">Fecha</span>
            <strong>{raceInfo.date}</strong>
          </div>

          <div>
            <span className="race-info__label">Hora</span>
            <strong>{raceInfo.time}</strong>
          </div>

          <div>
            <span className="race-info__label">Lugar</span>
            <strong>{raceInfo.location}</strong>
          </div>
        </div>

        <div className="race-info__grid">
          {raceHighlights.map((item) => (
            <article className="race-info__card" key={item.title}>
              <span>{item.title}</span>
              <h3>{item.value}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RaceInfo;