import React, { useState } from "react";
import Header from "./Header";

const Missing_Found = () => {
  const [activeTab, setActiveTab] = useState("app");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header />
      <div className="w-2/3 mt-[8rem]">
        <div className="relative right-0">
          <ul
            className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
            data-tabs="tabs"
            role="list"
          >
            <li className="z-30 flex-auto text-center">
              <a
                onClick={() => handleTabClick("app")}
                className={`${
                  activeTab === "app"
                    ? "bg-yellow-400 text-black"
                    : "text-slate-700 bg-inherit"
                } z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer`}
                data-tab-target=""
                active=""
                role="tab"
                aria-selected={activeTab === "app"}
                aria-controls="app"
              >
                <span className="ml-1">Missing</span>
              </a>
            </li>
            <li className="z-30 flex-auto text-center">
              <a
                onClick={() => handleTabClick("message")}
                className={`${
                  activeTab === "message"
                    ? "bg-yellow-400 text-black"
                    : "text-slate-700 bg-inherit"
                } z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer`}
                data-tab-target=""
                role="tab"
                aria-selected={activeTab === "message"}
                aria-controls="message"
              >
                <span className="ml-1">Found</span>
              </a>
            </li>
          </ul>
          <div data-tab-content="" className="p-5">
            <div
              className={`${
                activeTab === "app" ? "block opacity-100" : "hidden opacity-0"
              }`}
              id="app"
              role="tabpanel"
            >
              <p className="font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500 flex items-center space-x-8">
                <div class="relative flex flex-col text-gray-700  bg-white shadow-md bg-clip-border rounded-xl w-40">
                  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700  bg-white shadow-lg bg-clip-border rounded-xl h-20">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3280/3280979.png"
                      alt="profile-picture"
                    />
                  </div>
                  <div class=" text-center ">
                    <a
                      href="/PersonForm"
                      className="block font-sans  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 hover:bg-yellow-200"
                    >
                      Person
                    </a>
                  </div>
                </div>
                <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-40">
                  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-20">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2962/2962303.png"
                      alt="profile-picture"
                    />
                  </div>
                  <div class=" text-center ">
                  <a
                      href="/VechileForm"
                      className="block font-sans  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 hover:bg-yellow-200"
                    >
                      Vechile
                    </a>
                  </div>
                </div>
                <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-40">
                  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-20">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3460/3460335.png"
                      alt="profile-picture"
                    />
                  </div>
                  <div class=" text-center ">
                  <a
                      href="/PetForm"
                      className="block font-sans  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 hover:bg-yellow-200"
                    >
                      Pets
                    </a>
                  </div>
                </div>
                <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-40">
                  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-20">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3277/3277380.png"
                      alt="profile-picture"
                    />
                  </div>
                  <div class=" text-center ">
                  <a
                      href="/BagForm"
                      className="block font-sans  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 hover:bg-yellow-200"
                    >
                      Bag
                    </a>
                  </div>
                </div>
                <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-40">
                  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-20">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3437/3437364.png"
                      alt="profile-picture"
                    />
                  </div>
                  <div class=" text-center ">
                  <a
                      href="/MobileForm"
                      className="block font-sans  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 hover:bg-yellow-200"
                    >
                      Mobiles
                    </a>
                  </div>
                </div>
                <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-40">
                  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-20">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/10348/10348626.png"
                      alt="profile-picture"
                    />
                  </div>
                  <div>
                  <a
                      href="/OtherForm"
                      className="block font-sans  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 hover:bg-yellow-200 ml-7"
                    >
                      Others
                    </a>
                  </div>
                </div>
              </p>
            </div>
            <div
              className={`${
                activeTab === "message"
                  ? "block opacity-100"
                  : "hidden opacity-0"
              }`}
              id="message"
              role="tabpanel"
            >
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
                Not found
              </p>
            </div>
            <div
              className={`${
                activeTab === "settings"
                  ? "block opacity-100"
                  : "hidden opacity-0"
              }`}
              id="settings"
              role="tabpanel"
            >
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
                Comparing yourself to others is the thief of joy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Missing_Found;
