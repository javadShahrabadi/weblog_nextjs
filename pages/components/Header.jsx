import React from "react";
import Image from "next/image";

// --------------------------
const Header = () => {
  return (
    <div className="max-w-5xl mx-auto mt-4 border border-gray-100 rounded-xl shadow-md p-4 bg-white">
      <div className="grid grid-cols-2">
        <div className="mt-2">
          <Image src="/img/bg-col-header.svg" width={400} height={200} />
        </div>
        <div className="flex flex-col justify-evenly items-center">
          <div className="space-y-2">
            <h1 className="text-[#0067CB] font-bold text-3xl text-center">
              Dirodi Entertaining
            </h1>
            <h2 className="text-center text-2xl text-[#28417e] font-extrabold">
              <span className="text-[#abbadd]">“ </span>
              Blog
              <span className="text-[#abbadd]"> ”</span>
            </h2>
            <h3 className="text-center text-[#a9a9a9]">
              dirodi entertaining blog
            </h3>
          </div>
          <div className="relative">
            <input
              type="text"
              className="py-3 px-10 rounded-2xl bg-[#f4f5f7] outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="absolute h-4 w-4 top-4 ml-2 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <button
              type="button"
              className="text-white absolute top-2 right-3 bg-[#0067CB] rounded-xl w-12 h-8"
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
