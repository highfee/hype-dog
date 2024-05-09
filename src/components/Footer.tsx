import Image from "next/image";
import Link from "next/link";
import ContainerLayout from "./ContainerLayout";
import { Twitter, Facebook } from "lucide-react";
import { AiOutlineTikTok } from "react-icons/ai";
import { BiLogoTelegram, BiMenu } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="mt-10 bg-footer-gradient py-20 text-white text-center text-lg">
      <ContainerLayout>
        <div className="flex gap-4 justify-center">
          <p>Copyright &copy; 2024 &nbsp; &nbsp; Contact: &nbsp; &nbsp; </p>
          <div className="hidden lg:flex items-center gap-3">
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
        <p className="my-5 max-w-[800px] mx-auto ">
          <strong className=" font-bold">Financial Disclaimer:</strong> Hype Dog
          is a meme cryptocurrency project with no intrinsic value or
          expectation of financial return. The Hype Dog project is 100%
          community led and there is no formal team or roadmap. The token is
          completely for entertainment purposes only.
        </p>

        <Image
          src="/image1-transparent.png"
          alt=""
          width="100"
          height="100"
          className="block mx-auto"
        />
      </ContainerLayout>
    </div>
  );
};

export default Footer;
