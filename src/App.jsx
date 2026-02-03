import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;
