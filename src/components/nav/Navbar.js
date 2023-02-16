import { NAV__LINKS } from "@/assets/data";
import logo from "../../assets/bodyShopLogo.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [navOpen, setnavOpen] = useState(false);

    const handleNav = () => {
        setnavOpen(!navOpen)
    }
  return (
    <nav className="w-full fixed top-0 right-0 left-0  border border-black uppercase">
      <div className="flex justify-between px-10 items-center">
        <div className="w-[130px] ">
          <Image src={logo} alt="" className="" />
        </div>
{/* ----------desktop menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-4 items-center">
            {NAV__LINKS.map((item) => (
              <li className="">
                <Link href={item.path}>{item.display}</Link>
              </li>
            ))}
            <li className="border-l border-black">
              <button className=" border border-yellow-600 py-1 rounded-full px-4 uppercase ml-3">
                log in
              </button>
            </li>
          </ul>
        </div>
{/* ----------hamburger menu----------- */}
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu />
        </div>
      </div>
      <div className={`${navOpen ? "block" : "hidden"} absolute w-full top-0 right-0 left-0 bottom-0 h-screen bg-blue-400`}>
            <ul className="mx-auto border h-screen flex flex-col items-center justify-center">
                {NAV__LINKS.map((item, index) => (
                    <li key={index}> <Link href={item.path}>{item.display}</Link></li>
                ))}
                <li onClick={handleNav}><AiOutlineClose/></li>
            </ul>
      </div>
    </nav>
  );
};

export default Navbar;
