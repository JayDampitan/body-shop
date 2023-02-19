import Image from "next/image";
import bodyBuilt from "../assets/images/bodyshopbuilt.jpg";
import builtAd from "../assets/images/bodyBuiltAd.jpeg";
import { BUILT__CLASSES } from "@/assets/data";

const BodyShopBuilt = () => {
  return (
    <div className="flex bg-gray-50 flex-col h-auto items-center justify-center">
      <Image
        src={bodyBuilt}
        className="translate-y-2 lg:translate-y-10 h-40 lg:h-[60vh] w-[80%] mt-20 lg:mt-40 object-cover"
      />

      <div className="text-center flex flex-col w-full py-8 lg:py-20 bg-primary mb-10 lg:mb-16">
        <h2 className=" mx-auto border-b border-darkGrey uppercase text-lg lg:text-4xl font-semibold">
          welcome to body shop built
        </h2>
        <p className="text-[13px] lg:text-xl px-10 mt-4 lg:max-w-4xl leading-5 lg:leading-10 mx-auto">
          Located next door to The Body Shop Health Club, Body Shop Built is the
          ultimate membership. Offered as a separate membership from The Body
          Shop Health Club, Body Shop Built provides unlimited access to all
          group fitness classes as well as 24 hour access to The Body Shop
          Health Club. From beginner to advanced, you're sure to find a fun and
          challenging workout that's appropriate for any level of fitness. Non
          members can drop in for $10.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full pb-10 px-2">
        <Image className="h-96 lg:h-[100%]" src={builtAd} />
        <div className=" flex flex-col w-full lg:w-1/2 px-3 mt-3">
          <h2 className="uppercase text-lg font-semibold flex items-center justify-center lg:text-4xl">
            classes
          </h2>
          <div className="flex flex-wrap flex-col lg:flex-row items-stretch justify-center gap-3 mt-4">
            {BUILT__CLASSES.map((item, index) => (
              <div
                key={index}
                className="w-full lg:w-[45%] flex flex-col justify-start bg-cardColor shadow-md rounded-md px-7 py-3"
              >
                <h2 className="uppercase text-lg font-semibold">{item.day}</h2>
                {item.classes.map((train, index) => (
                  <div key={index} className="">
                    <p className="my-1 lg:my-2">
                      {train.time} &nbsp;&nbsp;&nbsp;&nbsp;
                      <span>{train.training}</span>
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyShopBuilt;
