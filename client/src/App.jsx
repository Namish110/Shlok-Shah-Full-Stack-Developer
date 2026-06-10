import { useCallback, useEffect, useState } from "react";
import Seo from "./components/Seo";
import Navbar from "./components/Navbar";
import SectionPage from "./pages/SectionPage";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Faq from "./components/Faq";
import ClientReview from "./components/ClientReview";
import Certificates from "./components/Certificates";
import Contact from "./components/ContactForm";

const routePaths = new Set(["/", "/about", "/skills", "/experience", "/projects", "/faq", "/reviews", "/certificates", "/contact"]);

const getPath = () => (routePaths.has(window.location.pathname) ? window.location.pathname : "/");

export default function App() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onPopState = () => setPath(getPath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = useCallback((nextPath) => {
    if (nextPath === getPath()) return;
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const content = (() => {
    switch (path) {
      case "/about":
        return <AboutPage onNavigate={navigate} />;
      case "/skills":
        return (
          <SectionPage
            kicker="Stack"
            title="The tools and technologies I use"
            description="A focused stack lets me ship faster without losing quality. These are the technologies I lean on for frontend, backend, data, and delivery."
            primaryActionLabel="Back to Home"
            primaryActionHref="/"
            secondaryActionLabel="View Projects"
            secondaryActionHref="/projects"
            onNavigate={navigate}
          >
            <Skills />
          </SectionPage>
        );
      case "/experience":
        return (
          <SectionPage
            kicker="Experience"
            title="Professional work that shaped my approach"
            description="I’ve worked on real-world systems where reliability, performance, and clarity matter. This page summarizes the journey and responsibilities that shaped my craft."
            primaryActionLabel="Back to Home"
            primaryActionHref="/"
            secondaryActionLabel="See Projects"
            secondaryActionHref="/projects"
            onNavigate={navigate}
          >
            <Experience />
          </SectionPage>
        );
      case "/projects":
        return (
          <SectionPage
            kicker="Projects"
            title="Selected work and product builds"
            description="A look at the applications and solutions I’ve worked on, with an emphasis on useful features, clean UX, and practical engineering."
            primaryActionLabel="Back to Home"
            primaryActionHref="/"
            secondaryActionLabel="Contact"
            secondaryActionHref="/contact"
            onNavigate={navigate}
          >
            <Projects />
          </SectionPage>
        );
      case "/faq":
        return (
          <SectionPage
            kicker="FAQ"
            title="Quick answers to common questions"
            description="If you’re trying to understand how I work, what I can help with, or how to start a conversation, this section should make it easy."
            primaryActionLabel="Back to Home"
            primaryActionHref="/"
            secondaryActionLabel="Contact"
            secondaryActionHref="/contact"
            onNavigate={navigate}
          >
            <Faq />
          </SectionPage>
        );
      case "/reviews":
        return (
          <SectionPage
            kicker="Reviews"
            title="What collaboration feels like"
            description="Client feedback matters because it reflects the way I show up: consistently, thoughtfully, and with an eye toward trust."
            primaryActionLabel="Back to Home"
            primaryActionHref="/"
            secondaryActionLabel="View Contact"
            secondaryActionHref="/contact"
            onNavigate={navigate}
          >
            <ClientReview />
          </SectionPage>
        );
      case "/certificates":
        return (
          <SectionPage
            kicker="Certificates"
            title="Credentials and learning milestones"
            description="A snapshot of the training and achievements that support my technical background and ongoing growth."
            primaryActionLabel="Back to Home"
            primaryActionHref="/"
            secondaryActionLabel="See Projects"
            secondaryActionHref="/projects"
            onNavigate={navigate}
          >
            <Certificates />
          </SectionPage>
        );
      case "/contact":
        return (
          <SectionPage
            kicker="Contact"
            title="Let’s talk about your next web project"
            description="I’m open to full-time roles, freelance projects, and collaborative builds where reliability and quality matter."
            primaryActionLabel="Back to Home"
            primaryActionHref="/"
            secondaryActionLabel="About Me"
            secondaryActionHref="/about"
            onNavigate={navigate}
          >
            <Contact />
          </SectionPage>
        );
      case "/":
      default:
        return <Home onNavigate={navigate} />;
    }
  })();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Seo currentPath={path} />
      <Navbar currentPath={path} onNavigate={navigate} />
      {content}
    </>
  );
}
