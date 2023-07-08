"use client";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div>
          <AnimatePresence>
            <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-[#F2F3F5] font-inter overflow-hidden">
              <svg
                style={{ filter: "contrast(125%) brightness(110%)" }}
                className="fixed z-[1] w-full h-full opacity-[35%]"
              >
                <filter id="noise">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency=".7"
                    numOctaves="3"
                    stitchTiles="stitch"
                  ></feTurbulence>
                  <feColorMatrix type="saturate" values="0"></feColorMatrix>
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)"></rect>
              </svg>
              <main className="flex flex-col justify-center h-[90%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.95,
                    ease: [0.165, 0.84, 0.44, 1],
                  }}
                  className="block w-[200px] row-start-2 mb-8 md:mb-6"
                >
                  ONROAD |{" "}
                  <span className="font-inter text-[#407BBF] text-sm">
                    Driving Education
                  </span>
                </motion.h1>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.95,
                    ease: [0.165, 0.84, 0.44, 1],
                  }}
                  className="relative md:ml-[-10px] md:mb-[37px] font-extrabold text-[14vw] md:text-[90px] font-inter text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
                >
                  <span className="md:text-[vw]">
                    Nigeria&apos;s leading{" "}
                    <span className="text-lg md:text-xl">experts</span>
                  </span>
                  <br />
                  in{" "}
                  <span className="text-[#407BBF] text-[6vw]">
                    Driving Education
                  </span>
                  <span className="font-inter text-[#407BBF]">.</span>
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.95,
                    ease: [0.165, 0.84, 0.44, 1],
                  }}
                  className="flex flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-0 md:mb-[35px] max-w-2xl md:space-x-8"
                >
                  <div className="w-1/2">
                    <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                      About us.
                    </h2>
                    <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                      Nigeria&apos;s leading experts in driver education will
                      provide you with the skills required to be a safe and
                      confident driver for life.
                    </p>
                  </div>
                  <div className="w-1/2">
                    <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                      Our Service.
                    </h2>
                    <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                      We offer a wide range of driving lessons and pride
                      ourselves in delivering quality education with an
                      excellent and professional team.
                    </p>
                  </div>
                </motion.div>

                <div className="flex gap-[15px] mt-8 md:mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.55,
                      duration: 0.55,
                      ease: [0.075, 0.82, 0.965, 1],
                    }}
                  >
                    <Link
                      href="/more"
                      className="group rounded-full pl-[8px] min-w-[180px] pr-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                      style={{
                        boxShadow:
                          "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      Learn more
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.65,
                      duration: 0.55,
                      ease: [0.075, 0.82, 0.965, 1],
                    }}
                  >
                    <Link
                      href="/registration"
                      className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                      style={{
                        boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                      }}
                    >
                      <span className="mr-2"> Register now </span>
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.75 6.75L19.25 12L13.75 17.25"
                          stroke="#1E2B3A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19 12H4.75"
                          stroke="#1E2B3A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </main>

              <div
                className="fixed top-0 right-0 w-[80%] md:w-1/2 h-screen bg-[#1F2B3A]/20"
                style={{
                  clipPath:
                    "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
                }}
              ></div>

              <div className="sm:px-14 h-[60px] bg-[#1D2B3A] fixed bottom-0 z-20 w-full flex flex-row items-center justify-start">
                <p className="text-white/80 text-base md:text-lg font-semibold md:leading-[60px] whitespace-nowrap flex flex-row px-4">
                  Sponsors
                </p>

                {/*  uniuyo logo sponsor */}
                <svg
                  className="w-[50px] opacity-80"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="124.000000pt"
                  height="124.000000pt"
                  viewBox="0 0 124.000000 124.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {" "}
                  <g
                    transform="translate(0.000000,124.000000) scale(0.100000,-0.100000)"
                    fill="#ffff"
                    stroke="none"
                  >
                    {" "}
                    <path d="M532 1230 c-135 -19 -248 -75 -348 -175 -158 -158 -217 -386 -157 -605 54 -197 224 -366 428 -426 81 -23 248 -23 330 0 282 82 472 351 450 636 -29 365 -342 619 -703 570z m219 -35 c207 -44 395 -228 444 -436 31 -133 13 -283 -48 -408 -43 -89 -158 -204 -253 -253 -235 -123 -504 -80 -694 111 -114 116 -170 248 -170 404 0 104 15 167 62 267 32 66 56 101 113 156 148 147 340 202 546 159z" />{" "}
                    <path d="M533 1153 c-19 -7 -16 -20 7 -26 11 -3 20 -9 19 -14 -5 -28 3 -53 17 -53 12 0 15 9 12 38 -2 27 1 37 11 37 8 0 16 6 19 13 4 12 -58 16 -85 5z" />{" "}
                    <path d="M635 1143 c5 -10 13 -33 19 -50 11 -33 36 -46 36 -19 0 8 12 28 26 45 24 29 25 31 5 31 -11 0 -25 -8 -30 -17 -10 -16 -11 -16 -17 5 -4 13 -14 22 -26 22 -15 0 -18 -4 -13 -17z" />{" "}
                    <path d="M485 1103 c8 -57 12 -64 29 -57 19 7 -1 104 -21 104 -12 0 -14 -9 -8 -47z" />{" "}
                    <path d="M384 1106 c-27 -21 -7 -52 30 -48 15 2 26 -1 26 -8 0 -7 -6 -10 -13 -7 -22 8 -41 -8 -25 -21 22 -17 63 8 63 38 0 23 -4 25 -35 22 -29 -3 -38 10 -9 14 5 1 14 2 19 3 6 0 10 6 10 11 0 15 -43 12 -66 -4z" />{" "}
                    <path d="M847 1078 c-9 -7 -19 -25 -22 -39 -5 -21 -1 -30 16 -43 30 -21 52 -20 72 2 22 25 21 48 -3 72 -23 23 -40 25 -63 8z m53 -31 c0 -7 -6 -21 -12 -30 -18 -23 -42 -7 -33 22 7 23 45 30 45 8z" />{" "}
                    <path d="M291 1051 l-24 -19 30 -41 c22 -30 32 -38 41 -29 9 9 9 15 0 25 -15 18 -2 29 16 14 10 -8 21 -9 32 -3 15 8 15 10 -3 23 -11 8 -22 22 -26 32 -8 22 -36 21 -66 -2z" />{" "}
                    <path d="M528 1029 c-113 -26 -235 -127 -286 -236 -25 -53 -27 -68 -27 -180 l0 -122 -63 -36 c-71 -41 -72 -46 -24 -120 74 -116 200 -218 310 -252 84 -26 276 -23 357 6 134 48 273 161 333 269 l23 41 -71 36 c-57 29 -70 40 -65 53 4 9 11 46 16 80 24 163 -51 322 -192 408 -97 58 -208 78 -311 53z m266 -45 c82 -40 150 -109 189 -191 29 -63 32 -76 32 -168 -1 -125 -24 -191 -96 -269 -90 -99 -225 -148 -351 -127 -177 29 -309 155 -339 324 -35 196 82 391 274 453 27 9 76 13 137 11 82 -3 103 -7 154 -33z m-564 -543 c0 -5 7 -17 16 -25 8 -9 11 -16 6 -16 -5 0 -9 -7 -9 -15 0 -10 4 -12 12 -5 9 7 16 6 24 -3 6 -8 9 -16 6 -19 -3 -3 4 -13 15 -23 11 -10 20 -24 20 -32 0 -8 4 -11 10 -8 9 6 15 -8 11 -29 -1 -5 4 -4 11 2 8 6 19 7 26 3 10 -6 9 -11 -3 -21 -13 -11 -15 -10 -9 6 5 15 4 16 -4 4 -6 -8 -8 -18 -5 -23 3 -5 -4 -6 -15 -3 -17 6 -20 3 -18 -18 2 -18 -1 -23 -12 -18 -11 4 -13 2 -7 -9 5 -8 -14 6 -43 31 -28 25 -51 51 -52 58 0 6 -5 12 -10 12 -6 0 -18 16 -27 35 -9 19 -19 32 -23 30 -4 -2 -5 8 -3 23 4 21 2 24 -6 12 -6 -8 -11 -10 -11 -5 0 16 13 29 45 47 35 19 55 22 55 9z m815 -28 c23 -4 59 -22 45 -23 -13 0 -13 -2 0 -10 12 -7 10 -14 -11 -44 -32 -45 -136 -136 -155 -136 -9 0 -12 -5 -8 -12 4 -7 3 -8 -5 -4 -6 4 -9 11 -6 16 3 4 -7 18 -22 30 -16 12 -21 18 -13 14 13 -7 13 -5 2 8 -11 14 -10 17 7 23 12 3 21 11 21 17 0 6 7 5 17 -3 15 -13 15 -12 4 8 -10 19 -9 22 4 17 8 -4 15 -1 15 6 0 7 11 23 24 35 19 17 27 20 37 11 11 -9 11 -8 0 6 -10 13 -9 20 5 37 10 11 21 17 24 13 3 -4 10 -8 15 -9z m-651 -189 c11 -4 16 -20 17 -48 l1 -41 14 33 c10 24 19 32 30 28 9 -3 20 -6 25 -6 5 0 9 -8 9 -17 0 -13 3 -14 12 -5 15 15 54 16 63 2 4 -6 10 -8 15 -5 4 2 38 9 76 14 49 7 72 7 82 -1 10 -9 12 -8 10 3 -2 8 4 14 12 14 14 0 42 -72 33 -87 -9 -17 -22 -7 -28 22 -4 17 -11 30 -17 30 -10 0 -8 -17 7 -52 5 -13 3 -18 -8 -18 -8 0 -17 7 -21 15 -7 20 -28 19 -24 -1 5 -30 -21 -27 -27 3 -11 49 -13 51 -39 46 -14 -3 -24 -9 -21 -13 3 -5 14 -6 25 -3 11 3 20 0 20 -6 0 -6 -9 -11 -20 -11 -11 0 -20 -4 -20 -10 0 -5 11 -10 25 -10 14 0 25 -4 25 -10 0 -5 -11 -10 -24 -10 -13 0 -31 -3 -40 -6 -13 -5 -16 1 -16 30 0 29 -4 36 -19 36 -11 0 -22 4 -26 10 -3 5 -12 7 -21 3 -22 -8 -13 -47 11 -50 11 -2 14 0 8 3 -24 11 -14 31 12 26 19 -3 25 -11 25 -29 0 -22 -3 -24 -42 -21 -34 2 -45 8 -55 28 l-13 25 0 -23 c0 -15 -5 -22 -12 -19 -14 5 -15 18 -4 57 4 17 0 13 -14 -12 -26 -49 -50 -42 -51 16 l-1 41 -14 -34 c-23 -51 -40 -25 -18 28 9 22 18 41 19 41 2 0 10 -3 19 -6z m481 -34 c25 -26 34 -41 25 -41 -8 -1 -22 -3 -30 -4 -8 -1 -21 -3 -27 -4 -7 0 -13 -8 -13 -16 0 -8 -4 -15 -9 -15 -5 0 -12 23 -16 51 -5 39 -4 54 6 60 21 13 22 12 64 -31z" />{" "}
                    <path d="M513 869 c-69 -27 -70 -45 -2 -40 42 2 55 -1 75 -20 24 -22 29 -40 38 -136 3 -33 1 -53 -5 -53 -6 0 -8 4 -5 8 3 5 -3 22 -13 38 -10 16 -17 37 -15 47 1 9 -2 17 -7 17 -4 0 -6 6 -3 14 3 8 1 17 -5 21 -7 4 -11 -8 -11 -32 0 -45 48 -152 60 -133 4 7 8 0 8 -16 0 -29 -1 -28 -44 20 -24 27 -41 53 -38 58 3 4 1 8 -4 8 -4 0 -14 16 -22 35 -8 19 -20 35 -28 35 -18 0 -7 -35 24 -77 30 -40 30 -46 -1 -40 -20 3 -40 -7 -87 -44 -33 -27 -56 -49 -51 -49 6 0 33 18 61 40 60 48 98 52 148 14 18 -14 32 -29 30 -33 -3 -4 4 -7 14 -7 10 0 18 3 17 7 -1 3 12 18 29 32 47 39 80 35 137 -18 54 -50 45 -58 -33 -30 -23 8 -54 15 -69 14 -18 -1 -13 -4 16 -10 24 -4 51 -12 60 -18 18 -10 17 -10 -104 3 -24 2 -46 0 -49 -5 -3 -6 -12 -5 -22 3 -9 7 -13 9 -10 3 4 -6 -28 -10 -89 -10 -94 0 -94 0 -52 13 24 7 64 11 88 9 27 -3 38 -2 30 4 -22 14 -69 11 -140 -9 -49 -14 -72 -16 -90 -8 -34 14 -33 14 -19 33 7 10 -1 3 -19 -15 -21 -22 -31 -42 -31 -63 0 -27 6 -33 53 -55 165 -75 327 -82 529 -23 75 22 88 36 88 98 0 45 -1 45 -46 32 -30 -8 -35 -5 -80 40 -35 35 -56 49 -76 49 l-28 0 30 47 c34 53 37 75 15 93 -18 15 -30 6 -39 -30 -6 -24 -6 -24 9 3 9 15 21 25 27 21 7 -4 7 -9 0 -13 -6 -3 -14 -19 -17 -34 -4 -15 -11 -27 -16 -27 -5 0 -9 -6 -9 -13 0 -8 -16 -31 -36 -53 -36 -39 -34 -32 13 46 17 28 20 42 13 70 -5 23 -8 27 -9 13 -1 -12 -6 -25 -11 -28 -6 -4 -8 -10 -5 -15 3 -5 -5 -21 -19 -36 l-23 -28 4 64 c8 108 41 146 116 134 50 -8 47 10 -5 31 -67 28 -182 30 -245 4z m135 -32 c3 -16 -13 -18 -37 -3 -11 7 -11 10 0 17 18 11 33 6 37 -14z m-103 -357 c49 -6 62 -5 69 8 8 14 10 14 20 0 10 -13 24 -13 116 -1 121 15 160 13 80 -6 -119 -28 -407 -22 -460 10 -15 9 52 5 175 -11z m-99 -33 c6 0 12 -11 12 -24 0 -30 -28 -31 -29 0 0 21 -1 21 -9 2 -9 -20 -9 -20 -9 0 -1 13 -4 16 -9 8 -4 -6 -19 -9 -35 -6 -20 4 -27 11 -27 28 0 23 0 23 48 8 26 -8 52 -15 58 -16z m454 3 c0 -14 -11 -22 -42 -30 -24 -6 -57 -15 -75 -20 -26 -7 -32 -5 -36 12 -6 21 2 26 48 32 17 2 37 6 45 9 57 21 60 21 60 -3z m-401 -33 c1 9 25 12 86 10 79 -2 85 -3 85 -23 0 -18 -6 -20 -42 -18 -24 0 -67 2 -95 3 -51 1 -53 2 -52 29 0 24 1 25 9 7 5 -11 9 -15 9 -8z m225 -3 c9 -23 8 -24 -14 -24 -11 0 -20 2 -20 4 0 12 13 36 20 36 4 0 11 -7 14 -16z" />{" "}
                    <path d="M943 991 c-18 -15 -33 -33 -33 -39 0 -16 27 -15 34 1 3 8 8 7 16 -6 6 -9 16 -15 21 -11 6 4 6 11 -2 20 -16 19 -4 30 15 14 29 -23 37 -4 9 22 l-28 26 -32 -27z" />{" "}
                    <path d="M220 985 c-25 -26 -21 -38 25 -77 19 -16 21 -15 43 4 12 12 22 28 22 36 0 12 -4 12 -20 -3 -23 -21 -39 -13 -20 10 7 9 10 19 6 23 -4 4 -14 -2 -22 -12 -7 -11 -17 -17 -21 -13 -3 4 2 15 11 26 26 28 3 34 -24 6z" />{" "}
                    <path d="M168 919 c-3 -8 6 -27 21 -42 l26 -29 -30 8 c-45 10 -47 10 -52 -3 -5 -13 22 -22 72 -26 42 -3 43 24 2 69 -25 27 -36 34 -39 23z" />{" "}
                    <path d="M1065 848 c-52 -19 -62 -50 -28 -89 11 -13 20 -14 53 -5 23 6 40 16 40 24 0 14 -9 14 -70 0 -8 -2 -15 5 -18 14 -2 12 6 20 30 26 18 4 34 16 36 25 4 19 -1 20 -43 5z" />{" "}
                    <path d="M110 796 c0 -8 19 -18 44 -25 56 -14 56 -14 56 4 0 8 -16 19 -37 24 -50 14 -63 14 -63 -3z" />{" "}
                    <path d="M90 746 c0 -12 10 -16 36 -16 41 0 38 -15 -5 -25 -16 -3 -31 -14 -34 -24 -4 -15 3 -20 32 -25 56 -9 71 -7 71 9 0 11 -11 15 -37 16 l-38 1 35 12 c23 8 36 20 38 34 3 19 -1 22 -31 22 -20 0 -42 3 -51 6 -11 4 -16 1 -16 -10z" />{" "}
                    <path d="M1105 715 c-16 -13 -38 -26 -50 -28 -20 -3 -20 -4 0 -11 16 -6 67 -29 97 -44 3 -2 4 6 1 17 -3 10 -15 22 -26 25 -21 6 -21 7 -4 20 10 8 17 21 15 29 -2 12 -9 11 -33 -8z" />{" "}
                    <path d="M85 619 c-11 -17 3 -23 45 -20 56 4 56 -25 0 -34 -44 -8 -57 -35 -16 -35 48 0 76 17 76 48 0 15 -5 33 -12 40 -15 15 -84 16 -93 1z" />{" "}
                    <path d="M1057 602 c-35 -38 -13 -84 40 -84 26 0 53 24 53 49 0 19 -37 53 -58 53 -11 0 -26 -8 -35 -18z m63 -38 c0 -20 -27 -29 -45 -14 -11 9 -12 16 -5 25 13 16 50 7 50 -11z" />{" "}
                  </g>{" "}
                </svg>
                {/* aces logo sponsor */}
                <svg
                  className="w-[95px] opacity-80"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="259.000000pt"
                  height="194.000000pt"
                  viewBox="0 0 259.000000 194.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {" "}
                  <g
                    transform="translate(0.000000,194.000000) scale(0.100000,-0.100000)"
                    fill="#ffff"
                    stroke="none"
                  >
                    {" "}
                    <path d="M1241 1693 c-1 -7 -4 -12 -8 -11 -13 4 -97 -13 -108 -21 -5 -4 -26 -14 -45 -21 -71 -27 -211 -146 -225 -191 -4 -11 -11 -19 -16 -19 -16 0 -81 -148 -85 -196 -3 -26 -8 -52 -11 -58 -11 -16 -20 -106 -12 -100 5 3 7 -12 5 -33 -5 -54 21 -166 49 -207 28 -41 22 -49 -50 -67 -28 -6 -58 -19 -68 -27 -9 -8 -20 -13 -23 -9 -3 3 -18 -5 -32 -18 -15 -13 -37 -32 -49 -43 -31 -26 -29 -44 8 -66 26 -15 45 -17 125 -13 54 3 94 2 94 -4 0 -5 7 -9 15 -9 15 0 42 -21 122 -98 25 -24 42 -35 39 -25 -6 15 -3 14 13 -4 11 -11 46 -33 78 -48 32 -15 72 -34 88 -43 35 -18 305 -27 305 -10 0 6 7 5 15 -2 13 -11 14 -10 10 2 -4 11 0 15 12 15 18 -1 133 50 143 63 3 3 13 9 22 13 13 4 16 2 12 -11 -5 -14 -4 -14 4 -3 6 8 8 20 5 28 -3 7 1 13 10 13 9 0 28 15 42 32 15 18 24 27 19 19 -5 -10 -3 -12 5 -7 7 5 10 15 6 24 -3 9 -3 13 1 9 10 -9 44 22 44 40 0 8 5 11 10 8 6 -4 9 -1 8 6 -2 6 3 14 11 17 8 2 11 1 8 -4 -9 -15 95 -3 111 12 7 8 18 14 23 14 13 0 11 -18 -3 -23 -8 -4 -9 -6 -2 -6 6 -1 17 6 24 14 10 12 10 15 -1 15 -12 0 -12 2 0 9 8 5 11 17 7 28 -9 30 -67 85 -83 79 -8 -3 -11 -1 -8 4 3 6 -4 10 -17 11 -13 0 -32 5 -43 10 -16 7 -14 8 10 4 22 -4 26 -3 15 5 -8 5 -11 10 -6 10 5 0 3 7 -4 15 -11 13 -10 14 4 9 9 -3 16 -1 16 5 0 6 -4 11 -8 11 -5 0 -6 14 -4 31 3 22 7 27 13 18 5 -8 9 -9 9 -3 0 5 -6 16 -12 23 -11 11 -10 12 1 6 10 -6 12 -2 6 16 -7 23 -6 23 7 5 14 -17 15 -17 21 -2 5 11 3 15 -4 10 -7 -4 -10 -1 -7 7 3 8 1 25 -4 38 -6 17 -5 22 4 18 10 -3 13 13 13 64 0 37 -2 66 -4 63 -8 -7 -30 68 -24 82 3 7 -2 21 -11 30 -10 10 -14 24 -10 36 4 15 3 18 -6 13 -9 -5 -11 -4 -6 3 4 6 1 22 -6 34 -7 13 -12 26 -13 30 0 3 -4 10 -9 15 -5 5 -6 2 -1 -6 5 -9 4 -12 -3 -8 -5 4 -8 16 -5 27 5 19 -29 75 -39 64 -3 -2 -13 11 -22 30 -9 19 -26 36 -39 40 -13 3 -29 17 -35 31 -8 17 -16 23 -28 18 -11 -4 -15 -3 -10 5 8 14 -39 46 -54 37 -5 -3 -10 -2 -10 4 0 11 -158 66 -178 62 -8 -1 -20 3 -28 10 -8 6 -14 7 -14 2 0 -5 -9 -9 -20 -9 -11 0 -20 3 -20 6 0 8 -43 5 -57 -3 -6 -4 -14 -1 -16 5 -4 10 -6 10 -6 1z m229 -54 c310 -100 476 -441 376 -774 -15 -50 -54 -116 -42 -70 4 13 -1 24 -14 33 -17 10 -21 9 -31 -11 -9 -18 -9 -20 2 -10 10 10 16 7 29 -15 11 -18 31 -31 61 -39 51 -14 132 -69 126 -86 -2 -7 -33 -14 -78 -17 l-74 -5 -92 -92 c-75 -76 -107 -99 -178 -133 -92 -45 -176 -62 -269 -54 -66 6 -180 40 -200 60 -9 8 -16 12 -16 8 0 -4 -2 -5 -5 -2 -3 3 6 25 19 49 16 28 27 38 30 29 14 -45 14 -45 15 -27 1 19 21 24 21 5 0 -9 4 -8 10 2 8 13 10 13 10 -2 0 -9 -4 -28 -10 -42 -5 -14 -6 -26 -1 -26 5 0 12 16 15 35 4 20 11 33 15 31 5 -3 6 -17 3 -31 -6 -33 12 -32 24 2 9 26 10 26 27 8 15 -14 21 -15 27 -5 4 7 13 9 19 5 7 -4 17 -2 24 3 14 11 48 12 41 1 -2 -5 -12 -5 -22 -2 -15 6 -15 4 -4 -10 8 -9 12 -26 10 -39 -5 -34 -50 -32 -59 2 -6 23 -7 24 -14 5 -5 -11 -10 -24 -13 -29 -3 -5 0 -6 7 -2 6 4 18 2 26 -4 9 -8 25 -9 42 -4 16 4 31 7 34 6 3 0 4 10 1 25 -4 19 2 31 24 49 l29 23 -70 2 c-107 2 -129 6 -208 40 -135 56 -240 159 -303 296 -44 96 -58 173 -52 291 9 167 56 271 181 395 49 49 91 86 94 84 3 -3 20 3 38 13 97 55 256 67 375 29z m-616 -885 c19 -19 21 -28 3 -21 -23 9 -8 -62 17 -75 11 -6 23 -10 26 -8 3 2 6 -4 8 -13 2 -12 -3 -17 -17 -17 -12 0 -21 6 -21 14 0 8 -7 16 -15 20 -9 3 -15 18 -15 36 0 30 -13 40 -26 18 -5 -7 -3 -8 6 -3 13 8 12 -1 -5 -50 -5 -14 -4 -16 3 -6 7 10 26 -3 82 -59 58 -56 79 -71 97 -67 20 4 22 1 17 -22 -4 -23 -3 -22 10 5 17 37 42 58 34 28 -3 -10 -9 -27 -13 -36 -4 -11 -3 -18 4 -18 6 0 16 12 22 28 7 16 13 22 16 14 3 -7 -3 -24 -12 -38 -13 -20 -22 -24 -48 -20 -17 3 -33 10 -35 15 -2 6 -10 11 -18 11 -9 0 -12 5 -9 10 3 6 0 10 -7 10 -8 0 -38 25 -68 55 l-54 55 -133 0 c-121 0 -133 2 -133 18 0 32 212 134 241 117 5 -4 9 -1 9 4 0 16 16 13 34 -5z m94 -146 c-7 -19 -38 -22 -38 -4 0 10 9 16 21 16 12 0 19 -5 17 -12z m32 -33 c0 -8 -9 -15 -20 -15 -20 0 -26 11 -13 23 12 13 33 7 33 -8z m30 -31 c0 -14 -31 -20 -43 -7 -8 8 25 33 35 27 5 -3 8 -12 8 -20z" />{" "}
                    <path d="M1261 1627 c-1 -26 17 -57 34 -57 21 0 28 18 19 48 -8 27 -8 27 -14 -8 l-6 -35 -16 35 c-10 22 -17 28 -17 17z" />{" "}
                    <path d="M1338 1628 c7 -7 12 -22 12 -35 0 -13 4 -23 9 -23 4 0 6 11 3 25 -2 15 0 25 7 25 6 0 11 5 11 10 0 6 -12 10 -27 10 -21 0 -24 -3 -15 -12z" />{" "}
                    <path d="M1394 1604 c-7 -27 8 -45 36 -43 11 1 10 3 -2 6 -21 5 -23 19 -5 26 10 4 10 6 0 6 -7 1 -13 5 -13 11 0 5 7 6 17 3 11 -4 14 -3 9 5 -13 21 -35 13 -42 -14z" />{" "}
                    <path d="M1205 1593 c3 -16 11 -32 17 -38 7 -7 9 -5 6 5 -3 8 2 20 10 26 19 14 7 34 -20 34 -17 0 -19 -4 -13 -27z" />{" "}
                    <path d="M1456 1613 c-3 -3 -6 -20 -5 -37 0 -17 3 -25 6 -18 4 10 9 9 20 -5 10 -13 13 -14 10 -3 -2 8 0 23 4 32 7 13 4 20 -10 27 -10 6 -21 7 -25 4z" />{" "}
                    <path d="M1158 1585 c-3 -14 -1 -28 3 -31 5 -3 9 3 9 12 0 16 1 16 15 -2 17 -23 19 -14 3 21 -14 32 -24 32 -30 0z" />{" "}
                    <path d="M1524 1566 c-7 -28 1 -46 19 -45 9 0 9 2 0 6 -20 7 -15 23 5 16 15 -6 15 -5 3 10 -12 15 -12 17 3 11 23 -9 20 3 -4 16 -17 9 -20 7 -26 -14z" />{" "}
                    <path d="M1053 1554 c-9 -24 10 -49 38 -49 27 0 37 28 19 50 -17 20 -49 19 -57 -1z m52 -24 c0 -22 -29 -18 -33 3 -3 14 1 18 15 15 10 -2 18 -10 18 -18z" />{" "}
                    <path d="M1572 1535 c-6 -14 -8 -25 -3 -25 5 0 12 6 14 13 3 6 6 2 6 -10 1 -32 16 -36 30 -7 15 34 13 43 -4 20 -14 -19 -15 -19 -15 7 0 34 -13 35 -28 2z" />{" "}
                    <path d="M1250 1539 c-52 -10 -162 -63 -186 -90 -9 -11 -23 -19 -31 -19 -7 0 -13 -5 -13 -10 0 -6 -8 -20 -19 -31 -31 -33 -90 -161 -101 -220 -12 -62 -6 -186 10 -229 1 -3 2 -9 1 -13 -1 -5 7 -23 19 -41 11 -18 17 -36 13 -39 -3 -4 0 -7 7 -7 7 0 10 -3 7 -7 -8 -8 52 -83 110 -139 43 -41 101 -71 180 -94 48 -15 183 -8 242 12 57 19 116 62 113 81 -2 9 2 17 8 17 6 0 8 -5 5 -10 -14 -22 13 -8 43 23 23 24 31 39 26 53 -4 13 -3 15 3 6 14 -19 49 35 78 122 58 173 12 377 -115 506 -66 68 -118 99 -132 78 -8 -10 -9 -9 -5 4 13 40 -149 69 -263 47z m228 -59 c109 -38 206 -138 253 -259 17 -44 22 -78 23 -156 0 -87 -3 -109 -26 -165 -21 -49 -24 -66 -15 -73 9 -6 8 -7 -3 -4 -16 4 -70 -59 -66 -78 2 -5 1 -7 -2 -2 -2 4 -20 -6 -40 -22 -165 -129 -380 -114 -528 36 -209 213 -158 577 100 707 94 47 198 53 304 16z" />{" "}
                    <path d="M1286 1326 c-20 -18 -39 -30 -43 -27 -4 3 -1 -2 6 -11 7 -10 17 -16 21 -13 4 3 28 6 53 6 35 2 44 5 40 17 -7 17 13 32 44 32 12 0 24 4 27 8 3 5 -13 7 -34 5 -21 -1 -42 2 -45 7 -11 18 -33 11 -69 -24z m63 10 c-14 -12 -89 -55 -89 -51 0 9 83 65 88 60 3 -3 3 -7 1 -9z" />{" "}
                    <path d="M1458 1304 c-3 -3 5 -16 19 -30 13 -13 21 -28 18 -34 -3 -5 19 -48 50 -95 30 -47 55 -90 55 -95 0 -5 -19 -29 -42 -53 -94 -98 -103 -108 -85 -102 9 4 17 3 17 -3 0 -6 -10 -14 -22 -18 -70 -22 -161 10 -214 77 -30 37 -32 42 -27 111 2 40 4 81 4 92 0 18 0 18 14 0 8 -11 15 -23 15 -27 0 -5 16 -25 35 -44 19 -19 35 -40 35 -47 0 -7 10 -22 23 -33 12 -12 37 -37 55 -57 18 -20 34 -36 35 -36 2 0 4 14 5 31 2 27 0 30 -19 24 -18 -6 -21 -4 -16 9 4 9 2 16 -4 16 -27 0 -60 65 -37 73 7 2 3 2 -9 1 -33 -6 -37 13 -6 24 16 6 22 11 15 11 -7 1 -22 -4 -32 -9 -13 -7 -21 -7 -25 0 -3 6 5 14 19 20 14 5 26 12 26 15 0 2 -12 0 -26 -5 -27 -11 -48 -5 -39 11 4 5 -1 9 -9 9 -28 0 -17 19 17 29 30 10 29 10 -10 5 -50 -7 -61 13 -13 23 35 7 47 20 31 36 -8 8 -19 6 -43 -7 -17 -11 -28 -15 -25 -9 3 5 -3 14 -13 21 -24 15 -34 -1 -48 -75 -17 -97 14 -201 80 -262 30 -28 49 -38 100 -55 30 -9 7 -48 -38 -62 -35 -11 -28 -12 81 -12 107 0 116 1 86 12 -19 7 -38 22 -42 34 -9 24 -7 26 34 36 20 5 27 12 25 24 -2 10 9 25 27 37 44 30 72 89 80 164 8 79 -14 151 -46 151 -23 0 -24 -13 -5 -33 11 -11 12 -17 4 -25 -7 -7 -8 -15 -4 -19 4 -4 11 -1 16 7 6 9 10 10 10 3 0 -6 -5 -15 -12 -19 -15 -10 -39 26 -32 48 3 11 -1 20 -10 24 -9 3 -16 14 -16 25 0 10 -11 29 -24 43 -24 27 -29 30 -38 20z m-239 -113 c-7 -19 -9 -63 -7 -104 3 -42 2 -63 -3 -50 -14 38 -13 146 1 183 1 3 2 10 0 15 -1 6 3 6 9 -1 8 -7 8 -19 0 -43z" />{" "}
                    <path d="M1395 1278 c-27 -14 -76 -74 -53 -65 10 3 20 2 23 -3 4 -6 1 -10 -4 -10 -6 0 -11 -5 -11 -11 0 -6 9 -8 20 -4 11 4 20 2 20 -4 0 -6 -5 -11 -11 -11 -5 0 -7 -4 -4 -10 3 -5 1 -10 -6 -10 -7 0 -9 -3 -6 -6 4 -4 13 -1 22 6 9 7 19 10 22 6 4 -4 1 -12 -7 -17 -13 -9 -12 -10 2 -5 22 7 35 -13 17 -26 -11 -8 -10 -9 3 -4 10 3 20 1 23 -4 4 -6 2 -10 -3 -10 -6 0 -13 -8 -17 -17 -5 -15 -4 -16 6 -5 18 17 32 15 25 -4 -5 -12 -2 -15 10 -10 12 4 14 1 9 -14 -5 -15 -3 -18 8 -14 10 3 18 -2 22 -15 9 -29 21 -26 55 10 l28 31 -79 119 c-44 66 -83 119 -87 118 -4 0 -16 -5 -27 -11z m58 -55 c5 -3 6 -15 3 -27 -7 -30 9 -55 26 -38 9 9 9 12 -5 12 -9 0 -17 5 -17 10 0 15 27 12 33 -4 7 -17 -18 -40 -33 -31 -17 11 -11 0 12 -19 16 -14 20 -15 15 -3 -3 9 1 18 9 21 13 5 19 -11 15 -37 -1 -4 6 -7 15 -5 11 2 17 -5 20 -24 1 -15 -2 -30 -7 -34 -5 -3 -7 -10 -4 -15 3 -5 -1 -6 -11 -2 -15 5 -15 7 0 15 9 5 16 14 16 21 0 8 -3 8 -9 -2 -7 -10 -13 -11 -27 -2 -11 6 -16 11 -11 11 4 0 -5 14 -20 31 -16 17 -28 38 -28 47 -1 10 -7 16 -15 14 -11 -3 -11 0 1 14 10 13 10 16 1 10 -14 -8 -41 19 -42 42 0 12 39 8 63 -5z" />{" "}
                    <path d="M1002 1518 c-17 -17 -15 -32 7 -52 20 -18 46 -13 55 10 6 17 -6 18 -21 3 -6 -6 -16 -8 -22 -5 -14 9 -14 36 -1 36 6 0 10 5 10 10 0 14 -13 13 -28 -2z" />{" "}
                    <path d="M1630 1495 c-11 -13 -10 -19 5 -35 13 -14 22 -17 29 -10 7 7 6 14 -3 23 -11 10 -13 10 -7 0 4 -7 2 -13 -3 -13 -12 0 -15 23 -4 33 3 4 13 1 21 -6 13 -10 14 -9 10 3 -7 21 -32 24 -48 5z" />{" "}
                    <path d="M934 1453 c-9 -15 -6 -22 17 -41 17 -13 30 -18 34 -12 3 5 1 10 -5 10 -7 0 -9 8 -4 22 6 21 5 22 -11 8 -16 -14 -17 -13 -11 8 9 26 -5 29 -20 5z" />{" "}
                    <path d="M1682 1450 c-15 -24 -7 -44 14 -36 9 4 14 -2 14 -17 0 -12 9 -33 20 -47 l19 -25 -5 25 c-5 20 -3 22 5 10 8 -11 11 -12 11 -2 0 7 4 10 10 7 6 -3 7 1 4 9 -7 18 -20 21 -29 6 -3 -5 -11 -10 -17 -10 -6 0 -4 8 5 18 22 24 22 38 0 21 -15 -13 -16 -12 -11 9 7 24 -1 29 -20 10 -20 -20 -26 1 -7 22 10 11 14 20 9 20 -5 0 -15 -9 -22 -20z" />{" "}
                    <path d="M889 1394 c-19 -23 1 -49 37 -49 20 0 30 6 32 18 8 40 -43 63 -69 31z m51 -25 c0 -15 -4 -19 -16 -15 -9 3 -18 6 -20 6 -2 0 -4 7 -4 15 0 8 9 15 20 15 14 0 20 -7 20 -21z" />{" "}
                    <path d="M1767 1328 c-12 -9 -14 -17 -7 -28 7 -11 10 -11 10 -2 0 7 5 10 10 7 6 -3 10 -1 10 5 0 6 4 8 10 5 6 -3 7 1 4 9 -7 19 -15 20 -37 4z" />{" "}
                    <path d="M850 1320 c0 -5 8 -14 18 -19 15 -9 15 -10 -5 -11 -36 0 -37 -19 -1 -34 39 -17 50 -12 22 9 -18 14 -18 14 9 15 37 0 34 13 -8 33 -19 9 -35 12 -35 7z" />{" "}
                    <path d="M820 1225 c-20 -24 -3 -55 30 -55 20 0 31 6 35 20 8 25 -10 50 -35 50 -10 0 -23 -7 -30 -15z m48 -22 c-2 -10 -10 -18 -18 -18 -8 0 -16 8 -18 18 -2 12 3 17 18 17 15 0 20 -5 18 -17z" />{" "}
                    <path d="M800 1152 c0 -11 69 -26 78 -18 8 9 1 13 -40 20 -22 4 -38 3 -38 -2z" />{" "}
                    <path d="M1816 1124 c-3 -9 -4 -20 0 -25 7 -12 24 -11 24 2 0 5 -5 7 -11 3 -7 -4 -10 -1 -7 7 7 22 33 17 30 -6 -2 -15 -1 -17 7 -6 5 8 7 20 4 28 -7 18 -40 16 -47 -3z" />{" "}
                    <path d="M800 1098 c0 -23 3 -29 9 -19 5 8 19 12 35 9 14 -3 26 -2 26 3 0 4 -12 9 -27 11 -16 2 -27 8 -25 16 1 6 -2 12 -8 12 -5 0 -10 -15 -10 -32z" />{" "}
                    <path d="M833 1054 c-39 -16 -42 -30 -10 -39 66 -19 63 -19 49 -2 -8 9 -11 25 -7 37 3 11 5 20 3 19 -2 0 -18 -7 -35 -15z" />{" "}
                    <path d="M1817 1047 c-8 -21 10 -32 27 -18 7 6 16 8 19 4 4 -3 7 -1 7 5 0 19 -20 24 -27 6 -6 -16 -7 -16 -13 1 -6 16 -7 17 -13 2z" />{" "}
                    <path d="M805 980 c-8 -13 45 -13 65 0 11 7 6 10 -22 10 -20 0 -40 -4 -43 -10z" />{" "}
                    <path d="M869 946 c10 -12 11 -20 3 -28 -15 -15 -45 -1 -38 17 6 16 -9 21 -19 5 -3 -5 4 -19 15 -30 17 -17 24 -18 41 -10 23 13 23 51 -1 58 -13 5 -13 3 -1 -12z" />{" "}
                    <path d="M1804 935 c-8 -19 3 -35 24 -35 16 1 16 1 0 11 -25 14 -23 32 2 24 11 -4 20 -2 20 4 0 16 -40 13 -46 -4z" />{" "}
                    <path d="M1785 880 c-12 -39 25 -57 44 -21 8 15 6 20 -14 29 -20 9 -25 8 -30 -8z" />{" "}
                    <path d="M860 872 c-24 -20 -19 -48 11 -57 42 -14 68 44 30 65 -14 7 -24 5 -41 -8z m48 -19 c5 -17 -26 -29 -40 -15 -6 6 -7 15 -3 22 9 14 37 9 43 -7z" />{" "}
                    <path d="M910 783 c0 -26 -1 -26 -15 -7 -16 19 -16 19 -13 -1 4 -25 43 -28 43 -3 0 9 4 20 8 24 4 4 7 0 7 -9 0 -9 5 -17 11 -17 6 0 8 7 5 16 -3 9 -6 18 -6 20 0 2 -9 4 -20 4 -15 0 -20 -7 -20 -27z" />{" "}
                    <path d="M946 751 c-3 -5 -3 -17 1 -28 6 -16 5 -17 -12 -3 -16 13 -18 13 -13 0 2 -8 13 -15 24 -15 14 0 18 6 16 25 -3 25 -2 25 14 5 16 -20 16 -20 12 0 -3 21 -32 32 -42 16z" />{" "}
                    <path d="M986 696 c-11 -20 -17 -38 -14 -41 3 -3 22 2 44 12 28 12 34 18 21 21 -10 2 -24 -2 -32 -8 -9 -8 -15 -8 -15 -2 0 6 5 12 11 14 6 2 10 12 8 21 -3 14 -9 9 -23 -17z" />{" "}
                    <path d="M1707 706 c13 -17 21 -21 31 -14 16 14 15 29 -2 22 -8 -3 -17 -1 -21 5 -3 6 -11 11 -16 11 -5 0 -2 -11 8 -24z" />{" "}
                    <path d="M1657 685 c-7 -17 8 -29 25 -19 8 5 9 2 4 -11 -5 -15 -4 -16 9 -5 18 15 9 34 -12 26 -11 -4 -13 -2 -9 9 3 8 1 15 -3 15 -5 0 -11 -7 -14 -15z" />{" "}
                    <path d="M1756 673 c-4 -5 -11 -8 -15 -8 -3 0 -19 -10 -34 -21 -21 -17 -24 -23 -12 -27 8 -4 17 -2 21 4 3 6 13 8 21 5 9 -4 13 -1 10 6 -2 7 -10 12 -16 10 -7 -1 -10 2 -6 7 3 6 12 8 19 5 7 -3 16 2 19 10 7 17 4 20 -7 9z" />{" "}
                    <path d="M1040 635 c-10 -11 -10 -19 -2 -27 15 -15 44 -2 40 19 -4 23 -22 27 -38 8z" />{" "}
                    <path d="M1604 639 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16 -11z" />{" "}
                    <path d="M1640 591 c-14 -10 -43 -28 -65 -40 -22 -11 -33 -21 -26 -21 8 0 12 -2 9 -5 -12 -12 -36 7 -31 26 4 14 0 19 -16 19 -24 0 -28 16 -6 23 11 4 10 4 -2 3 -22 -2 -31 -36 -9 -36 22 0 20 -17 -1 -23 -14 -4 -13 -5 4 -6 12 0 25 -6 29 -13 4 -7 3 -8 -4 -4 -7 4 -12 3 -12 -1 0 -5 -10 -14 -22 -22 -23 -14 -23 -14 -5 7 l19 21 -39 -12 c-36 -11 -67 -36 -56 -47 2 -3 11 4 19 15 15 19 15 19 9 -7 -5 -18 -3 -28 4 -28 6 0 11 7 11 15 0 27 20 15 21 -12 1 -27 1 -27 10 5 11 38 22 40 38 10 11 -22 11 -22 7 5 -2 20 1 30 13 34 9 4 39 21 66 38 28 17 56 35 63 39 8 5 15 -1 21 -16 8 -21 8 -21 13 9 2 18 1 30 -4 27 -4 -3 -8 0 -8 5 0 16 -22 13 -50 -8z" />{" "}
                    <path d="M1218 572 c-43 -52 -43 -54 -15 -47 17 5 27 3 27 -4 0 -6 5 -11 10 -11 12 0 13 67 1 74 -4 3 -15 -2 -23 -12z" />{" "}
                    <path d="M1401 571 c-21 -13 -6 -61 19 -61 11 0 20 4 20 10 0 5 -7 7 -15 4 -8 -4 -15 -2 -15 4 0 6 6 13 13 15 8 4 8 6 -2 6 -11 1 -10 5 5 16 14 11 15 14 4 15 -8 0 -21 -4 -29 -9z" />{" "}
                    <path d="M1302 558 c-26 -26 1 -65 38 -53 26 8 17 25 -11 18 -17 -5 -20 -2 -17 13 3 13 11 18 26 17 12 -2 22 2 22 7 0 14 -44 12 -58 -2z" />{" "}
                    <path d="M1660 551 c0 -7 -4 -9 -10 -6 -5 3 -10 3 -11 -2 0 -4 -2 -16 -4 -25 -2 -10 1 -18 6 -18 11 0 32 50 24 58 -3 3 -5 0 -5 -7z" />{" "}
                    <path d="M1218 430 c-17 -30 -14 -37 10 -21 8 4 12 18 10 30 -3 19 -4 18 -20 -9z" />{" "}
                    <path d="M1380 428 c0 -13 5 -18 14 -15 9 4 17 -1 19 -11 3 -9 5 -3 6 13 1 24 -3 31 -19 32 -14 1 -20 -4 -20 -19z" />{" "}
                  </g>{" "}
                </svg>
              </div>
              {/* image at hero */}
              <div className="invisible sm:invisible lg:visible absolute my-32 right-0 overflow-hidden">
                <Image
                  src="/assets/group35.png"
                  width={420}
                  height={420}
                  alt=""
                />
              </div>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
