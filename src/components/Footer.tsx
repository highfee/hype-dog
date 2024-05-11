import Image from "next/image";
import Link from "next/link";
import ContainerLayout from "./ContainerLayout";
import { Twitter, Facebook } from "lucide-react";
import { AiOutlineTikTok } from "react-icons/ai";
import { BiLogoTelegram, BiMenu } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-10 bg-[#091401] pt-28 pb-16  text-white relative overflow-hidden">
      <Image
        src="/wave (1).svg"
        height="50"
        width="2000"
        alt=""
        className="absolute  top-0  -translate-y-[40%] z-50 rotate-180 min-w-full h-[80px"
      />
      <ContainerLayout>
        <div className="flex flex-col lg:flex-row gap-10  pl0 lg:pl-0 text-base">
          <div className="flex-1 flex flex-col gap-5 justify-start ">
            <Image
              src="/image1-transparent.svg"
              alt=""
              height="140"
              width="140"
            />
            <p>Copyright © 2024</p>
          </div>
          <div className="flex-1">
            <p className="text-2xl mb-5">Our Links</p>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="hover:underline hover:underline-offset-4"
              >
                Home
              </Link>
              <Link
                href="/"
                className="hover:underline hover:underline-offset-4"
              >
                About
              </Link>
              <Link
                href="/"
                className="hover:underline hover:underline-offset-4"
              >
                Tokenomics
              </Link>
              <Link
                href="/"
                className="hover:underline hover:underline-offset-4"
              >
                Buy
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-2xl mb-5">Our Socials</p>
            <div className="flex flex-col gap-4">
              <Link
                href="https://x.com/HypeDog_Offical?t=WxydCUHBw0TOY8E65ygK3A&s=09"
                target="_blank"
                className="hover:scale-105 hover:opacity-80 flex gap-3 items-center"
              >
                <FaXTwitter /> X
              </Link>
              <Link
                href="https://www.facebook.com/hypedog.offical"
                target="_blank"
                className="hover:scale-105 hover:opacity-80 flex gap-3 items-center"
              >
                <Facebook strokeWidth={1.75} />
                Facebook
              </Link>

              <Link
                href="https://tiktok.com/@hypedogofficial"
                target="_blank"
                className="hover:scale-105 hover:opacity-80 flex gap-3 items-center"
              >
                <AiOutlineTikTok
                  stroke="white"
                  fill="transparent"
                  strokeWidth={40}
                  size={27}
                />
                TikTok
              </Link>
              <Link
                href="https://t.me/+Hcm5jDYfkvMxOWI9"
                target="_blank"
                className="hover:scale-105 hover:opacity-80 flex gap-3 items-center"
              >
                <BiLogoTelegram fill="white" size={27} />
                Telegram
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-2xl mb-5">Financial Disclaimer</p>
            <p>
              Hype Dog is a meme cryptocurrency project with no intrinsic value
              or expectation of financial return. The Hype Dog project is 100%
              community led and there is no formal team or roadmap. The token is
              completely for entertainment purposes only.
            </p>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Footer;
