import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AskMe from "./components/AskMe";
import Skills from "./components/Skills";
import ContactFooter from "./components/ContactFooter";

export default function Home() {

  return (
    <>
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <AskMe /> */}
      <ContactFooter />
    </>
  )
}