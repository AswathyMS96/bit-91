import React, { useEffect } from "react";
import Icon from "./SharpIcon";
import QA from "./QA";
import { motion } from "framer-motion";

const Earn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const questionAnswer = [
    {
      ques: "Lorem ipsum dolor sit amet consectetur. Mi lacus  proin.",
      ans: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam facilisi nulla eget viverra. Volutpat a condimentum risus a fermentum morbi.",
    },
    {
      ques: "Lorem ipsum dolor sit amet consectetur. Mi lacus  proin.",
      ans: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam facilisi nulla eget viverra. Volutpat a condimentum risus a fermentum morbi.",
    },
    {
      ques: "Lorem ipsum dolor sit amet consectetur. Mi lacus  proin.",
      ans: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam facilisi nulla eget viverra. Volutpat a condimentum risus a fermentum morbi.",
    },
    {
      ques: "Lorem ipsum dolor sit amet consectetur. Mi lacus  proin.",
      ans: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam facilisi nulla eget viverra. Volutpat a condimentum risus a fermentum morbi.",
    },
    {
      ques: "Lorem ipsum dolor sit amet consectetur. Mi lacus  proin.",
      ans: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam facilisi nulla eget viverra. Volutpat a condimentum risus a fermentum morbi.",
    },
  ];
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
      className="mt-[70px] md:mt-[90px]"
    >
      <div className="earnBg w-full grid place-items-center items-start py-16 font-fits">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="flex flex-col lg:max-w-[888px] max-w-[calc(100vw-40px)] w-fit break-words text-left pr-8 gap-4 h-fit"
        >
          <p className="text-2xl font-bold">
            Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam
            facilisi nulla eget viverra. Volutpat a condimentum risus a
            fermentum morbi.
          </p>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam
            facilisi nulla eget viverra. Volutpat a condimentum risus a
            fermentum morbi.
          </p>
        </motion.div>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
          className="flex flex-row lg:min-w-[960px] min-w-[calc(100vw-150px)] origin-bottom  text-base font-normal items-center bg-[#a8dada]  py-8 mt-20 px-8"
        >
          <span className="mr-6">
            {" "}
            <Icon />
          </span>
          Please login on Bit 91 to place Earn orders
        </motion.div>
        <div className="flex flex-row lg:min-w-[940px] min-w-[calc(100vw-150px)]  text-base font-normal items-center justify-between mt-2">
          <p>Currency</p>
          <p>Current Interset</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className=" mt-10 flex justify-start lg:min-w-[940px] min-w-[calc(100vw-150px)]"
        >
          <p className="text-2xl font-bold">FAQ</p>
          <div className="mt-10">
            {questionAnswer.map((data) => {
              return <QA ques={data.ques} ans={data.ans} type="earn" />;
            })}
          </div>
        </motion.div>
        <div className="flex flex-row lg:min-w-[940px] min-w-[calc(100vw-150px)] text-[#123678] text-base font-normal items-center justify-between mt-5">
          View T&C for Earn
        </div>
      </div>
    </motion.div>
  );
};

export default Earn;
