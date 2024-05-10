"use client";

import { cn } from "@/lib/utils";
import ContainerLayout from "./ContainerLayout";
import Image from "next/image";

import { Rubik_Bubbles } from "next/font/google";

const rubik = Rubik_Bubbles({
  subsets: ["latin"],
  weight: "400",
});

const Tokenomics = () => {
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
        <div className="grid grid-cols-tokenomics justify-center items-center gap-5 lg:gap-10">
          <div className="py-20 pt-32 px-10 bg-[#e0e4ee] rounded-3xl text-center h-full">
            <p className={cn("text-6xl text-[#FC5B62] ", rubik.className)}>
              30%
            </p>
            <div className="text-xl mt-10">
              <p>Airdrop to Base Network Community Air Drop</p>
              <p className="mt-4">
                (The air drop will be to holders of{" "}
                <span className="text-[#FC5B62]">$BRETT</span> )
              </p>
            </div>
          </div>
          <div className="py-20 pt-32 px-10 bg-[#e0e4ee] rounded-3xl text-center h-full">
            <p className={cn("text-6xl text-[#FC5B62] ", rubik.className)}>
              50%
            </p>
            <div className="text-xl mt-10">
              <p>Fair Launch on Uniswap Pool</p>
              <p className="mt-4">(with locked liquidity)</p>
            </div>
          </div>
          <div className="py-20 pt-32 px-10 bg-[#e0e4ee] rounded-3xl text-center h-full">
            <p className={cn("text-6xl text-[#FC5B62] ", rubik.className)}>
              6%
            </p>
            <div className="text-xl mt-10">
              <p>Early Engagement/Early Investors</p>
            </div>
          </div>
          <div className="py-20 pt-32 px-10 bg-[#e0e4ee] rounded-3xl text-center h-full">
            <p className={cn("text-6xl text-[#FC5B62] ", rubik.className)}>
              9%
            </p>
            <div className="text-xl mt-10">
              <p>Team Allocation</p>
            </div>
          </div>
          <div className="py-20 pt-32 px-10 bg-[#e0e4ee] rounded-3xl text-center h-full">
            <p className={cn("text-6xl text-[#FC5B62] ", rubik.className)}>
              5%
            </p>
            <div className="text-xl mt-10">
              <p>Marketing</p>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Tokenomics;
