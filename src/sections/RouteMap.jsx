import React, { useEffect, useState } from "react";
import { routeInfo } from "../data/raceData";

const weatherCodeText = {
  0: "Cielo despejado",
  1: "Mayormente despejado",
  2: "Parcialmente nublado",
  3: "Nublado",
  45: "Neblina",
  48: "Neblina",
  51: "Llovizna ligera",
  53: "Llovizna",
  55: "Llovizna intensa",
  61: "Lluvia ligera",
  63: "Lluvia",
  65: "Lluvia intensa",
  80: "Chubascos ligeros",
  81: "Chubascos",
  82: "Chubascos intensos",
  95: "Tormenta",
};

function RouteMap() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${routeInfo.weather.latitude}&longitude=${routeInfo.weather.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FMexico_City`
        );

        const data = await response.json();
        setWeather(data);
      } catch {
        setWeather(null);
      }
    }

    getWeather();
  }, []);

  const current = weather?.current;
  const daily = weather?.daily;

  return (
    <section className="location-weather section" id="ruta">
      <div className="container">
        <div className="location-weather__header">
          <p className="section-kicker">Ubicación y clima</p>
          <h2>Todo listo para llegar a la misión</h2>
          <p>
            Consulta la ubicación del punto de encuentro y revisa el clima de
            León, Guanajuato antes del evento.
          </p>
        </div>

        <div className="location-weather__layout">
          <article className="map-card">
            <div className="map-card__info">
              <span>Ubicación</span>
              <h3>{routeInfo.locationName}</h3>
              <p>{routeInfo.locationDescription}</p>
            </div>

            <iframe
              title="Mapa del Parque Metropolitano de León"
              src={routeInfo.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </article>

          <aside className="weather-card">
            <span className="weather-card__label">Clima actual</span>
            <h3>León, Guanajuato</h3>

            {current ? (
              <>
                <div className="weather-card__main">
                  <strong>{Math.round(current.temperature_2m)}°C</strong>
                  <span>
                    {weatherCodeText[current.weather_code] || "Clima disponible"}
                  </span>
                </div>

                <div className="weather-card__stats">
                  <div>
                    <span>Viento</span>
                    <strong>{Math.round(current.wind_speed_10m)} km/h</strong>
                  </div>

                  <div>
                    <span>Humedad</span>
                    <strong>{current.relative_humidity_2m}%</strong>
                  </div>
                </div>

                <div className="weather-card__forecast">
                  <div>
                    <span>Hoy</span>
                    <strong>
                      {Math.round(daily.temperature_2m_max[0])}° /{" "}
                      {Math.round(daily.temperature_2m_min[0])}°
                    </strong>
                  </div>

                  <div>
                    <span>Mañana</span>
                    <strong>
                      {Math.round(daily.temperature_2m_max[1])}° /{" "}
                      {Math.round(daily.temperature_2m_min[1])}°
                    </strong>
                  </div>
                </div>
              </>
            ) : (
              <p className="weather-card__loading">
                Cargando clima de León, Guanajuato...
              </p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}

export default RouteMap;