import { cn } from "@/lib/utils";
import { Rubik_Bubbles } from "next/font/google";

const rubik = Rubik_Bubbles({
  subsets: ["latin"],
  weight: "400",
});

const ComingSoon = ({
  title,
  subtitle,
  comingSoon,
}: {
  title: string;
  subtitle: string;
  comingSoon: boolean;
}) => {
  return (
    <div className="bg-[#313D34] py-12 rounded-2xl grid place-items-center text-white text-center px-8">
      <div>
        <div className={cn("text-3xl", rubik.className)}>{title}</div>
        <p className="py-5">{subtitle}</p>

        {comingSoon && (
          <div className="mt-8 py-5 px-10 bg-[#091401] w-fit mx-auto rounded-full cursor-pointer">
            Coming Soon
          </div>
        )}
      </div>
    </div>
  );
};

export default ComingSoon;
