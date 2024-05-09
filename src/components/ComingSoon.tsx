import { cn } from "@/lib/utils";
import { Rubik_Bubbles } from "next/font/google";

const rubik = Rubik_Bubbles({
  subsets: ["latin"],
  weight: "400",
});

const ComingSoon = ({ text }: { text: string }) => {
  return (
    <div className="bg-[#313D34] h-[400px] rounded-2xl grid place-items-center text-white text-center px-8">
      <div>
        <div className={cn("text-3xl", rubik.className)}>{text}</div>
        <div className="mt-8 py-5 px-10 bg-[#091401] w-fit mx-auto rounded-full cursor-pointer">
          Coming Soon
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
