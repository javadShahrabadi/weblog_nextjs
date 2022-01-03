import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white mt-8 shadow-inner">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-row p-8 items-center">
          <div className="w-1/5 flex flex-col items-center justify-center space-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <h2 className="font-bold text-lg">Shiping Tips</h2>
            <p class="text-xs text-gray-400 text-center">
              important Delivery Tips
              <br /> You May Need.
            </p>
            <a
              href="#"
              className="text-blue-400 text-xs flex items-center mt-1"
            >
              Learn more
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="w-1/5 flex flex-col items-center justify-center space-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <h2 className="font-bold text-lg">Support Tips</h2>
            <p class="text-xs text-gray-400 text-center">
              important support Tips <br />
              You May Need.
            </p>
            <a
              href="#"
              className="text-blue-400 text-xs flex items-center mt-1"
            >
              Learn more
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="w-1/5 flex flex-col items-center justify-center space-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-20 w-20 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <h2 className="font-bold text-lg">Order to Europe</h2>
            <p class="text-xs text-gray-400 text-center">
              important Delivery <br />
              Tips You May Need.
            </p>
            <a
              href="#"
              className="text-blue-400 text-xs flex items-center mt-1"
            >
              Learn more
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="w-2/5">
            <div className="flex flex-row space-x-2 items-center text-lg">
              <div className="w-2 h-2 rounded-full bg-[#6BCF97]"></div>
              <h2 className="inline-block font-bold">
                Would You Like To Join Newsletters?
              </h2>
            </div>
            <div className="space-x-4 mt-4">
              <input
                type="text"
                className="bg-[#ECEDEF] rounded-xl text-xs w-2/3 p-2 text-center ml-3 outline-none"
                placeholder="enter your email address ..."
              />
              <button
                type="button"
                className="text-white bg-[#0067CB] text-sm font-bold h-8 rounded-xl w-12"
              >
                Join
              </button>
              <p className="text-xs text-[#C6C7C9] mt-4 text-justify">
                We Usually Post Offers And Challenges in Newsletters Usually
                Post Offers And Challenges And We Usally Post Offers And
                Challenges.
              </p>
            </div>
          </div>
        </div>
        {/* divider */}
        <div class="border-t border-gray-300 w-full mt-2"></div>
        {/* end-divider */}

        <div className="flex flex-row items-center">
          <div class="flex flex-row items-center space-x-1 mt-4 mr-auto">
            <h3 className="font-bold">Dirodi</h3>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-[#CCCDCF]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <h4 className="font-bold text-xs">Electric Bikes</h4>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-[#CCCDCF]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <h4 className="font-bold text-xs">Nue Bikes [Gen 2]</h4>
          </div>
          <div className="flex space-x-1 mt-4">
            <div class="w-10 h-10 rounded-full relative flex items-center justify-center border border-gray-300 cursor-pointer hover:scale-110 transition-all delay-100">
              <Image
                src="/img/youtube.svg"
                width={25}
                height={25}
                className="absolute"
              />
            </div>

            <div className="flex space-x-1">
              <div class="w-10 h-10 rounded-full relative flex items-center justify-center border border-gray-300  cursor-pointer hover:scale-110 transition-all delay-100">
                <Image
                  src="/img/instagram.svg"
                  width={25}
                  height={25}
                  className="absolute"
                />
              </div>
            </div>
            <div className="flex space-x-1">
              <div class="w-10 h-10 rounded-full relative flex items-center justify-center border border-gray-300  cursor-pointer hover:scale-110 transition-all delay-100">
                <Image
                  src="/img/facebook.svg"
                  width={25}
                  height={25}
                  className="absolute"
                />
              </div>
            </div>
            <div className="flex space-x-1">
              <div class="w-10 h-10 rounded-full relative flex items-center justify-center border border-gray-300  cursor-pointer hover:scale-110 transition-all delay-100">
                <Image
                  src="/img/linkedin.svg"
                  width={20}
                  height={20}
                  className="absolute"
                />
              </div>
            </div>
            <div className="flex space-x-1">
              <div class="w-10 h-10 rounded-full relative flex items-center justify-center border border-gray-300  cursor-pointer   hover:scale-110 transition-all delay-100">
                <Image
                  src="/img/twitter.svg"
                  width={25}
                  height={25}
                  className="absolute"
                />
              </div>
            </div>
          </div>
        </div>
        {/* 5 col section */}
        <div className="grid grid-cols-5 mt-4">
          <div className="flex flex-col space-y-3">
            <h2 className="font-bold">PRODUCTS</h2>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Xterme</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Rover</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Classx</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Classimo</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Nue Bike [Gen 2]</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Nue Bike [Gen 1]</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
          {/* col-2 */}
          <div className="flex flex-col space-y-3">
            <h2 className="font-bold">DIRODI SERVICES</h2>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Warranty</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Stores</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Cities</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Countries</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Repairing</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Catalogs</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h2 className="font-bold">SUPPORT</h2>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Online Support</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Call Numbers</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Emails</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Social Supports</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Locations</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Support Tips</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h2 className="font-bold">BLOG</h2>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">safety Articles</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Repair Articles</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <h2 className="font-bold">FOR BUSINESS</h2>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Shop For Business</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">
                Offers For Organizations
              </h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h2 className="font-bold">DIRODI</h2>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Abouts</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Contacts</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Events</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Job Opportunities</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Accessbility</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-row items-center text-[#7E7F81]">
              <h4 className="text-xs cursor-pointer">Privacy</h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* end-5 col section */}
      </div>
      <div className="bg-[#ECEDEF] text-center mt-8">
        &#10084;
        <small className="font-bold"> javad shahrabadi </small>
        &#10084;
      </div>
    </div>
  );
};

export default Footer;
