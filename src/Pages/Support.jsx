import React, { useEffect } from "react";
import "../App.css";
import {
  AccountSvg,
  BankSvg,
  GroupSvg,
  KycSvg,
  LeftArrowSvg,
  SecuritySvg,
  SuspiciousSvg,
  TaxSvg,
  TradeSvg,
} from "./SupportSvg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleClick = (item) => {
    if (item === "Getting Started") {
      navigate("/support/gettingstarted");
    } else if (item === "Security") {
      navigate("/support/security");
    } else if (item === "Account Management") {
      navigate("/support/account");
    } else if (item === "Bank Account Verification(BAV)") {
      navigate("/support/verification");
    } else if (item === "Fraud and Suspicious Activity") {
      navigate("/support/suspicious");
    } else if (item === "Know Your Customer(KYC)") {
      navigate("/support/kyc");
    } else if (item === "Taxes") {
      navigate("/support/taxes");
    } else if (item === "Trading") {
      navigate("/support/trade");
    } else {
      navigate("/");
    }
  };
  const topics = [
    {
      icon: <GroupSvg />,
      head: "Getting Started",
      desc: "Lorem ipsum dolor sit amet consectetur.  ",
    },
    {
      icon: <SecuritySvg />,
      head: "Security",
      desc: "Lorem ipsum dolor sit amet consectetur.  ",
    },
    {
      icon: <AccountSvg />,
      head: "Account Management",
      desc: "Lorem ipsum dolor sit amet consectetur.  ",
    },
    {
      icon: <BankSvg />,
      head: "Bank Account Verification(BAV)",
      desc: "Lorem ipsum dolor sit amet consectetur.  ",
    },
    {
      icon: <SuspiciousSvg />,
      head: "Fraud and Suspicious Activity",
      desc: "Lorem ipsum dolor sit amet consectetur.  ",
    },
    {
      icon: <KycSvg />,
      head: "Know Your Customer(KYC)",
      desc: "Lorem ipsum dolor sit amet consectetur.  ",
    },
    {
      icon: <TaxSvg />,
      head: "Taxes",
      desc: "Lorem ipsum dolor sit amet consectetur.  ",
    },
    {
      icon: <TradeSvg />,
      head: "Trading",
      desc: "Lorem ipsum dolor sit amet consectetur.  ",
    },
    {
      icon: <LeftArrowSvg />,
      head: " ",
      desc: " ",
    },
  ];
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
      className="flex flex-col md:mt-[70px] lg:mt-[90px]"
    >
      <motion.div
        initial={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        whileInView={{
          borderBottomLeftRadius: "50% 100%",
          borderBottomRightRadius: "50% 100%",
        }}
        transition={{ duration: 0.6, ease: "easeInOut", type: "spring" }}
        className="  bg-gradient-to-r  from-[#C5E6E7] to-[#889ABB] bg-cover bg-no-repeat w-[100vw] h-fit py-20 flex flex-col items-center justify-center font-fits font-normal text-base "
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="lg:text-5xl md:text-3xl text-xl font-bold text-[#52b5b6]"
          >
            <span className="text-[#123678]">Hello,</span> How can we help you?
          </motion.p>

          <div class="relative">
            <motion.input
              initial={{ opacity: 1, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              class="appearance-none border-none origin-left outline-none pl-14 md:pr-14 pr-7 border-gray-300 rounded-2xl min-w-[28vw]  py-4 text-gray-800 leading-tight"
              id="username"
              type="text"
              placeholder="Search your questions,keywords..."
            />

            <div class="absolute left-0 inset-y-0 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
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
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="flex justify-center items-center w-full font-fits font-semibold text-[39px] text-[#123678] py-12"
      >
        <p>Help by Topics</p>
      </motion.div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-y-20">
        {topics.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 100, filter: `blur(2px)` }}
              whileInView={{ opacity: 1, y: 0, filter: `blur(0px)` }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "circOut",
              }}
              className="xl:px-32 lg:px-16 px-8 cursor-pointer"
            >
              <div
                onClick={() => handleClick(item.head)}
                className={`Shadow flex flex-col items-center justify-center text-center px-2 ${
                  index === topics.length - 1 ? `py-16 2xl:py-14` : `py-10`
                }
                font-fits rounded-lg`}
              >
                <>{item.icon}</>
                <p className="mt-4 font-semibold text-xl text-[#123678]">
                  {item.head}
                </p>
                <p className="mt-1 font-normal text-base">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Support;
