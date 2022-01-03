import React from "react";
import Image from "next/image";
const Mainart = () => {
  return (
    <div className="max-w-5xl mx-auto mt-8 grid grid-cols-2">
      <div className="-ml-8">
        <Image src="/img/bicycle.svg" width={500} height={300} />
      </div>
      <div>
        <button
          type="button"
          className="bg-[#ece7fd] text-sm font-semibold w-24 h-8 rounded-lg text-[#9f8bc7]"
        >
          The newest
        </button>
        <div className="w-1/2 mt-3">
          <h1 className="font-bold text-2xl">
            how to choose bicycle for spring in australia shopping centers?
          </h1>
          <p className="text-[#cacaca] text-sm mt-3">
            how to choose best bicycle for spring in australia shops how to
            <span>
              choose best bike for spring in australia shops how to...
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 font-bold inline-block"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </p>
          <div className="flex flex-row items-center mt-3">
            <div className="bg-[#BDDDFF] w-12 h-12 rounded-lg overflow-hidden ">
              <Image
                src="/img/face-1.png"
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
            <div className="flex flex-col ml-2">
              <h className="font-bold text-sm">By : Sebastian</h>
              <small class="text-[#a6aaad]">Just now</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainart;
