import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="border-b-2 shadow-md bg-white">
      <div className="flex max-w-5xl mx-auto items-center justify-between h-24 ">
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={100}
          height={50}
          className="cursor-pointer"
        />
        <div className="space-x-4">
          <a href="#products" className="text-md font-semibold">
            Products
          </a>
          <a href="#services" className="text-md font-semibold">
            Services
          </a>
          <a
            href="#blog"
            className="text-md border-b-2 font-semibold border-b-[d8d8da] pb-1"
          >
            Blog
          </a>
          <a href="#contact" className="text-md font-semibold">
            Contact
          </a>
          <a href="#about" className="text-md font-semibold">
            About
          </a>
        </div>
        <button
          type="button"
          className="text-xs font-semibold bg-[#0368cd] text-white w-24 py-2 rounded-3xl  transition-all ease-in-out delay-100 hover:bg-[#0978e8]"
        >
          Free Test
        </button>
      </div>
    </div>
  );
};

export default Navbar;
