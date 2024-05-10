import Link from "next/link";
import ContainerLayout from "./ContainerLayout";
import { Twitter, Facebook } from "lucide-react";
import { AiOutlineTikTok } from "react-icons/ai";
import { BiLogoTelegram, BiMenu } from "react-icons/bi";

import { Rubik_Bubbles } from "next/font/google";

import { cn } from "@/lib/utils";

const rubik = Rubik_Bubbles({
  subsets: ["latin"],
  weight: "400",
});

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <div
      className={cn(
        "py-5 relative stick top-0 text-white text-lg font-light z-50"
      )}
    >
      <ContainerLayout>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6 md:gap-10">
            <video
              src="/hd-log.MOV"
              autoPlay
              loop
              muted
              className="max-w-[80px] md:max-w-[100px] rounded-lg"
            ></video>
            <p className={cn("text-3xl", rubik.className)}>HypeDog</p>
          </div>
          <div className="hidden lg:flex items-center gap-14">
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

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://x.com/HypeDog_Offical?t=WxydCUHBw0TOY8E65ygK3A&s=09"
              target="_blank"
              className="hover:scale-105 hover:opacity-80"
            >
              <FaXTwitter />
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

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <BiMenu size={28} className="cursor-pointer" />
              </SheetTrigger>
              <SheetContent className="min-w-screen">
                <div className="flex flex-col items-center gap-14 text-white p-20">
                  <SheetClose>
                    <Link
                      href="/"
                      className="hover:underline hover:underline-offset-4"
                    >
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose>
                    <Link
                      href="/"
                      className="hover:underline hover:underline-offset-4"
                    >
                      About
                    </Link>
                  </SheetClose>
                  <SheetClose>
                    <Link
                      href="/"
                      className="hover:underline hover:underline-offset-4"
                    >
                      Tokenomics
                    </Link>
                  </SheetClose>
                  <SheetClose>
                    <Link
                      href="/"
                      className="hover:underline hover:underline-offset-4"
                    >
                      Buy
                    </Link>
                  </SheetClose>
                </div>
                <div className="text-white justify-center flex items-center gap-3">
                  <SheetClose>
                    <Link
                      href="https://x.com/HypeDog_Offical?t=WxydCUHBw0TOY8E65ygK3A&s=09"
                      target="_blank"
                      className="hover:scale-105 hover:opacity-80"
                    >
                      <FaXTwitter />
                    </Link>
                  </SheetClose>
                  <SheetClose>
                    <Link
                      href="https://www.facebook.com/hypedog.offical"
                      target="_blank"
                      className="hover:scale-105 hover:opacity-80"
                    >
                      <Facebook strokeWidth={1.75} />
                    </Link>
                  </SheetClose>

                  <div className="h-[28px] w-[0.5px] bg-gray-100"></div>
                  <SheetClose>
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
                  </SheetClose>
                  <SheetClose>
                    <Link
                      href="https://t.me/+Hcm5jDYfkvMxOWI9"
                      target="_blank"
                      className="hover:scale-105 hover:opacity-80"
                    >
                      <BiLogoTelegram fill="white" size={27} />
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Header;
