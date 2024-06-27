import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Link } from "react-scroll";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Link to="about" smooth={true} duration={500}>
        <About />
      </Link>

      <Link to="portfolio" smooth={true} duration={500}>
        <Portfolio />
      </Link>

      <Link to="skills" smooth={true} duration={500}>
        <Skills />
      </Link>

      <Link to="contact" smooth={true} duration={500}>
        <Contact />
      </Link>

      <SocialLinks />
    </div>
  );
};

export default App;
