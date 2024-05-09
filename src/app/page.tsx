import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Media from "@/components/Media";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Tokenomics />
      <Media />
      <Footer />
    </div>
  );
}
