"use client";

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
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const video = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // video?.current?.volume = 0.3;

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={cn(
        "py-5 top-0 text-white text-lg font-light z-[100] relative  ",
        scrollPosition > 700 &&
          "sticky bg-hero-gradient backdrop-blur-md transition-all animate-in"
      )}
    >
      <ContainerLayout>
        <div className="flex justify-between items-center">
          <p
            className={cn(
              "text-xl md:text-3xl opacity-0 md:opacity-100",
              rubik.className
            )}
          >
            Hype Dog
          </p>
          <div className="lg:hidden relative -left-8 flex flex-col items-center">
            <video
              src="/hd-log.MOV"
              autoPlay
              loop
              className="max-w-[130px] md:max-w-[150px] rounded-lg"
              muted
              // ref={video}
            ></video>
            <p className={cn("text-xl md:text-3xl", rubik.className)}>
              Hype Dog
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-14">
            <Link href="/" className="hover:underline hover:underline-offset-4">
              Home
            </Link>
            <Link
              href="#about"
              className="hover:underline hover:underline-offset-4"
            >
              About
            </Link>
            <div className="hidden md:block">
              <video
                src="/hd-log.MOV"
                autoPlay
                loop
                muted
                className="max-w-[130px] md:max-w-[150px] rounded-lg"
              ></video>
            </div>
            <Link
              href="#tokenomics"
              className="hover:underline hover:underline-offset-4"
            >
              Tokenomics
            </Link>
            <Link
              href="#buy"
              className="hover:underline hover:underline-offset-4"
            >
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
              <SheetContent className="min-w-[100vw]">
                <div className="flex flex-col items-center gap-14 text-white p-20  min-w-screen">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="hover:underline hover:underline-offset-4"
                    >
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#about"
                      className="hover:underline hover:underline-offset-4"
                    >
                      About
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#tokenomics"
                      className="hover:underline hover:underline-offset-4"
                    >
                      Tokenomics
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="hover:underline hover:underline-offset-4"
                    >
                      Buy
                    </Link>
                  </SheetClose>
                </div>
                <div className="text-white justify-center flex items-center gap-3">
                  <SheetClose asChild>
                    <Link
                      href="https://x.com/HypeDog_Offical?t=WxydCUHBw0TOY8E65ygK3A&s=09"
                      target="_blank"
                      className="hover:scale-105 hover:opacity-80"
                    >
                      <FaXTwitter />
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="https://www.facebook.com/hypedog.offical"
                      target="_blank"
                      className="hover:scale-105 hover:opacity-80"
                    >
                      <Facebook strokeWidth={1.75} />
                    </Link>
                  </SheetClose>

                  <div className="h-[28px] w-[0.5px] bg-gray-100"></div>
                  <SheetClose asChild>
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
                  <SheetClose asChild>
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
