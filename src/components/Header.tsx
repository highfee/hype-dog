import Link from "next/link";
import ContainerLayout from "./ContainerLayout";
import { Twitter, Facebook } from "lucide-react";
import { AiOutlineTikTok } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";

import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <div className={cn("py-5 sticky top-0 text-white text-lg font-light z-50")}>
      <ContainerLayout>
        <div className="flex justify-between items-center">
          <video
            src="/hd-log.MOV"
            autoPlay
            loop
            muted
            className="max-w-[100px] rounded-lg"
          ></video>
          <div className="flex items-center gap-14">
            <Link href="/" className="hover:underline hover:underline-offset-4">
              Home
            </Link>
            <Link href="/" className="hover:underline hover:underline-offset-4">
              About
            </Link>
            <Link href="/" className="hover:underline hover:underline-offset-4">
              Tokenomics
            </Link>
            <Link href="/" className="hover:underline hover:underline-offset-4">
              Buy
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://x.com/HypeDog_Offical?t=WxydCUHBw0TOY8E65ygK3A&s=09"
              target="_blank"
              className="hover:scale-105 hover:opacity-80"
            >
              <Twitter strokeWidth={1.75} />
            </Link>
            <Link
              href="https://www.facebook.com/hypedog.offical"
              target="_blank"
              className="hover:scale-105 hover:opacity-80"
            >
              <Facebook strokeWidth={1.75} />
            </Link>

            <div className="h-[28px] w-[0.5px] bg-gray-100"></div>

            <Link
              href="https://tiktok.com/@hypedogofficial"
              target="_blank"
              className="hover:scale-105 hover:opacity-80"
            >
              <AiOutlineTikTok
                stroke="white"
                fill="transparent"
                strokeWidth={40}
                size={27}
              />
            </Link>
            <Link
              href="https://t.me/+Hcm5jDYfkvMxOWI9"
              target="_blank"
              className="hover:scale-105 hover:opacity-80"
            >
              <BiLogoTelegram fill="white" size={27} />
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Header;
