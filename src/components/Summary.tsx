import { cn } from "@/lib/utils";
import { Rubik_Bubbles } from "next/font/google";
import ContainerLayout from "./ContainerLayout";
import Link from "next/link";

const rubik = Rubik_Bubbles({
  subsets: ["latin"],
  weight: "400",
});

const Summary = () => {
  const style =
    "p-10 bg-[#091401] relative rounded-xl after:absolute after:left-4 after:top-4  after:right-4 md:after:-right-4 after:-bottom-4 after:-z-10 after:bg-[#e0e4ee] after:rounded-xl flex-";
  return (
    <div className="my-10 lg:my-20">
      <ContainerLayout>
        <div className={style + " bg-hypedog1 bg-no-repeat bg-right bg-cover"}>
          <div className="absolute inset-0 bg-cards-gradient rounded-xl"></div>
          <div className="relative z-20">
            <p
              className={cn(
                "text-3xl md:text-5xl  text-white mb-10",
                rubik.className
              )}
            >
              Summary
            </p>

            <p className="text-xl text-gray-300  leading-normal">
              Hype Dog aims to bring the fun back to the meme coin space, with
              our unique and purposely low quality marketing campaign, based on
              fake ads, fake celebrity endorsements, and fake $HYPD token
              history. We encourage our community to share all of the funny
              marketing materials that we create. Join the Hype Dog community
              today and get $HYPD!
            </p>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Summary;
