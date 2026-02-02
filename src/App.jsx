import React from "react";
import Header from "./components/Header";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
