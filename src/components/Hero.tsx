import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] border -top-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="h-[150px] bg-white absolute w-full -bottom-[120px] -skew-y-3"></div>
        <Image
          src="/grass.jpg"
          alt=""
          width="1000"
          height="700"
          className=" object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
