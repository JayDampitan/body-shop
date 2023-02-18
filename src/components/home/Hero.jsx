import { useState } from "react";
import Image from "next/image";
import girl from "../../assets/images/girl.jpg";
import stretchingCouple from "../../assets/images/stretching4.jpg";
import smoothie from "../../assets/images/smoothie.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-auto ">
      {/* ---------------hero main ------------------ */}
      <div
        className={`text-center flex flex-col items-center justify-center w-full h-[500px] lg:h-screen bg-cover opacity- hero-image text-gray-100 uppercase font-semibold`}
      >
        <h2 className="text-2xl lg:text-6xl font-bold">
          welcome to the body shop
        </h2>
        <h3 className="lg:text-4xl">your 24/7 fitness facility</h3>
      </div>

      {/* -----------------hero intro with call to action----------- */}

      <div className="border-b border-primary pb-10 flex my-10 mx-auto flex-col max-w-lg lg:max-w-[30%] items-center justify-center text-center">
        <p className="uppercase px-2 font-medium text-lg lg:text-4xl">{`welcome to the body shop health club. your "one stop shop", 24/7 hometown gym. here, you're family`}</p>
        <button
          className="border uppercase border-primary text-primary py-1 px-3 rounded-full
         mt-6 hover:bg-primary hover:text-white duration-300"
        >
          <Link href="contact"> start sweating </Link>
        </button>
      </div>

      <div>
        {/* ------- first hero section ----image with the girl-----------------*/}

        <div className="text-center flex flex-col items-center justify-center lg:flex-row mt-20">
          <div className="relative mb-10">
            <div className="absolute w-full h-full bg-primary -translate-x-6 -translate-y-6"></div>
            <Image
              className="relative w-80 sm:w-96 lg:w-[900px] bg-primary hover:-translate-x-3 hover:-translate-y-3 duration-300"
              src={stretchingCouple}
            />
          </div>
          <div className="text-lg lg:text-4xl text-center uppercase font-medium lg:ml-32 max-w-xs lg:max-w-md">
            <p>let us help you achieve your goal this year</p>
          </div>
        </div>

        {/* -------------second hero section--image of training---switched------------- */}

        <div className="text-center flex flex-col items-center justify-center lg:flex-row-reverse my-20 mb-">
          <div className="relative mb-10">
            <div className="absolute w-full h-full bg-primary -translate-x-6 -translate-y-6"></div>
            <Image
              className="relative z-10 w-80 sm:w-96  lg:w-[900px] bg-primary hover:-translate-x-3 hover:-translate-y-3 duration-300"
              src={smoothie}
            />
          </div>
          <div className="text-lg lg:text-4xl text-center uppercase font-medium lg:mr-32 max-w-xs lg:max-w-md">
            <p>now serving coffee smoothies!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
