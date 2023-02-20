import { MEMBER__PLAN } from "@/assets/data";
import { useState } from "react";
import SignUpModal from "@/components/modal/SignUpModal";
import { motion } from "framer-motion";
import { leftVariant, rightVariant } from "@/assets/data";

const Membership = () => {
  const [modalActive, setModalActive] = useState(false);

  const handleModal = () => {
    setModalActive(!modalActive);
  };
  return (
    <div className="flex flex-col h-auto bg-gray-50 items-center justify-center text-center w-full">
      <div className="text-offWhite w-full flex flex-col items-center bg-primary pt-36 pb-16 lg:py-44 lg:pb-28 text-center">
        <h2 className="border-b border-offWhite uppercase text-lg lg:text-4xl font-semibold">
          membership
        </h2>
        <p className="text-[13px] lg:text-xl px-10 mt-8 lg:max-w-4xl leading-6 lg:leading-10">
          The Body Shop Health Club offers a wide variety of membership options
          designed to fit your needs, your schedule and your budget. From our no
          commitment month-to-month membership to our all-inclusive plans, we
          are confident that you will find the best plan for you. Select your
          membership option from below.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-3 lg:gap-6 my-20  w-full">
        {MEMBER__PLAN.map((item, index) => (
          <motion.div
            initial={{ x: -20, y: 20, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            key={index}
            className="lg:w-[25%] w-[90%] mx-auto lg:mx-0 flex flex-col justify-between font-semibold text-gray-700 bg-[#F4F2F2] py-2 px-5 lg:px-10 lg:py-10 uppercase rounded-md shadow-lg text-[12px] sm:text-base "
          >
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
            <button
              onClick={handleModal}
              className="my-4 mx-auto uppercase border border-primary px-7 py-1 rounded-full text-primary hover:text-white hover:bg-primary hover duration-300"
            >
              sign up
            </button>
          </motion.div>
        ))}
      </div>

      {/* ---------------modal section---------------- */}

      <SignUpModal handleModal={handleModal} modalActive={modalActive} />
    </div>
  );
};

export default Membership;
