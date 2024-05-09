import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Tokenomics />
      <Footer />
    </div>
  );
}
