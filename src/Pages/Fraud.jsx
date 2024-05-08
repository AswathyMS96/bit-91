import React, { useEffect } from "react";
import { SuspiciousSvg } from "./SupportSvg";
import QA from "./QA";
import { motion } from "framer-motion";

const Fraud = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendMail = () => {
    window.location.href = "mailto:bit91web@gmail.com";
  };
  const startContent = [
    {
      head: "Lorem ipsum dolor sit amet consectetur.",
      sub: [
        {
          ques: "Lorem ipsum dolor sit amet consectetur",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Mattis mi pellentesque ninsi diam.",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Velit justo facilisis enium ipsum",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Sit diam ultrices nulla nisl in qyam sit",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Montes urna commondo etiam mauris adipiscing enim.",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
      ],
    },
    {
      head: "Lorem ipsum dolor sit amet consectetur.",
      sub: [
        {
          ques: "Lorem ipsum dolor sit amet consectetur",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Mattis mi pellentesque ninsi diam.",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Velit justo facilisis enium ipsum",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Sit diam ultrices nulla nisl in qyam sit",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Montes urna commondo etiam mauris adipiscing enim.",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
      ],
    },
    {
      head: "Lorem ipsum dolor sit amet consectetur.",
      sub: [
        {
          ques: "Lorem ipsum dolor sit amet consectetur",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Mattis mi pellentesque ninsi diam.",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Velit justo facilisis enium ipsum",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Sit diam ultrices nulla nisl in qyam sit",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Montes urna commondo etiam mauris adipiscing enim.",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
      ],
    },
    {
      head: "Lorem ipsum dolor sit amet consectetur.",
      sub: [
        {
          ques: "Lorem ipsum dolor sit amet consectetur",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Mattis mi pellentesque ninsi diam.",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Velit justo facilisis enium ipsum",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Sit diam ultrices nulla nisl in qyam sit",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
        {
          ques: "Montes urna commondo etiam mauris adipiscing enim.",
          ans: "Blandit neque suspendisse pulvinar nam. Accumsan accumsan nunc cras egestas aenean nec sollicitudin ultricies sollicitudin. Enim ac dignissim nunc elit tristique velit lorem. Neque est bibendum nunc faucibus facilisis accumsan mi.",
        },
      ],
    },
  ];
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
      className="md:mt-[70px] lg:mt-[90px]"
    >
      <div className="w-[100vw] h-fit py-20 flex flex-col items-center justify-center font-fits font-normal text-base">
        <div className="flex flex-col items-center justify-center gap-5">
          <div class="relative border-[0.5px] bg-gradient-to-r from-[#52b5b6] to-[#123678] p-1 rounded-2xl">
            <motion.input
              initial={{ opacity: 1, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              class="pl-28 md:pr-52 lg:pr-96 sm:pr-20 pr-12  origin-left min-w-[28vw] text-gray-800 leading-tight  outline-none py-4 bg-white rounded-2xl md:text-4xl"
              id="username"
              type="text"
              placeholder="How can we help you?"
            />

            <div class="absolute left-6 inset-y-0 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 ml-3 text-gray-400 hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000000"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 50, filter: `blur(5px)` }}
            whileInView={{ opacity: 1, y: 0, filter: `blur(0px)` }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="lg:text-5xl flex flex-row gap-2 items-center text-3xl font-bold text-[#000000] mt-6 px-10 md:px-0"
          >
            <span>
              <SuspiciousSvg />
            </span>
            Fraud and Suspicious Activity
          </motion.p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:w-[60vw] md:w-[85vw] w-[100vw] lg:px-32 md:px-10 px-5 gap-y-4 ">
        {startContent.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 100, filter: `blur(1px)` }}
              whileInView={{ opacity: 1, y: 0, filter: `blur(0px)` }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="flex flex-col font-fits text-xl font-normal gap-4"
            >
              <p className="font-semibold text-[31px]">{item.head}</p>
              {item.sub.map((node, index) => {
                return <QA ques={node.ques} ans={node.ans} type="started" />;
              })}
              {index !== startContent.length - 1 && (
                <hr className="w-[80vw] border border-[#a3a3a3] opacity-30 my-2" />
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="bg-contactBg bg-contain xl:h-[368px] lg:h-[280px] md:h-[200px] h-[150px] mb-3  bg-no-repeat lg:mx-32 md:mx-16 md:mb-5 mt-10 lg:mb-10 mx-5 relative">
        <div className="flex flex-col justify-center items-center font-fits gap-2 absolute lg:left-[50%] 2xl:left-[40%] md:left-[40%] sm:left-[29%] left-[40%] sm:top-[30%] top-[20%]">
          <p className="font-semibold xl:text-[31px] lg:text-2xl md:text-xl sm:text-base text-[10px] text-black">
            {" "}
            Can’t find what you are looking for?
          </p>
          <motion.button
            whileHover={{ scale: [1, 1.05, 1], transition: { duration: 0.2 } }}
            onClick={() => sendMail()}
            className="bg-[#123678] text-white flex  md:px-5 md:py-[10px] sm:px-3 sm:py-2 p-1 rounded-lg text-base items-center gap-1"
            mail
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_11_1859)">
                <path
                  d="M0.5 10.9V21.3C0.5 21.9896 0.773928 22.6509 1.26152 23.1385C1.74912 23.6261 2.41044 23.9 3.1 23.9H23.9C24.5896 23.9 25.2509 23.6261 25.7385 23.1385C26.2261 22.6509 26.5 21.9896 26.5 21.3V10.9L13.5 16.1L0.5 10.9Z"
                  fill="white"
                />
                <path
                  d="M3.1 3.09998C2.41044 3.09998 1.74912 3.3739 1.26152 3.8615C0.773928 4.34909 0.5 5.01041 0.5 5.69998L0.5 8.29998L13.5 13.5L26.5 8.29998V5.69998C26.5 5.01041 26.2261 4.34909 25.7385 3.8615C25.2509 3.3739 24.5896 3.09998 23.9 3.09998H3.1Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_11_1859">
                  <rect
                    width="26"
                    height="26"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Contact us
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Fraud;
