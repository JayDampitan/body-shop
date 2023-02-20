import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";

const SignUpModal = ({ handleModal, modalActive }) => {
  const modalVariant = {
    hidden: {
      y: "-100%",
    },
    visible: {
      y: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <AnimatePresence>
      {modalActive && (
        <motion.div
          variants={modalVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-[90%] lg:w-[70%] z-10 h-auto lg:h-auto flex flex-col items-center justify-center absolute bg-secondary text-[13px] lg:text-base lg:mt-24 rounded-lg px-6 py-4"
        >
          {/* --------------form------------ */}

          <form action="">
            <div className="text-offWhite flex flex-col items-center justify-center">
              {/* ---------modal header---------- */}
              <div className="max-w-3xl">
                <p className="px-10 lg:px-32">
                  If you're already a member at The Body Shop Health Club, Inc,
                  please Sign In to complete your transaction.
                </p>
                <button className="border border-primary text-primary px-4 py-1 rounded-full my-2 lg:mr-14">
                  <Link href="Contact">Sign In</Link>
                </button>
                <h2 className="text-lg font-semibold lg:text-xl">
                  New Member - Sign up
                </h2>
              </div>
            </div>

            {/* ------------start of inputs and labels---------- */}
            {/* ----------account information */}
            <div className=" brder lg:max-w-5xl mx-auto flex flex-col text-offWhite gap-2">
              <h2 className="text-start text-lg font-semibold">
                Account Information
              </h2>
              <div className=" flex flex-col items-center justify-between lg:flex-row">
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> Email </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> Verify Email </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
              </div>
              <div className=" flex flex-col items-center justify-between lg:flex-row">
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> Password </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> Verify Password </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
              </div>
            </div>

            {/* ---------------personal information------------------ */}
            <div className="  lg:max-w-5xl mx-auto flex flex-col text-offWhite mt-10 gap-2">
              <h2 className="text-start text-lg font-semibold">
                Personal Information
              </h2>
              <div className=" flex flex-col items-center justify-between lg:flex-row">
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> First Name </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> Last Name </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
              </div>
              <div className=" flex flex-col items-center justify-between lg:flex-row">
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> Address 1 </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> Address 2 </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
              </div>
              <div className=" flex flex-col items-center justify-between lg:flex-row">
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> City </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> Zip </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
              </div>
              <div className=" flex flex-col items-center justify-between lg:flex-row">
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> State </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> Country </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
              </div>
              <div className=" flex flex-col items-center justify-between lg:flex-row">
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> Phone </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> Mobile </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
              </div>
              <div className=" flex flex-col items-center justify-between lg:flex-row">
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> Gender </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> Birthday </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
              </div>
              <div className=" flex flex-col items-center justify-between lg:flex-row">
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> Emergency Contact </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label htmlFor=""> Emergency Contact Number </label>
                  <input className="w-full lg:w-[80%] rounded-sm" type="text" />
                </div>
              </div>
            </div>
          </form>

          <button className="text-primary border border-primary px-4 py-1 rounded-full my-4 lg:mr-14">
            Register
          </button>

          {/* ---------close button ------------ */}
          <div
            onClick={handleModal}
            className="text-white absolute top-2 right-4 lg:right-9 lg:top-8"
          >
            <AiOutlineCloseCircle className="text-lg lg:text-3xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignUpModal;
