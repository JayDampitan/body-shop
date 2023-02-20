import { NAV__LINKS } from "@/assets/data";
import logo from "../../assets/images/bodyShopLogo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { topVariant } from "@/assets/data";

const Navbar = () => {
  const [navOpen, setnavOpen] = useState(false);
  const [active, setActive] = useState("/");

  const setLocalStorage = (currentPage) => {
    window.sessionStorage.setItem("currentPage", currentPage);
    setActive(currentPage);
  };

  useEffect(() => {
    const page = window.sessionStorage.getItem("currentPage");
    setActive(page || "/");
  }, []);

  const handleNav = () => {
    setnavOpen(!navOpen);
  };
  return (
    <nav className="w-full fixed bg-gray-100 top-0 right-0 left-0 uppercase z-20 shadow-lg">
      <div className="flex justify-between px-8 lg:px-14 items-center">
        <Link
          href="/"
          onClick={() => setLocalStorage("/")}
          className="w-[80px] md:w-[130px] "
        >
          <Image src={logo} alt="" className="" />
        </Link>
        {/* ----------desktop menu */}
        <div className="hidden lg:flex">
          <ul className="flex lg:gap-5 items-center">
            {NAV__LINKS.map((item, index) => (
              <li
                key={index}
                onClick={() => setLocalStorage(item.path)}
                className={`text-sm font-semibold relative nav-hover ${
                  active === item.path && "active"
                }`}
              >
                <Link href={`${item.path}`}>{item.display}</Link>
              </li>
            ))}
            <li className="border-l border-primary">
              <button className=" border border-primary text-primary py-1 rounded-full px-4 uppercase ml-3 hover:text-offWhite hover:bg-primary duration-300">
                <Link
                  target="_blank"
                  href="https://login.ionos.com/?redirect_url=https%3A%2F%2Fmy.ionos.com%2Fmywebsite-overview%3Fmywebsite.pageid%3D529000&username=www.thebodyshophealthclub.com"
                >
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
      <AnimatePresence>
        {navOpen && (
          <motion.div
            variants={topVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`block 
        absolute w-full top-0 right-0 left-0 bottom-0 h-screen bg-darkGrey`}
          >
            <ul className="mx-auto border text-xl h-screen flex flex-col gap-4 items-center justify-center font-bold text-primary">
              {NAV__LINKS.map((item, index) => (
                <li  key={index}>
                  {" "}
                  <Link
                    onClick={handleNav}
                    href={item.path}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
              <li className="absolute top-8 right-8" onClick={handleNav}>
                <AiOutlineClose />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
