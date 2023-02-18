import { NAV__LINKS } from "@/assets/data";
import logo from "../../assets/images/bodyShopLogo.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navOpen, setnavOpen] = useState(false);

  const handleNav = () => {
    setnavOpen(!navOpen);
  };
  return (
    <nav className="w-full fixed bg-gray-100 top-0 right-0 left-0 uppercase z-20 shadow-lg">
      <div className="flex justify-between px-10 items-center">
        <Link href="/" className="w-[80px] md:w-[130px] ">
          <Image src={logo} alt="" className="" />
        </Link>
        {/* ----------desktop menu */}
        <div className="hidden lg:flex">
          <ul className="flex gap-4 items-center">
            {NAV__LINKS.map((item) => (
              <li className="font-semibold relative nav-hover">
                <Link href={`${item.path}`}>{item.display}</Link>
              </li>
            ))}
            <li className="border-l border-primary">
              <button className=" border border-primary text-primary py-1 rounded-full px-4 uppercase ml-3 hover:text-offWhite hover:bg-primary duration-300">
                <Link target="_blank" href="https://login.ionos.com/?redirect_url=https%3A%2F%2Fmy.ionos.com%2Fmywebsite-overview%3Fmywebsite.pageid%3D529000&username=www.thebodyshophealthclub.com">
                  log in
                </Link>
              </button>
            </li>
          </ul>
        </div>
        {/* ----------hamburger menu----------- */}
        <div onClick={handleNav} className="lg:hidden text-2xl">
          <AiOutlineMenu />
        </div>
      </div>
      {/* -----------mobile menu */}
      <div
        className={`${
          navOpen ? "block" : "hidden"
        } absolute w-full top-0 right-0 left-0 bottom-0 h-screen bg-darkGrey`}
      >
        <ul className="mx-auto border h-screen flex flex-col items-center justify-center font-bold text-primary">
          {NAV__LINKS.map((item, index) => (
            <li key={index}>
              {" "}
              <Link href={item.path}>{item.display}</Link>
            </li>
          ))}
          <li className="absolute top-8 right-8" onClick={handleNav}>
            <AiOutlineClose />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
