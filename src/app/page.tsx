import Navbar from "@/components/index/Navbar";
import Benefits from "@/components/index/Benefits";
import CallToAction from "@/components/index/CallToAction";
import FeaturedItems from "@/components/index/FeaturedItems";
import Footer from "@/components/index/Footer";
import Hero from "@/components/index/Hero";
import HowItWorks from "@/components/index/HowItWorks";



export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <FeaturedItems />

      <HowItWorks />
      <Benefits />

      <CallToAction />

      <Footer />

    </div>
  );
}
