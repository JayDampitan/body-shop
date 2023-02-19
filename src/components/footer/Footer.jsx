import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#06202F]  w-full flex-col lg:flex-row z-20 px-10 flex justify-between items-center text-gray-100 text-center py-2">
      <div className="flex lg:text-2xl my-2 lg:my-6 gap-2 ">
        <Link
          className="hover:scale-110"
          target="_blank"
          href="https://www.instagram.com/thebodyshophealthclub/?hl=en"
        >
          {" "}
          <BsInstagram />
        </Link>
        <Link className="hover:scale-110" href="">
          {" "}
          <BsFacebook />
        </Link>
      </div>

      <p className="text-sm">© The Body Shop Health Club</p>
    </div>
  );
};

export default Footer;
