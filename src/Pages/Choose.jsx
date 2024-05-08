import React from "react";
import comp from "../assets/choose.png";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Choose = () => {
  const coinData = [
    { Name: "UNIQ", Price: "$0.7865", per: "0.04%", uuid: "habsdabsiw" },
    { Name: "UNIQ", Price: "$0.7865", per: "0.04%", uuid: "pjuybsjxh" },
    { Name: "UNIQ", Price: "$0.7865", per: "0.04%", uuid: "kasdyueuk32uj" },
    { Name: "UNIQ", Price: "$0.7865", per: "0.04%", uuid: "asc,jndkbwd" },
    { Name: "UNIQ", Price: "$0.7865", per: "0.04%", uuid: "askdjbiu2jujw" },
    { Name: "UNIQ", Price: "$0.7865", per: "0.04%", uuid: "lqjwdo1u2njndlq" },
    { Name: "UNIQ", Price: "$0.7865", per: "0.04%", uuid: "ad23eihdjkndkb" },
    { Name: "UNIQ", Price: "$0.7865", per: "0.04%", uuid: "adliqoukjndlkwndo" },
    { Name: "UNIQ", Price: "$0.7865", per: "0.04%", uuid: "ladhouhqwnj" },
    { Name: "UNIQ", Price: "$0.7865", per: "0.04%", uuid: "wertyuihjk" },
    { Name: "UN", Price: "$0.7865", per: "0.04%", uuid: "mnbvcxzc" },
    { Name: "UNI", Price: "$0.7865", per: "0.04%", uuid: "mnhgtrewwsd" },
  ];

  const choose = [
    {
      head: "Lorem ipsum dolor",
      subHead:
        "Lorem ipsum dolor sit amet consectetur. Sed morbi sed amet leo tempor pretium. Vestibulum leo risus pellentesque leo tincidunt.",
    },
    {
      head: "Lorem ipsum dolor",
      subHead:
        "Lorem ipsum dolor sit amet consectetur. Sed morbi sed amet leo tempor pretium. Vestibulum leo risus pellentesque leo tincidunt.",
    },
    {
      head: "Lorem ipsum dolor",
      subHead:
        "Lorem ipsum dolor sit amet consectetur. Sed morbi sed amet leo tempor pretium. Vestibulum leo risus pellentesque leo tincidunt.",
    },
  ];
  return (
    <div
      id="Trade"
      className="md:bg-chooseBg bg-mainChooseBg bg-cover bg-no-repeat bg-center w-full h-full"
    >
      {/* desk */}
      <div className=" bg-gradient-to-r from-[#A8DADA] to-[#123678] w-full h-full font-inter font-normal flex flex-row items-center justify-center px-4  ">
        <div className="w-11/12 overflow-x-hidden">
          <Marquee
            speed={25}
            className=" h-max max-w-[100vw] text-base py-2 lg:text-3xl md:text-lg font-title flex gap-5"
          >
            {coinData.map((data, index) => {
              return (
                <div
                  className={`flex flex-col items-center min-w-[100px]
                       border-r-2  border-r-[#123678] text-black lg:px-10 md:px-5`}
                >
                  <p className="text-xl">{data.Name}</p>
                  <p className="lg:text-2xl text-xl">{data.Price}</p>
                  <p className="text-base flex items-center gap-1">
                    {" "}
                    <svg
                      className="fill-black stroke-black"
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.14251 8.57084C5.53091 9.21818 6.46909 9.21818 6.85749 8.57085L11.0913 1.5145C11.4912 0.847973 11.0111 0 10.2338 0H1.76619C0.988896 0 0.508783 0.847972 0.908697 1.5145L5.14251 8.57084Z"
                        fill="black"
                      />
                    </svg>
                    {data.per}
                  </p>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>

      <div className="font-fits flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="text-[#52b5b6] font-bold text-[49px] mt-5"
        >
          <span className="text-[#123678]">Why</span> Choose Us
        </motion.p>
        <div className="flex items-center w-full justify-center xl:gap-40 lg:gap-16 md:gap-8 md:flex-row flex-col font-fits lg:text-xl text-base lg:px-3 md:px-10">
          <motion.div className="flex flex-col lg:gap-6 gap-2 ml-5  max-w-[650px] w-fit">
            {choose.map((node, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "circOut",
                  }}
                >
                  <p className="font-bold">{node.head}</p>
                  <p>{node.subHead}</p>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="w-fit items-start md:mt-0 mt-5">
            <motion.img
              initial={{ opacity: 0, scale: 1.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              src={comp}
              className="w-full h-full"
              alt="comp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
