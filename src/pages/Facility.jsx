import React from "react";
import Image from "next/image";
import gym from "../assets/images/gym.jpg";
import blend from "../assets/images/powerBlendz.jpg";
import blend1 from "../assets/images/powerBlendz2.jpg";
import blend2 from "../assets/images/powerBlendz3.jpg";
import blend3 from "../assets/images/powerBlendz4.jpg";
import shop from "../assets/images/shop.jpg";
import tanning from "../assets/images/tanning.jpg";
import { TANNING_PLANS } from "@/assets/data";

const Facility = () => {
  return (
    <div className="flex flex-col h-auto bg-gray-50 items-center justify-center">
      <div className="text-offWhite w-full flex flex-col items-center bg-primary pt-36 pb-20 lg:py-44 lg:pb-32 text-center">
        <h2 className="border-b border-offWhite uppercase text-lg lg:text-4xl font-semibold">
          facility
        </h2>
        <p className="text-[13px] lg:text-xl px-10 mt-2 lg:max-w-4xl leading-6 lg:leading-10">
          The Body Shop Health Club offers everything you need to effectively
          achieve and maintain your fitness goals including a large selection of
          cardio and strength training equipment, a full supplement shop, a
          medical grade infrared light sauna and shake bar. We've designed our
          club to be a "one stop shop" for getting results. With a variety of
          membership options to choose from, it's easy to see why The Body Shop
          Health Club is the choice for so many.
        </p>
      </div>
      <Image src={gym} className="h-64 lg:h-auto lg:w-[70%] -translate-y-16 object-cover" />

      {/* -----------------smoothie section---------------- */}
      <div className="text-center lg:my-10">
        <h2 className=" uppercase text-lg lg:text-4xl font-semibold">
          juice bar
        </h2>
        <p className="text-[13px] lg:text-xl px-10 mt-8 lg:max-w-4xl leading-6 lg:leading-10 mx-auto">
          Enjoy the amazing taste of one of our many Protein Shakes. Benefits
          include improved recovery, preserving and building lean muscle mass,
          weight loss and boosting metabolism. Add optional supplements to make
          your shake even more beneficial.
        </p>
        <Image className="mx-auto mt-10" src={blend} />
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="w-[25%]">
            <Image className="rounded-sm" src={blend1} />
          </div>
          <div className="w-[25%]">
            <Image className="rounded-sm" src={blend2} />
          </div>
          <div className="w-[25%]">
            <Image className="rounded-sm" src={blend3} />
          </div>
        </div>
      </div>

      {/* --------------merchandise section------------- */}
      <div className="text-center mt-10 mb-10 lg:mb-16">
        <h2 className=" uppercase text-lg lg:text-4xl font-semibold">
          merchandise and supplements
        </h2>
        <p className="text-[13px] lg:text-xl px-10 mt-8 lg:max-w-4xl leading-6 lg:leading-10 mx-auto">
          The Body Shop Health Club is home to the only Smoothie Bar &
          Supplement Shop in Kings County. We offer a wide range of nutritional
          and sports supplements, protein shakes, sports drinks and accessories
          to help achieve and maintain your fitness goals. CBD, Pre Workouts,
          Fat Burners, BCAA'S, Protein Powder, Vitamins, Sleep Aids, and so much
          more.
        </p>
        <Image className="mx-auto mt-10" src={shop} />
      </div>

      {/* --------------tanning section------------- */}
      <div className="text-center mb-20">
        <h2 className=" uppercase text-lg lg:text-4xl font-semibold">
          tanning
        </h2>
        <p className="text-[13px] lg:text-xl px-10 mt-8 lg:max-w-4xl leading-6 lg:leading-10 mx-auto">
          Our spa area is the perfect place to relax at the end of your workout
          or to indulge in some much-needed relaxation during your busy week.
          Whether you enjoy our Infrared Light Sauna or our tanning bed, you
          will leave relaxed, refreshed and looking good. Our top of the line
          220-volt tanning bed is powered with 32 high efficient WOLFF® Bronze
          Max tanning lamps (strongest bulbs on the planet) and offers 3200
          watts of tanning power to provide you with a great tanning session in
          just 12 minutes or less.
        </p>
        <Image className="mx-auto mt-10" src={tanning} />

        <div className="my-10 flex flex-wrap gap-3  items-stretch justify-center ">
          {TANNING_PLANS.map((plan, index) => (
            <div
              key={index}
              className="w-3/4 lg:w-1/4 bg-cardColor flex flex-col justify-between text-[13px] lg:text-md shadow-md px-4 rounded-md text-center py-14 uppercase font-semibold"
            >
              <h2 className="border-b border-primary my-2 sm:text-lg">
                {plan.session}
              </h2>
              <p className="lg:text-lg mt-2">{plan.price}</p>
              {plan.headline && (<p className="text-red-500">{plan.headline}</p>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facility;
