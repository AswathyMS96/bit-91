import React from "react";
import card1 from "../assets/eos-icons_secure-data-outlined.png";
import card2 from "../assets/icon-park-outline_data-lock.png";
import card3 from "../assets/Group 34024.png";
import { motion } from "framer-motion";

const Security = () => {
  const securityContent = [
    {
      icon: card1,
      name: "Data Encryption",
      desc: "Lorem ipsum dolor sit amet consectetur. Facilisis morbi donec ultricies nulla",
    },
    {
      icon: card2,
      name: "Assets Protection",
      desc: "Lorem ipsum dolor sit amet consectetur. Facilisis morbi donec ultricies nulla",
    },
    {
      icon: card3,
      name: "Two-Factor Authentication",
      desc: "Lorem ipsum dolor sit amet consectetur. Facilisis morbi donec ultricies nulla",
    },
  ];
  return (
    <div className="bg-securityBg bg-cover bg-no-repeat font-fits flex flex-col items-center">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="text-[#123567] font-bold text-[49px] my-5"
      >
        Security
      </motion.p>
      <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-1 gap-32 overflow-x-hidden">
        {securityContent.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2, ease: "easeIn" }}
              className="flex flex-col font-fits items-center justify-center gap-5 px-10 py-5"
            >
              <img src={item.icon} alt="icon" className="w-[86px] h-[86px]" />
              <p className="font-semibold text-2xl text-wrap text-center">
                {item.name}
              </p>
              <p className="font-normal text-xl  max-w-[300px] min-w-[150px] w-fit text-center">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Security;
