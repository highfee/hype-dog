import About from "@/components/About";
import ComingSoon from "@/components/ComingSoon";
import ContainerLayout from "@/components/ContainerLayout";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Media from "@/components/Media";
import Summary from "@/components/Summary";
import Tokenomics from "@/components/Tokenomics";
import Tokenomics2 from "@/components/Tokenomics2";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      {/* <Tokenomics /> */}
      <Tokenomics2 />
      <Media />
      <ContainerLayout>
        <div className="grid grid-cols-coming-soon gap-10">
          <ComingSoon
            title="Locked Liquidity"
            subtitle="third party provider for proof of locked liquidity"
            comingSoon={false}
          />
          <ComingSoon
            title="Relinquished Ownership"
            subtitle="third party provider for proof of contract relinquishment"
            comingSoon={false}
          />
          <ComingSoon
            title="Founding Team Wallets"
            subtitle="There will be two owner wallets, which will be locked for 60 days, each having 4.5% of total supply. There are only two wallets, but more than two founder team members who have their tokens managed from these wallets, including other team members, family and friends. We believe in 100% transparency"
            comingSoon={true}
          />
        </div>
      </ContainerLayout>
      <Summary />
      <Footer />
    </div>
  );
}
