import { TRAINING__SERVICES, TRAINERS } from "@/assets/data";
import React from "react";
import Image from "next/image";
import workout from "../assets/images/workout.jpg";
import stretching from "../assets/images/stretching.jpg";
import training3 from "../assets/images/training3.jpg";
import trainer1 from "../assets/images/trainer1.jpg";
import trainer2 from "../assets/images/trainer2.jpg";
import trainer3 from "../assets/images/trainer3.jpg";
import trainer4 from "../assets/images/trainer4.jpg";

const images = [workout, stretching, training3];
const trainers = [trainer1, trainer2, trainer3, trainer4];

const Services = () => {
  return (
    <div className="flex bg-gray-50 flex-col h-auto items-center justify-center">
      <div className="text-offWhite w-full flex flex-col items-center bg-primary pt-36 pb-16 lg:py-44 lg:pb-28 text-center">
        <h2 className="border-b border-offWhite uppercase text-lg lg:text-4xl font-semibold">
          services
        </h2>
        <p className="text-[13px] lg:text-xl px-10 mt-8 lg:max-w-4xl leading-6 lg:leading-10">
          If you're serious about losing weight, getting healthy and/or building
          muscle, hiring a personal trainer can be a step in the right
          direction. The Body Shop Health Club has friendly and knowledgeable
          certified personal trainers available for our members. Our trainers
          will assess your fitness level, figure out what your goals are (or
          help you set goals), set up a program and keep you motivated. He or
          she will push you past your comfort level--something difficult to do
          on your own.
        </p>
      </div>
      {/* -----------services cards section----------------- */}
      <div className="flex flex-col items-center justify-center my-10 lg:my-20">
        <h2 className="uppercase text-darkGrey text-lg lg:text-4xl font-semibold">
          training plans
        </h2>

        {TRAINING__SERVICES.map((service, index) => {
          return (
            <>
              <div className="w-[80%] lg:w-[70%] shadow-lg flex flex-col items-center justify-between   lg:flex-row bg-cardColor rounded-md px-6 py-6 mt-10 hover:-translate-y-1 duration-300">
                <div className="lg:w-[50%] h-60 lg:h-[450px]">
                  <Image src={images[index]} className="h-full object-cover" />
                </div>
                <div className="lg:w-1/4 text-center  lg:text-start font-semibold lg:mr-32">
                  <h2 className="my-4">{service.title}</h2>
                  <h3 className=" my-2 lg:my-4">{service.header}</h3>
                  <p className="text-[13px] lg:text-base font-normal leading-6 lg:leading-7">
                    {service.desc}
                  </p>

                  <button className=" uppercase border px-3 py-1 border-primary text-primary rounded-full text-[13px] lg:text-base mt-2 lg:my-4 hover:text-offWhite hover:bg-primary duration-300">
                    sign up
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* ---------------trainers section---------------- */}
      <div className="flex flex-col items-center justify-center my-10 lg:my-20">
        <h2 className="uppercase text-darkGrey text-lg lg:text-4xl font-semibold">
          meet our trainers
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-6 text-center my-10">
          {TRAINERS.map((trainer, index) => (
            <div className=" mb-16">
              <div
                key={index}
                className="w-[130px] h-[130px] lg:w-[220px] lg:h-[220px] bg-primary rounded-full p-2"
              >
                <Image
                  src={trainers[index]}
                  width="500"
                  height="500"
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
                <p className="font-semibold mt-6">{trainer.name}</p>
                <p>{trainer.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
