"use client";

import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AskMe from "./components/AskMe";
import Skills from "./components/Skills";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AskMe />
      <ContactFooter />
    </div>
  );
}