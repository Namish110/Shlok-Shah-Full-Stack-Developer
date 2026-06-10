import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Faq from "../components/Faq";
import ClientReview from "../components/ClientReview";
import Certificates from "../components/Certificates";
import Contact from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home({ onNavigate }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let raf = 0;
    const cursor = document.querySelector(".cursor-ring");
    let magnets = document.querySelectorAll(".magnetic");
    const isTouch = window.matchMedia("(hover: none)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        document.documentElement.style.setProperty("--mx", x.toFixed(3));
        document.documentElement.style.setProperty("--my", y.toFixed(3));
        if (cursor) {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        }
        magnets.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const dx = e.clientX - (rect.left + rect.width / 2);
          const dy = e.clientY - (rect.top + rect.height / 2);
          const dist = Math.hypot(dx, dy);
          const strength = dist < 120 ? (1 - dist / 120) * 10 : 0;
          el.style.transform = `translate(${dx * 0.03 * strength}px, ${dy * 0.03 * strength}px)`;
        });
        raf = 0;
      });
    };
    const onScroll = () => {
      const max = 1200;
      const value = Math.min(window.scrollY / max, 1);
      document.documentElement.style.setProperty("--scroll", value.toFixed(3));
    };
    if (!isTouch && !prefersReducedMotion) {
      window.addEventListener("mousemove", onMove, { passive: true });
    } else {
      document.documentElement.style.setProperty("--mx", "0");
      document.documentElement.style.setProperty("--my", "0");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const t = setTimeout(() => setLoading(false), 1200);
    const refresh = setInterval(() => {
      magnets = document.querySelectorAll(".magnetic");
    }, 1000);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
      clearInterval(refresh);
      if (raf) cancelAnimationFrame(raf);
      magnets.forEach((el) => {
        el.style.transform = "";
      });
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader">
          <div className="text-center">
            <div className="text-sm uppercase tracking-[0.3em] text-muted">Booting Systems</div>
            <div className="bar">
              <span />
            </div>
          </div>
        </div>
      )}
      <div className="parallax-layer layer-a" aria-hidden="true" />
      <div className="parallax-layer layer-b" aria-hidden="true" />
      <div className="data-stream" aria-hidden="true" />
      <div className="waveform" aria-hidden="true">
        <div className="wave" />
      </div>
      <div className="cursor-ring" aria-hidden="true" />
      <main id="main-content" className="scroll-snap">
        <Hero onNavigate={onNavigate} />
        <Skills />
        <Experience />
        <Projects />
        <Faq />
        <ClientReview />
        <Certificates />
        <Contact />
        <Footer onNavigate={onNavigate} />
      </main>
    </>
  );
}

