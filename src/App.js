import Contacts from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </>
  );
}