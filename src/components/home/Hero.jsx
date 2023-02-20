import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import stretchingCouple from "../../assets/images/stretching4.jpg";
import smoothie from "../../assets/images/smoothie.jpg";
import Link from "next/link";
import { leftVariant, rightVariant } from "../../assets/data";

const Hero = () => {
  return (
    <div className="w-full h-auto bg-gray-50 pb-10">
      {/* ---------------hero main ------------------ */}
      <div
        className={`text-center flex flex-col items-center justify-center w-full h-[500px] lg:h-screen bg-cover opacity- hero-image text-gray-100 uppercase font-semibold`}
      >
        <h2 className="text-2xl lg:text-6xl font-bold">
          welcome to the body shop
        </h2>
        <h3 className="lg:text-4xl">your 24/7 fitness facility</h3>
        <button
          className="border uppercase border-primary text-primary py-1 px-3 rounded-full
         mt-6 hover:bg-primary hover:text-white duration-300 lg:text-2xl lg:px-5 "
        >
          <Link href="Contact"> start sweating </Link>
        </button>
      </div>

      {/* -----------------hero intro with call to action----------- */}

      <div className="border-b border-primary pb-10 flex my-10 mx-auto flex-col max-w-lg lg:max-w-[30%] items-center justify-center text-center">
        <p className="uppercase px-2 font-medium text-lg lg:text-4xl">{`welcome to the body shop health club. your "one stop shop", 24/7 hometown gym. here, you're family`}</p>
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
            <h3>let us help you achieve your goal this year</h3>
            <button
              className="border text-[13px] lg:text-base uppercase border-primary text-primary py-1 px-3 rounded-full
         mt-6 hover:bg-primary hover:text-white duration-300"
            >
              <Link href="Services"> meet our trainers</Link>
            </button>
          </div>
        </div>

        {/* -------------second hero section--image of training---switched------------- */}

        <div className="text-center flex flex-col items-center justify-center lg:flex-row-reverse mt-20">
          <div className="relative mb-10">
            <div className="absolute w-full h-full bg-primary -translate-x-6 -translate-y-6"></div>
            <Image
              className="relative z-10 w-80 sm:w-96  lg:w-[900px] bg-primary hover:-translate-x-3 hover:-translate-y-3 duration-300"
              src={smoothie}
            />
          </div>
          <div className="text-lg lg:text-4xl text-center uppercase font-medium lg:mr-32 max-w-xs lg:max-w-md">
            <h3>Now Serving Blended Coffees w/ Protein!!</h3>
            <p className="font-thin lg:text-lg mt-4">
              Finally, a healthy, low calorie, low carb, high protein
              alternative to the traditional "sugar bomb" blended coffee.
            </p>
            <button
              className="border text-[13px] lg:text-base uppercase border-primary text-primary py-1 px-3 rounded-full
         mt-6 hover:bg-primary hover:text-white duration-300"
            >
              <Link href="Facility">check out more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
