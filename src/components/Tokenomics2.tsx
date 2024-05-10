import { cn } from "@/lib/utils";
import Image from "next/image";
import ContainerLayout from "./ContainerLayout";
import { Rubik_Bubbles } from "next/font/google";

const rubik = Rubik_Bubbles({
  subsets: ["latin"],
  weight: "400",
});

const tokennomics = [
  {
    title: "Base Network Community Air Drop",
    description:
      "25% of the token supply is allocated to an air drop for one secret coin on Base Network community, which we’ll announce two days before launch, incentivizing early engagement with Hype Dog.",
    image: "/base-logo-in-blue.svg",
  },
  {
    title: "Fair Launch on Uniswap Pool",
    description:
      "55% of the token supply is allocated to a fair launch on Uniswap pool, with locked liquidity, ensuring fair access and pricing to all.",
    image: "/uniswap.svg",
  },
  {
    title: "Early Engagement/Early Investors",
    description:
      " 6% of the token supply is allocated as giveaways to our early engagement partners (2%), for bringing awareness and excitement to the Hype Dog project, along with our early investors (4%) who helped this project get off the ground.",
    image: "/money.svg",
  },
  {
    title: "Team Allocation",
    description:
      "9% of the token supply is allocated to the project's team members, rewarding their contributions to the creation, development and success of Hype Dog. Ownership of the contract will be relinquished after launch",
    image: "/fist.png",
  },
  {
    title: "Marketing",
    description:
      "5% of the token supply is allocated to cover any and all marketing costs.",
    image: "/checkmark-svgrepo-com.svg",
  },
];

const Tokenomics2 = () => {
  return (
    <div className="mt-10 relative bg-hero-gradient  overflow-hidden py-16 lg:py-36">
      <Image
        src="/wave (1).svg"
        height="100"
        width={5200}
        alt=""
        className="absolute w-full bottom-[0] translate-y-[30%] z-50"
      />
      <Image
        src="/wave (1).svg"
        height="100"
        width={5200}
        alt=""
        className="absolute w-full top-[0] -translate-y-[30%] z-50 rotate-180"
      />
      <ContainerLayout>
        <p
          className={cn(
            "mb-10 text-4xl md:text-5xl text-white",
            rubik.className
          )}
        >
          Tokenomics
        </p>
        <p className="my-10 text-white text-xl">
          <span className="font-bold text-[#FC5B62]">Token Supply:</span> A
          Tail-Wagging Total of 1,000,000,000,000 $HYPD Token will be released.
        </p>

        <p className="my-10 text-white text-2xl">
          Token Allocation: 80% of tokens are for fair launch and air drop.
        </p>

        <div className="flex flex-col gap-10 mt-10">
          {tokennomics.map((tokennomic) => (
            <div
              key={tokennomic.title}
              className="text-white flex flex-col md:flex-row gap-10 items-center"
            >
              <Image src={tokennomic.image} alt="" width="80" height="80" />
              <div className="text-lg max-w-[1000px] ">
                <p className={cn("text-2xl mb-3", rubik.className)}>
                  {tokennomic.title}
                </p>
                <p className="text-gray-300">{tokennomic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Tokenomics2;
