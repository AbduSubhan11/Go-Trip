"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function NavBar() {
  const [isHamburger, setIsHamburger] = useState(false);
  const pathname = usePathname();

  const hamburHandler = () => {
    setIsHamburger(!isHamburger);
  };

  const toggleMenu = () => {
    setIsHamburger(false);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-5 sticky top-0 z-20 bg-white shadow-md">
      <div>
        <Image src={"/Images/Logo.png"} alt="logo" width={100} height={100} />
      </div>
      <div
        className={`md:space-x-6 font-semibold text-1xl ${
          isHamburger
            ? "flex flex-col right-0 top-0 h-screen w-52 py-20 px-5 absolute space-y-5 border bg-white"
            : "md:flex hidden"
        }`}
      >
        <Link
          href="/"
          onClick={toggleMenu}
          className={`hover:text-[#014B85] hover:underline underline-offset-4 ${
            pathname === "/" ? "text-[#014B85] underline" : ""
          } ${isHamburger ? "border-b-2" : ""}`}
        >
          HOME
        </Link>
        <Link
          href="/about"
          onClick={toggleMenu}
          className={`hover:text-[#014B85] hover:underline underline-offset-4 ${
            pathname === "/about" ? "text-[#014B85] underline" : " "
          } ${isHamburger ? "border-b-2" : ""}`}
        >
          ABOUT US
        </Link>
        <Link
          href="/package"
          onClick={toggleMenu}
          className={`hover:text-[#014B85] hover:underline underline-offset-4 ${
            pathname === "/package" ? "text-[#014B85] underline" : " "
          } ${isHamburger ? "border-b-2" : ""}`}
        >
          PACKAGES
        </Link>
        <Link
          href="/contact"
          onClick={toggleMenu}
          className={`hover:text-[#014B85] hover:underline underline-offset-4 ${
            pathname === "/contact" ? "text-[#014B85] underline" : " "
          } ${isHamburger ? "border-b-2" : ""}`}
        >
          CONTACT US
        </Link>
      </div>
      {/* HAMBURGER */}
      <div className="md:hidden z-20 mt-1">
        <button
          className="flex flex-col justify-between w-6 h-[18px] focus:outline-none"
          onClick={hamburHandler}
        >
          <span
            className={`block h-[3px] w-full bg-black transition-transform duration-300 ease-in-out ${
              isHamburger ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-black transition-opacity duration-300 ease-in-out ${
              isHamburger ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-black transition-transform duration-300 ease-in-out ${
              isHamburger ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
