import React, { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import cv from "../../assets/cv.pdf";
// import Typical from "react-typical";


const sliderTextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",

    transition: {
      repeat: Infinity,
      repeatType: "mirror",

      duration: 20,
    },
  },
};
const Home = () => {
   const[darkMode,setDarkMode] = useState(false);
  return (
    <>
      <Navbar />
      <div className={`${darkMode && 'dark'}`}>
      <section
        id="Homepage"
        className="flex h-[100vh] flex-col justify-between  overflow-hidden  "
      >
        <div className="h-28"></div>

        <div className="absolute inset-0 w-full"></div>
        <div className="flex relative">
          <div className="w-full max-w-2xl mx-auto relative ">
            <svg
              className="absolute pointer-events-none top-0 translate-x-1/2 left-1/4 -translate-y-1/4 drop-shadow(2px 2px 10px to-blue-400) dropshadow  "
              width="150"
              height="280"
              viewBox="0 0 146 249"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_2)">
                <path
                  d="M94 159L27.8096 124.941C11.4158 116.505 10.2608 93.5026 25.7271 83.4672L122 21"
                  stroke="#6732CA"
                  strokeWidth="30"
                  strokeLinecap="round"
                />
                <path
                  d="M94 159L27.8096 124.941C11.4158 116.505 10.2608 93.5026 25.7271 83.4672L122 21"
                  stroke="#0B6B91"
                  strokeOpacity="0.96"
                  strokeWidth="30"
                  strokeLinecap="round"
                />
                <path
                  d="M50 97L115.206 129.823C131.854 138.204 133.013 161.535 117.277 171.523L22 232"
                  stroke="#2413E0"
                  strokeWidth="30"
                  strokeLinecap="round"
                />
                <path
                  d="M50 97L115.206 129.823C131.854 138.204 133.013 161.535 117.277 171.523L22 232"
                  stroke="#40CBEA"
                  strokeOpacity="0.83"
                  strokeWidth="30"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="146" height="249" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="relative ml-7 flex flex-col gap-5 ">
              <h2 className="text-xl font-bold text-black dark:bg-gradient-to-r from-[#42b4cd] to-white bg-clip-text dark:text-transparent ">
                I'm
              </h2>
              <h1 className="pointer-events-none text-3xl md:text-5xl font-['Spartan'] ">
                Sudipto Roy
              </h1>
              <span className="pointer-events-none font-['merriweather'] italic">web developer
                {/* <Typical
                  loop={Infinity}
                  steps={[
                    "WEB DEVELOPER ",
                    1500,
                    "FRONTEND DEVELOPER",
                    1500,
                    "SOFTWARE ENGINEER",
                    1500,
                  ]}
                /> */}
              </span>
              <div className="flex gap-2">
                <a href={cv}>
                  <button className="rounded-lg px-3 py-1 font-bold relative w-max bg-black  text-white dark:bg-gradient-to-r from-[#42b4cd] to-white  dark:text-black hover:scale-110 duration-500 group z-10 ">
                    Download CV
                  </button>
                </a>
                <button className="rounded-lg px-3 py-1 font-bold relative w-max bg-black  text-white dark:bg-gradient-to-r from-[#42b4cd] to-white  dark:text-black hover:scale-110 duration-500 group z-10">
                  About me
                  <svg
                    className="w-7 absolute top-0 left-24 group-hover:left-28 duration-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="blue"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <ul className="space-y-4 mr-6 dark:text-[#b0b2c3] ml-auto pb-4 z-40">
            <li>
              <svg
                className="w-6 hover:text-blue-600 dark:hover:text-[#6bd3d3] cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                />
              </svg>
            </li>
            <li>
              <svg
                className="w-6  hover:text-blue-600 dark:hover:text-[#6bd3d3] cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </li>
            <li>
              <svg
                className="w-6 hover:text-blue-600 dark:hover:text-[#6bd3d3] cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </li>
            <li>
              <svg
                className="w-6 hover:text-blue-600 dark:hover:text-[#6bd3d3] cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                />
              </svg>
            </li>

            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="whatsapp"
                className=" cursor-pointer w-6 hover:text-blue-600 dark:hover:text-[#6bd3d3]"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                ></path>
              </svg>
            </li>
          </ul>
        </div>
        <motion.div
          className="absolute bottom-[10px] text-[40vh] text-nowrap text-[#0f8bd329] dark:text-[#ffffff09] font-bold "
          variants={sliderTextVariants}
          initial="initial"
          animate="animate"
        >
          MYSELF SUDIPTO ROY
        </motion.div>
        <a className="flex self-center" href="#Projects">
          <button className="rounded-lg px-3 py-1 font-bold relative self-center  bg-black  text-white dark:bg-gradient-to-r from-[#42b4cd] to-white  dark:text-black hover:scale-110 duration-500 group mb-12">
            My works
            <svg
              className="w-6 absolute left-9 group-hover:-bottom-10 duration-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="blue"
                d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              />
            </svg>
          </button>
        </a>
      </section>
      </div>
    </>
  );
};

export default Home;
