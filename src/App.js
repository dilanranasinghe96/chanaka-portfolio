import Contacts from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WhatsAppButton from "./components/WhatsAppButton";


export default function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
      <WhatsAppButton phoneNumber="+94702643632" />
    </>
  );
}