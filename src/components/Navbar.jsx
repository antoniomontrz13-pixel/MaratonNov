import React, { useEffect, useRef, useState } from "react";

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

function smoothScrollTo(targetY, duration = 1000, onComplete) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(animation);
    } else if (onComplete) {
      onComplete();
    }
  }

  requestAnimationFrame(animation);
}

function Navbar() {
  const [activeItem, setActiveItem] = useState("inicio");
  const isProgrammaticScroll = useRef(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;

        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target?.id) {
          setActiveItem(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.05, 0.2, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const activeIndex = navItems.findIndex((item) => item.id === activeItem);

  function handleNavClick(event, item) {
    event.preventDefault();

    const target = document.getElementById(item.id);

    if (!target) return;

    isProgrammaticScroll.current = true;
    setActiveItem(item.id);

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;

    smoothScrollTo(targetPosition, 1000, () => {
      setTimeout(() => {
        isProgrammaticScroll.current = false;
        setActiveItem(item.id);
      }, 120);
    });

    window.history.replaceState(null, "", item.href);
  }

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
            onClick={(event) => handleNavClick(event, item)}
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