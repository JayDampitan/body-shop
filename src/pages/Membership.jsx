import { MEMBER__PLAN } from "@/assets/data";
import React from "react";

const Membership = () => {
  return (
    <div className="flex flex-col h-auto items-center justify-center pt-20  text-center w-full">
      <div className="w-full bg-yellow-500 text-white flex flex-col items-center justify-center shadow-lg py-20 lg:py-40">
        <h2 className="uppercase text-4xl font-bold">membership</h2>
        <p className="max-w-3xl mt-10 sm:text-xl px-4">
          The Body Shop Health Club offers a wide variety of membership options
          designed to fit your needs, your schedule and your budget. From our no
          commitment month-to-month membership to our all-inclusive plans, we
          are confident that you will find the best plan for you. Select your
          membership option from below.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-6 my-20  w-full">
        {MEMBER__PLAN.map((item, index) => (
          <div className="lg:w-[25%] w-[90%] font-semibold text-gray-700 bg-[#F4F2F2] py-2 px-5 lg:px-10 lg:py-10 uppercase rounded-md shadow-lg hover:-translate-y-1 duration-200 text-[13px] sm:text-base ">
            <h2 className="my-7">{item.title}</h2>
            <h3 className="">{item.contract}</h3>
            <p className="my-2">
              <span className="text-yellow-600">membership length:</span>
              &nbsp;&nbsp;{item.length}
            </p>
            <p className="my-2">
              <span className="text-yellow-600">fee:</span>&nbsp;&nbsp;
              {item.fee}
            </p>
            <p className="my-2">
              <span className="text-yellow-600">price:</span>&nbsp;&nbsp;
              {item.price}
            </p>
            <button className="my-4 uppercase border border-yellow-600 px-7 py-1 rounded-full text-yellow-600 hover:text-white hover:bg-yellow-600 hover duration-300">
              sign up
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
