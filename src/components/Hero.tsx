import Image from "next/image";
import ContainerLayout from "./ContainerLayout";

import { Sedan } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const sedan = Sedan({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] border -top-32 flex items-center ">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="h-[150px] bg-white absolute w-full -bottom-[120px] -skew-y-3"></div>
        <Image
          src="/grass.jpg"
          alt=""
          width="1000"
          height="700"
          className=" object-cover h-full w-full"
        />
      </div>

      <ContainerLayout>
        <div className="flex gap-20 relative z-50 w-full items-center text-gray-200">
          <div className={cn("flex-[3]   ", sedan.className)}>
            <p className="text-4xl leading-relaxed">
              Have fun with HypeDog ($HYPD) <br /> The New Meme Coin Boss of The
              Base Network and get $HYPD to be part of our trip to the moon
            </p>

            <div className="mt-20 flex items-center gap-10 text-lg">
              <Link
                href=""
                className="py-2 px-8 border border-white rounded-md hover:scale-105 "
              >
                Buy Hype Dog
              </Link>
              <Link
                href=""
                className="py-2 px-8 bg-[#0f1907] border border-[#0f1907] rounded-md hover:scale-105"
              >
                View on Explorer
              </Link>
            </div>
          </div>
          <div className="flex-[2]">
            <Image
              src="/image1-transparent.png"
              alt=""
              height="400"
              width="500"
              className="object-fit"
            />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Hero;
