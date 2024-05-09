import About from "@/components/About";
import ComingSoon from "@/components/ComingSoon";
import ContainerLayout from "@/components/ContainerLayout";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Media from "@/components/Media";
import Summary from "@/components/Summary";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Tokenomics />
      <Media />
      <ContainerLayout>
        <div className="grid grid-cols-coming-soon gap-10">
          <ComingSoon text="Locked Liquidity" />
          <ComingSoon text="Relinquished Ownership" />
          <ComingSoon text="Founding Team Wallets" />
        </div>
      </ContainerLayout>
      <Summary />
      <Footer />
    </div>
  );
}
