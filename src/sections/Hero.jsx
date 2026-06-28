import React, { useEffect, useRef } from "react";
import { splitText } from "animejs";
import { raceInfo, raceDistances } from "../data/raceData";
function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const headlineRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const splitOptions = {
      chars: `<span class="char-3d" style="--char-index:{i}">
        <em class="face face-top">{value}</em>
        <em class="face-front">{value}</em>
        <em class="face face-bottom">{value}</em>
      </span>`,
      accessible: true,
    };

    const titleSplit = splitText(titleRef.current, splitOptions);
    const subtitleSplit = splitText(subtitleRef.current, splitOptions);

    function runAnimation() {
      if (!headlineRef.current) return;

      headlineRef.current.classList.remove("is-animating-3d");

      void headlineRef.current.offsetWidth;

      headlineRef.current.classList.add("is-animating-3d");

      window.setTimeout(() => {
        headlineRef.current?.classList.remove("is-animating-3d");
      }, 1900);
    }

    const firstRun = window.setTimeout(runAnimation, 700);
    const interval = window.setInterval(runAnimation, 5000);

    return () => {
      window.clearTimeout(firstRun);
      window.clearInterval(interval);
      titleSplit?.revert?.();
      subtitleSplit?.revert?.();
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    const content = contentRef.current;

    if (!hero || !video || !content) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let ticking = false;

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    function updateParallax() {
      const rect = hero.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const progress = clamp(-rect.top / viewportHeight, 0, 1);

      const videoY = progress * 220;
      const contentY = progress * -120;
      const contentOpacity = 1 - progress * 0.65;

      video.style.transform = `translate3d(0, ${videoY}px, 0) scale(1.18)`;
      content.style.transform = `translate3d(0, ${contentY}px, 0)`;
      content.style.opacity = String(contentOpacity);
      hero.style.setProperty("--hero-scroll", progress.toString());

      ticking = false;
    }

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    updateParallax();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const whatsappMessage = encodeURIComponent(
    `Hola, quiero información para inscribirme a ${raceInfo.name}.`
  );

  const whatsappUrl = `https://wa.me/${raceInfo.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section ref={heroRef} className="hero" id="inicio">
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/loop.mp4" type="video/mp4" />
      </video>

      <div className="hero__video-overlay" aria-hidden="true"></div>

      <div className="hero__orb hero__orb--one"></div>
      <div className="hero__orb hero__orb--two"></div>

      <div ref={contentRef} className="container hero__content animate-fade-up">
        <p className="hero__eyebrow">
          Carrera temática · {raceDistances.join(" / ")}
        </p>

        <div ref={headlineRef} className="hero__headline">
          <h1 ref={titleRef} className="hero__title js-split-3d">
            {raceInfo.name}
          </h1>

          <p ref={subtitleRef} className="hero__subtitle js-split-3d">
            {raceInfo.subtitle}
          </p>
        </div>

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
