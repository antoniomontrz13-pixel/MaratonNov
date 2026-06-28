export const raceInfo = {
  name: "La Estelar",
  subtitle: "Carrera espacial · Pet Friendly",
  description:
    "Una carrera temática inspirada en el espacio, el tiempo y la energía de una experiencia interestelar.",

  date: "24 de octubre",
  time: "7:00 AM",
  location: "Parque Metropolitano de León",

  whatsappNumber: "524771331637",

  primaryButtonText: "Ver paquetes",
  secondaryButtonText: "Inscribirme por WhatsApp",
};

export const raceDistances = [
  "5K",
  "10K",
];

export const racePackages = [
  {
    name: "Paquete Básico",
    price: "$250",
    includes: [
      "Número de corredor",
      "Medalla",
      "Hidratación",
    ],
    whatsappMessage:
      "Hola, quiero información para inscribirme a La Estelar. Me interesa el Paquete Básico.",
  },
  {
    name: "Paquete Interestelar",
    price: "$350",
    includes: [
      "Número de corredor",
      "Playera",
      "Medalla",
      "Hidratación",
    ],
    whatsappMessage:
      "Hola, quiero información para inscribirme a La Estelar. Me interesa el Paquete Interestelar.",
  },
];

export const raceHighlights = [
  {
    title: "Distancias",
    value: raceDistances.join(" / "),
    description: "Rutas pensadas para corredores principiantes e intermedios.",
  },
  {
    title: "Experiencia",
    value: "Temática espacial",
    description: "Ambiente visual inspirado en el espacio, la energía y el tiempo.",
  },
  {
    title: "Pet Friendly",
    value: "Mascotas bienvenidas",
    description: "Una carrera para disfrutar también con tu compañero de cuatro patas.",
  },
  {
    title: "Ubicación",
    value: raceInfo.location,
    description: "Punto de encuentro ideal para una experiencia deportiva al aire libre.",
  },
];