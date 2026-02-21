import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";

import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      
      <Reviews />
      <Location />
      <Footer />
      <MobileCTA />
      
    </div>
  );
};

export default Index;
