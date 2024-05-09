import Link from "next/link";
import ContainerLayout from "./ContainerLayout";
import { Rubik_Bubbles } from "next/font/google";
import { cn } from "@/lib/utils";

const rubik = Rubik_Bubbles({
  subsets: ["latin"],
  weight: "400",
});

const whys = [
  "🎦 The History of Hype Dog (fake documentary, two parts)",
  "🎦 Hype Dog: The True Hollywood Story (fake documentary, three parts)",
  "🎦 Bad Celebrity Deep Fakes (fake celebrity endorsements and beefs)",
  "📸 Hype Dog Global Ads (fake still ads around the world)",
  "🎦 Hype Dog GIF Mashups (30 second long GIF mashups)",
  "📸 Hype Dog Logos (logo and animated logo)",
  "📸 The Rumor Mill (memes with fake rumors about Hype Dog)",
];

const Media = () => {
  const style =
    "p-10 bg-[#091401] relative rounded-xl after:absolute after:left-4 after:top-4  after:right-4 md:after:-right-4 after:-bottom-4 after:-z-10 after:bg-[#e0e4ee] after:rounded-xl flex-";

  return (
    <div className="my-10 md:my-20">
      <ContainerLayout>
        <div className="flex gap-10 flex-col lg:flex-ro">
          <div className={style}>
            <p
              className={cn(
                "my-8 text-white text-2xl md:text-3xl max-w-[1000px]",
                rubik.className
              )}
            >
              Unique Marketing Materials
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
      </ContainerLayout>
    </div>
  );
};

export default Media;
