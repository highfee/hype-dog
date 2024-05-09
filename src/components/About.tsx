import ContainerLayout from "./ContainerLayout";

const whys = [
  "No other meme coin has more fake celebrity endorsements than Hype Dog",
  "No other meme coin has started more fake celebrity beefs than Hype Dog",
  "No other meme coin has a bigger library of low quality deep fake vids than Hype Dog",
  "No other meme coin makes Elon Musk appear more conflicted than Hype Do",
  "No other meme coin pretends to advertise on more global landmarks than Hype Do",
  "No other meme coin has a better fake history and documentary than Hype Do",
  "No other meme coin has a fake True Hollywood Story in production except Hype Dog",
  "No other meme coin gets people more $HYPD than Hype Do",
];

const About = () => {
  const style =
    "p-10 bg-[#091401] relative rounded-lg after:absolute after:left-4 after:top-4  after:right-4 md:after:-right-4 after:-bottom-4 after:-z-10 after:bg-[#566e40] after:rounded-lg flex-";
  return (
    <div className="my-8 mt-0">
      <ContainerLayout>
        <div className="flex gap-10 flex-col lg:flex-ro">
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
          </div>
          <div className={style}>
            <p className="my-8 text-white text-2xl md:text-3xl">
              Why is Hype Dog the best?
            </p>

            <ul className="flex flex-col gap-5 list-inside">
              {whys.map((why, i) => (
                <li
                  key={i}
                  className="text-white flex items-center gap-2 text-lg "
                >
                  <span>🐕</span>
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

export default About;
