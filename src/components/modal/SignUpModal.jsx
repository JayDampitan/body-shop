import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SignUpModal = ({ handleModal, modalActive }) => {
  const modalVariant = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      y: "-100vh",
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
          className="w-[80%] h-[80vh] absolute bg-secondary bottom-0 rounded-lg"
        >
          <div
            onClick={handleModal}
            className="text-white absolute right-9 top-8"
          >
            <AiOutlineCloseCircle className="lg:text-4xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignUpModal;
