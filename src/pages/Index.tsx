import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import ShotOfTheDay from "@/components/ShotOfTheDay";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Events />
      <Reviews />
      <Location />
      <Footer />
      <MobileCTA />
      <ShotOfTheDay />
    </div>
  );
};

export default Index;
