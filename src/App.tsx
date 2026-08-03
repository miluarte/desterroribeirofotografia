import "./App.css";
import About from "./components/About/About";
import AnnouncementBar from "./components/AnnouncementBar/AnnouncementBar";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
