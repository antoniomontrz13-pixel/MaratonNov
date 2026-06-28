import React, { useState } from "react";

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 11.5L12 4l9 7.5" />
      <path d="M5.5 10.5V20h13v-9.5" />
      <path d="M9.5 20v-6h5v6" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 8h16v12H4z" />
      <path d="M4 8l8 5 8-5" />
      <path d="M8 8V6.5A2.5 2.5 0 0 1 10.5 4h3A2.5 2.5 0 0 1 16 6.5V8" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 19c4-8 8 2 12-10" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="9" r="2" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 11.5a7.5 7.5 0 0 1-11.2 6.5L4 19.5l1.5-4.4A7.5 7.5 0 1 1 20 11.5z" />
      <path d="M9 10.5h6" />
      <path d="M9 13.5h4" />
    </svg>
  );
}

const navItems = [
  {
    id: "inicio",
    label: "Inicio",
    href: "#inicio",
    icon: <HomeIcon />,
  },
  {
    id: "paquetes",
    label: "Paquetes",
    href: "#paquetes",
    icon: <PackageIcon />,
  },
  {
  id: "ruta",
  label: "Ubicación",
  href: "#ruta",
  icon: <RouteIcon />,
  },
  {
    id: "contacto",
    label: "Contacto",
    href: "#contacto",
    icon: <ContactIcon />,
  },
];

function Navbar() {
  const [activeItem, setActiveItem] = useState("inicio");

  const activeIndex = navItems.findIndex((item) => item.id === activeItem);

  return (
    <header className="bottom-nav" aria-label="Navegación principal">
      <nav
        className="bottom-nav__bar"
        style={{
          "--active-index": activeIndex,
          "--items-count": navItems.length,
        }}
      >
        <span className="bottom-nav__indicator" aria-hidden="true"></span>

        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`bottom-nav__item ${
              activeItem === item.id ? "is-active" : ""
            }`}
            onClick={() => setActiveItem(item.id)}
            aria-current={activeItem === item.id ? "page" : undefined}
          >
            <span className="bottom-nav__icon">{item.icon}</span>
            <span className="bottom-nav__label">{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;