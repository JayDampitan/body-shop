import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#06202F] w-full flex-col lg:flex-row z-20 px-10 flex justify-between items-center text-gray-100 text-center">
      <div className="flex text-2xl my-2 lg:my-6 gap-2">
        <Link href="">
          {" "}
          <BsInstagram />
        </Link>
        <Link href="">
          {" "}
          <BsFacebook />
        </Link>
      </div>

      <p className="text-sm">© The Body Shop Health Club</p>
    </div>
  );
};

export default Footer;
