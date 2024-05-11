import Link from "next/link";
import ContainerLayout from "./ContainerLayout";
import { Rubik_Bubbles } from "next/font/google";

import { cn } from "@/lib/utils";

const rubik = Rubik_Bubbles({
  subsets: ["latin"],
  weight: "400",
});

const whys = [
  "⭐ No other meme coin has more fake celebrity endorsements than Hype Dog",
  "🐄 No other meme coin has started more fake celebrity beefs than Hype Dog",
  "🚀 No other meme coin makes Elon Musk appear more conflicted than Hype Dog",
  "🌎 No other meme coin pretends to advertise on more global landmarks than Hype Dog",
  "🐶 No other meme coin has a better fake history and documentary than Hype Dog",
];

const About = () => {
  const style =
    "p-10 bg-[#091401 relative rounded-xl after:absolute after:left-4 after:top-4  after:right-4 md:after:-right-4 after:-bottom-4 after:-z-10 after:bg-[#e0e4ee] after:rounded-xl relative";
  // const style =
  //   "p-10 bg-[#091401] relative rounded-lg after:absolute after:left-4 after:top-4  after:right-4 md:after:-right-4 after:-bottom-4 after:-z-10 after:bg-[#566e40] after:rounded-lg flex-";
  return (
    <div className="my-8 mt-0 " id="about">
      <ContainerLayout>
        <div className="flex gap-10 flex-col lg:flex-ro">
          <div
            className={
              style + " bg-hypedog2 bg-no-repeat bg-righ bg-fixed bg-cover"
            }
          >
            <div className="absolute inset-0 bg-cards-gradient rounded-xl"></div>
            <div className="relative z-20">
              <p
                className={cn(
                  "text-3xl md:text-5xl  text-white mb-10",
                  rubik.className
                )}
              >
                About Hype Dog
              </p>

              <p className="text-xl text-gray-300  leading-normal">
                Hype Dog is designed to capture the essence of meme culture with
                its unique, purposely low quality, funny marketing campaign.
                Built on the Base Network, Hype Dog will be an 80% fair
                launch/air drop, with relinquished contract, doxxed owner
                wallets, and locked liquidity. No rug pulls here! We are 100%
                open, and we always will be!
              </p>

              <p className="text-white mt-14 text-2xl ">
                Token Contract address
                <span className="block mt-2 text-gray-400">
                  Coming soon ......
                </span>
              </p>

              <Link
                href=""
                className="py-2 px-5 lg:px-8 border border-white rounded-md hover:scale-105  w-fit mt-10 text-white inline-block"
              >
                Buy Hype Dog
              </Link>
            </div>
          </div>
          <div
            className={
              style + " bg-hypedog2 bg-no-repeat bg-righ bg-fixed bg-cover"
            }
          >
            <div className="absolute inset-0 bg-cards-gradient rounded-xl"></div>
            <div className="relative z-20">
              <p
                className={cn(
                  "my-8 text-white text-2xl md:text-3xl",
                  rubik.className
                )}
              >
                Why is Hype Dog the best?
              </p>

              <ul className="flex flex-col gap-5 list-inside">
                {whys.map((why, i) => (
                  <li
                    key={i}
                    className="text-white flex items-center gap-2 text-lg "
                  >
                    <span>{why}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default About;
