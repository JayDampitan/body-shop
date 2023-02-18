import { MEMBER__PLAN } from "@/assets/data";
import React from "react";

const Membership = () => {
  return (
    <div className="flex flex-col h-auto items-center justify-center pt-20  text-center w-full">
      <div className="w-full bg-primary text-white flex flex-col items-center justify-center shadow-lg py-20 lg:py-40">
        <h2 className="uppercase text-4xl font-bold">membership</h2>
        <p className="max-w-3xl mt-10 text-[13px] sm:text-xl px-4 lg:leading-10">
          The Body Shop Health Club offers a wide variety of membership options
          designed to fit your needs, your schedule and your budget. From our no
          commitment month-to-month membership to our all-inclusive plans, we
          are confident that you will find the best plan for you. Select your
          membership option from below.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-3 lg:gap-6 my-20  w-full">
        {MEMBER__PLAN.map((item, index) => (
          <div className="lg:w-[25%] w-[90%] mx-auto lg:mx-0 flex flex-col justify-between font-semibold text-gray-700 bg-[#F4F2F2] py-2 px-5 lg:px-10 lg:py-10 uppercase rounded-md shadow-lg hover:-translate-y-1 duration-200 text-[12px] sm:text-base ">
            <h2 className="my-7">{item.title}</h2>
            <h3 className="">{item.contract}</h3>
            <p className="my-2">
              <span className="text-primary">membership length:</span>
              &nbsp;&nbsp;{item.length}
            </p>
            <p className="my-2">
              <span className="text-primary">fee:</span>&nbsp;&nbsp;
              {item.fee}
            </p>
            <p className="my-2">
              <span className="text-primary">price:</span>&nbsp;&nbsp;
              {item.price}
            </p>
            <button className="my-4 mx-auto uppercase border border-primary px-7 py-1 rounded-full text-primary hover:text-white hover:bg-primary hover duration-300">
              sign up
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
