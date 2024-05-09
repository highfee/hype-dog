import ContainerLayout from "./ContainerLayout";

const About = () => {
  const style =
    "p-10 bg-[#091401] relative rounded-lg after:absolute after:left-4 after:top-4  after:right-4 md:after:-right-4 after:-bottom-4 after:-z-10 after:bg-[#566e40] after:rounded-lg";
  return (
    <div className="my-8 mt-0">
      <ContainerLayout>
        <div className={style}>
          <p className="text-3xl md:text-5xl  text-white mb-10">
            About Hype Dog
          </p>

          <p className="text-xl text-gray-300  leading-normal">
            Meme coins should be fun, and this project is definitely fun! Hype
            Dog is not just another meme coin though, it is a cryptocurrency
            designed to capture the essence of meme culture with its unique,
            purposely low quality, funny marketing campaign. Built on the Base
            Network, Hype Dog wants to demonstrate a commitment to
            decentralization, with a nearly complete fair launch, based on the
            token allotments below. Ownership of the contract will be
            relinquished after launch and liquidity will be locked.
          </p>

          <p className="my-8 text-white text-2xl md:text-3xl">
            Why is Hype Dog the best?
          </p>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default About;
