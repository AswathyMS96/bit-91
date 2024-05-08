import React from "react";
import {motion} from "framer-motion"

const ResetPasword = () => {
  return (
    <motion.div
    initial={{y:"-100vh"}} animate={{y:0}} transition={{duration:1,ease:"easeInOut",type:"spring"}}
     className="bg-loginBg bg-cover  bg-no-repeat w-[100vw] h-[100vh] lg:bg-left bg-center flex flex-col md:items-start lg:pl-40 md:pl-20 items-center  justify-center font-fits">
      <motion.div
    initial={{scaleY:0}} whileInView={{scaleY:1}} transition={{duration:1,ease:"easeInOut",type:"spring"}}
    className="grid  bg-[#ffffff] p-10 w-[calc(100vw-80px)] origin-top-right sm:max-w-[616px] rounded-2xl gap-7 place-items-center ">
        <p className="font-semibold text-[31px] text-[#123678]">
          Reset Password
        </p>
        <input
          class="shadow appearance-none border rounded sm:w-full w-5/6 p-5  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Email"
          type="text"
          placeholder="Email"
        ></input>
        <button className="sm:w-full w-5/6 rounded-lg bg-[#123678] text-white flex justify-center items-center px-10 py-[14px]">
          <span>Send Reset Link</span>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ResetPasword;
