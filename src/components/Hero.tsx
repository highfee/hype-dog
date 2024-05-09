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
    <div className="relative pt-36 md:pt-52 pb-20 md:pb-40 -top-32 flex items-center bg-black ">
      <Image
        src="/wave (1).svg"
        height="200"
        width={5200}
        alt=""
        className="absolute w-full bottom-[0] z-50"
      />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <Image
          src="/grass.jpg"
          alt=""
          width="1000"
          height="700"
          className=" object-cover h-full w-full hidden lg:block"
        />
        <Image
          src="/image1-transparent.png"
          alt=""
          width="1000"
          height="700"
          className=" object-cover h-full w-full  lg:hidden"
        />
      </div>

      <ContainerLayout>
        <div className="flex gap-20 relative z-50 w-full items-center text-gray-200">
          <div className={cn("flex-[3]   ", sedan.className)}>
            <p className="text-2xl lg:text-4xl md:leading-relaxed bg-black/50 lg:bg-transparent p-4 rounded-lg lg:p-0">
              Introducing Hype Dog <br /> The New Boss of the Base Network Get
              $HYPD and be part of our journey to the moon!
            </p>

            <div className="mt-14 lg:mt-20 flex   md:items-center gap-5 md:gap-10 md:text-lg">
              <Link
                href=""
                className="py-2 px-5 lg:px-8 border border-white rounded-md hover:scale-105  w-fit"
              >
                Buy Hype Dog
              </Link>
              <Link
                href=""
                className="py-2 px-5 lg:px-8 bg-[#0f1907] border border-[#0f1907] rounded-md hover:scale-105 w-fit"
              >
                View on Explorer
              </Link>
            </div>
          </div>
          <div className="flex-[2] hidden lg:block ">
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
