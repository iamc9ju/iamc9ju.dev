import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WebTypes from "@/components/WebTypes";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Navbar />
      <Hero />
      <WebTypes />
      <Projects />
      <Technologies />
      <Footer />
    </main>
  );
}
