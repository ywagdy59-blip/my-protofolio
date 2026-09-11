import { Route, Routes } from "react-router-dom";

import Hero from "./companint/hero";
import About from "./companint/about";
import Projects from "./companint/projects";
import Skills from "./companint/skills";
import Navbar from "./companint/navbar";
import Contact from "./companint/contact";

function AllSections() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllSections />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
