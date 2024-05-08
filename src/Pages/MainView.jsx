import React from "react";
import bits from "../assets/outer.png";
import circle from "../assets/circle.png";
import circles from "../assets/circles.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MainView = () => {
  const navigate = useNavigate();
  const handleButtons = (item) => {
    if (item === "scan") {
      navigate("/download");
    } else navigate("/signup");
  };

  const buttonsArray = [
    {
      icon: (
        <svg
          width="72"
          height="73"
          viewBox="0 0 72 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="1"
            width="71"
            height="71"
            rx="11.5"
            stroke="#A3A3A3"
          />
          <path
            d="M53.8044 32.8134H52.3418V32.7352H35.9997V40.2686H46.2616C44.7645 44.6539 40.7416 47.802 35.9997 47.802C29.9831 47.802 25.105 42.7424 25.105 36.5019C25.105 30.2614 29.9831 25.2018 35.9997 25.2018C38.7769 25.2018 41.3036 26.2885 43.2274 28.0636L48.3634 22.7365C45.1204 19.6017 40.7825 17.6685 35.9997 17.6685C25.972 17.6685 17.8418 26.1011 17.8418 36.5019C17.8418 46.9027 25.972 55.3353 35.9997 55.3353C46.0274 55.3353 54.1576 46.9027 54.1576 36.5019C54.1576 35.2391 54.0323 34.0065 53.8044 32.8134Z"
            fill="#FFC107"
          />
          <path
            d="M19.9355 27.7359L25.9013 32.2738C27.5156 28.1286 31.425 25.2018 35.9998 25.2018C38.7771 25.2018 41.3038 26.2885 43.2276 28.0636L48.3635 22.7365C45.1205 19.6017 40.7826 17.6685 35.9998 17.6685C29.0254 17.6685 22.977 21.7525 19.9355 27.7359Z"
            fill="#FF3D00"
          />
          <path
            d="M36 55.3355C40.6902 55.3355 44.9519 53.4738 48.174 50.4463L42.5541 45.5138C40.6698 47.0002 38.3673 47.8041 36 47.8021C31.2772 47.8021 27.267 44.6786 25.7563 40.3196L19.835 45.0515C22.8401 51.1507 28.943 55.3355 36 55.3355Z"
            fill="#4CAF50"
          />
          <path
            d="M53.8047 32.8135H52.3421V32.7354H36V40.2687H46.2619C45.5458 42.3559 44.2558 44.1797 42.5514 45.5148L42.5541 45.5129L48.174 50.4454C47.7763 50.8202 54.1579 45.9188 54.1579 36.502C54.1579 35.2393 54.0326 34.0066 53.8047 32.8135Z"
            fill="#1976D2"
          />
        </svg>
      ),
      link: "",
    },
    {
      icon: (
        <svg
          width="73"
          height="73"
          viewBox="0 0 73 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.982422"
            y="1"
            width="71"
            height="71"
            rx="11.5"
            stroke="#A3A3A3"
          />
          <path
            d="M46.8484 54.1282C44.8369 56.1507 42.6406 55.8314 40.5263 54.8733C38.289 53.894 36.2363 53.8514 33.8758 54.8733C30.92 56.1933 29.36 55.8101 27.5948 54.1282C17.5779 43.4193 19.0558 27.1112 30.4274 26.5151C33.1984 26.6641 35.1279 28.0905 36.7495 28.2183C39.1716 27.7073 41.4911 26.2383 44.0774 26.4299C47.1769 26.6854 49.5169 27.9628 51.0563 30.2621C44.6521 34.2434 46.1711 42.9935 52.0416 45.4419C50.8716 48.6354 49.3527 51.8076 46.8279 54.1495L46.8484 54.1282ZM36.5442 26.3874C36.2363 21.6397 39.9516 17.7223 44.2211 17.3391C44.8163 22.8319 39.4179 26.9196 36.5442 26.3874Z"
            fill="black"
          />
        </svg>
      ),
      link: "",
    },
    {
      icon: (
        <svg
          width="72"
          height="73"
          viewBox="0 0 72 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="1"
            width="71"
            height="71"
            rx="11.5"
            stroke="#123678"
          />
          <path
            d="M45 63.5H39V57.5H45V63.5ZM39 42.5H33V57.5H39V42.5ZM63 36.5H57V48.5H63V36.5ZM57 30.5H51V36.5H57V30.5ZM21 36.5H15V42.5H21V36.5ZM15 30.5H9V36.5H15V30.5ZM36 15.5H42V9.5H36V15.5ZM13.5 14V23H22.5V14H13.5ZM24 27.5H12C10.35 27.5 9 26.15 9 24.5V12.5C9 10.85 10.35 9.5 12 9.5H24C25.65 9.5 27 10.85 27 12.5V24.5C27 26.15 25.65 27.5 24 27.5ZM13.5 50V59H22.5V50H13.5ZM24 63.5H12C10.35 63.5 9 62.15 9 60.5V48.5C9 46.85 10.35 45.5 12 45.5H24C25.65 45.5 27 46.85 27 48.5V60.5C27 62.15 25.65 63.5 24 63.5ZM49.5 14V23H58.5V14H49.5ZM60 27.5H48C46.35 27.5 45 26.15 45 24.5V12.5C45 10.85 46.35 9.5 48 9.5H60C61.65 9.5 63 10.85 63 12.5V24.5C63 26.15 61.65 27.5 60 27.5ZM57 57.5V48.5H45V54.5H51V63.5H63V57.5H57ZM51 36.5H39V42.5H51V36.5ZM39 30.5H21V36.5H27V42.5H33V36.5H39V30.5ZM42 27.5V21.5H36V15.5H30V27.5H42ZM20.25 16.25H15.75V20.75H20.25V16.25ZM20.25 52.25H15.75V56.75H20.25V52.25ZM56.25 16.25H51.75V20.75H56.25V16.25Z"
            fill="black"
          />
        </svg>
      ),
      link: "scan",
    },
  ];

  return (
    <div className="font-fits font-normal md:bg-mainView bg-mobMainView bg-cover bg-no-repeat h-full w-full flex md:flex-row  flex-col justify-center gap-20 items-center sm:px-10 px-5 md:py-60 py-16">
      <motion.div
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="flex flex-col gap-5"
      >
        <p className="text-[#52b5b6] font-bold xl:text-[61px] lg:text-[51px] md:text-[43px] text-[30px] text-left">
          <span className="text-[#123678]">Lorem</span> ipsum dolor sit
        </p>
        <p className="lg:text-xl tmd:ext-lg text-base w-fit xl:max-w-[632px] lg:max-w-[450px] max-w-[400px]">
          Lorem ipsum dolor sit amet consectetur. Sed morbi sed amet leo tempor
          pretium. Vestibulum leo risus pellentesque leo tincidunt. Vel nunc id
          lobortis congue dui metus et non a. Eros tempus rutrum lobortis diam
          purus.
        </p>
        <div className="flex flex-col justify-center md:items-start items-center gap-4">
          <div className="flex flex-row gap-3">
            <input
              class="lg:px-14 md:px-10 px-7 xl:px-20 border bg-transparent border-[#878787] rounded-2xl min-w-[20vw]  lg:py-4 py-2 leading-tight hover:border-black hover:bg-white hover:border-2"
              id="username"
              type="text"
              placeholder="Email / Phone number"
            />
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{
                scale: [1.1],
                transition: { duration: 0.4, ease: "circInOut" },
              }}
              onClick={() => handleButtons("signUp")}
              className="bg-[#123678] text-white rounded-lg w-fit flex items-center justify-center text-base p-2 sm:p-4 md:p-3 lg:px-8 xl:px-14"
            >
              Sign Up
            </motion.button>
          </div>
          <div className="col-span-3">Or Continue With</div>
          <div className="flex flex-row  gap-5 ">
            {buttonsArray?.map((node, index) => {
              return (
                <motion.div
                  initial={{ y: -100 }}
                  whileInView={{ y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.09,
                    ease: "easeInOut",
                    type: "spring",
                  }}
                  key={index}
                  onClick={() => handleButtons("scan")}
                  className={`${
                    index === 2
                      ? "flex flex-col items-start text-center cursor-pointer"
                      : "flex flex-row items-start text-center cursor-pointer"
                  } w-max h-max`}
                >
                  {node?.icon}

                  {index === 2 && (
                    <span className="text-[#878787] mt-2">App Download</span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
      <div className="relative bg-red-600 w-max h-max">
        <motion.img
          // initial={{ opacity: 0, scale: 1.4 }}
          // whileInView={{ opacity: 1, scale: width && width > 768 ? 1.5 : 1 }}
          // transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          src={bits}
          alt="bit"
          className="scale-150"
        />
        <motion.img
          src={circle}
          alt="Rotating Circle"
          className="absolute  "
          initial={{ scale: 1.5, top: "47%", left: "50%", y: "-50%", x: "-50" }}
          animate={{
            rotate: 360,
            scale: 1.5,
            top: "47%",
            left: "50%",
            y: "-50%",
            x: "-50",
          }}
          // whileInView={{scale:}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          // whileHover={{ rotate: 360 }}
        />
        <img
          alt="circles"
          src={circles}
          className="absolute right-0 lg:translate-x-[50%] translate-x-[40%] lg:-translate-y-[20%]  -translate-y-[50%] lg:scale-150 md:scale-75"
        />
      </div>
    </div>
  );
};

export default MainView;
