import React, { useRef } from "react";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Project";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import Navbar from "./Menu";

function SinglePage() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, skillsRef, projectsRef, resumeRef, contactRef }}
      />

      <section ref={homeRef} style={{ minHeight: "100vh" }}>
        <Home />
      </section>
      <section ref={skillsRef} style={{ minHeight: "100vh" }}>
        <Skills />
      </section>
      <section ref={resumeRef} style={{ minHeight: "100vh" }}>
        <Resume />
      </section>
      <section ref={projectsRef} style={{ minHeight: "100vh" }}>
        <Projects />
      </section>
      
      <section ref={contactRef} style={{ minHeight: "100vh" }}>
        <Contact />
      </section>
    </>
  );
}

export default SinglePage;
