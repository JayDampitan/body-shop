import { useState } from "react";
import Image from "next/image";
import bodyShop from "../assets/images/bodyShopGym2.png";
import owners from "../assets/images/owners.jpg";
import { EMPLOYEES } from "@/assets/data";

const AboutUs = () => {
  return (
    <div className="text-center bg-gray-50 flex items-center flex-col justify-center h-auto w-full">
      <div className="bg-primary w-full flex-col flex items-center justify-center py-32 lg:py-44">
        <h2 className=" border-b border-offWhite text-offWhite uppercase text-lg lg:text-4xl font-semibold">
          welcome to the body shop family
        </h2>
        <p className="max-w-3xl text-sm text-offWhite mt-10 sm:text-xl px-2 leading-6 lg:leading-10">
          Family owned and operated, we take great pride in providing an
          alternative to the corporate clubs. Whether you're a beginner or a
          seasoned athlete, our helpful staff is trained to assist you.
        </p>
      </div>
      <Image className="w-[90%] lg:w-[60%] -translate-y-28 " src={bodyShop} />

      <div>
        <h2 className="uppercase  text-lg lg:text-5xl text-gray-800 font-bold">
          meet our team
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] bg-primary rounded-full p-2">
            <Image
              src={owners}
              width="500"
              height="500"
              alt=""
              className="w-fullz h-full rounded-full object-cover"
            />
            <p className="font-semibold mt-6">Jane and John Doe</p>
            <p>Owners</p>
          </div>
          <div className="my-32 flex flex-wrap items-center justify-center lg:flex-row gap-6">
            {EMPLOYEES.map((employee, index) => (
              <div key={index} className="mb-16">
                <div className="w-[130px] h-[130px] lg:w-[220px] lg:h-[220px] bg-primary rounded-full p-2">
                  <Image
                    src={`/${index + 1}.jpg`}
                    width="500"
                    height="500"
                    alt=""
                    className="w-full h-full rounded-full object-cover"
                  />
                  <p className="font-semibold mt-6">{employee.name}</p>
                  <p>{employee.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
