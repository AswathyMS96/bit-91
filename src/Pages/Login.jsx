import React, { useEffect } from "react";
import GoogleIcon from "./GoogleIcon";
import AppleIcon from "./AppleIcon";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = (props) => {
  const { type } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleClick = (item) => {
    if (item === "fp") {
      navigate("/login/reset-password");
    } else if (item === "signUp") {
      navigate("/signup");
    } else if (item === "login") {
      navigate("/login");
    } else {
      navigate("/download");
    }
  };
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
      className="bg-loginBg bg-cover  bg-no-repeat w-[100vw] md:h-[100vh] h-fit py-[90px] md:py-0 p lg:bg-left bg-center flex flex-col md:items-start lg:pl-40 md:pl-20 items-center  justify-center font-fits"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="grid  bg-[#ffffff] p-10 w-[calc(100vw-80px)]  sm:max-w-[616px] rounded-2xl gap-7 place-items-center "
      >
        <p className="font-semibold text-[31px] text-[#123678]">
          {type === "login" ? "Login" : "Sign Up"}
        </p>
        {type === "signUp" && (
          <input
            class="shadow appearance-none border rounded sm:w-full w-5/6 p-5  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          class="shadow appearance-none border rounded sm:w-full w-5/6 p-5  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Email"
          type="text"
          placeholder="Email"
        ></input>
        {type === "login" ? (
          <div className="sm:w-full w-5/6 relative ">
            <input
              class="shadow appearance-none border rounded w-full  p-5  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Password"
              type="text"
              placeholder="Password"
            ></input>
            <svg
              className="absolute top-1/2 -translate-y-1/2 right-10 z-20"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              fill="none"
            >
              <path
                stroke="#123678"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.73 5.573A11.01 11.01 0 0112 5.5c4.664 0 8.4 2.903 10 7-.387.997-.91 1.935-1.555 2.788M6.52 7.019C4.48 8.264 2.9 10.193 2 12.5c1.6 4.097 5.336 7 10 7a10.44 10.44 0 005.48-1.52m-7.6-7.6a3 3 0 104.243 4.243"
              ></path>
              <path
                stroke="#123678"
                strokeLinecap="round"
                strokeWidth="2"
                d="M4 4.5l16 16"
              ></path>
            </svg>
          </div>
        ) : (
          <div className="sm:w-full w-5/6 relative ">
            <input
              class="shadow appearance-none border rounded w-full  p-5  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="createpassword"
              type="text"
              placeholder="Create Password"
            ></input>
            <svg
              className="absolute top-1/2 -translate-y-1/2 right-10 z-20"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              fill="none"
            >
              <path
                stroke="#123678"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.73 5.573A11.01 11.01 0 0112 5.5c4.664 0 8.4 2.903 10 7-.387.997-.91 1.935-1.555 2.788M6.52 7.019C4.48 8.264 2.9 10.193 2 12.5c1.6 4.097 5.336 7 10 7a10.44 10.44 0 005.48-1.52m-7.6-7.6a3 3 0 104.243 4.243"
              ></path>
              <path
                stroke="#123678"
                strokeLinecap="round"
                strokeWidth="2"
                d="M4 4.5l16 16"
              ></path>
            </svg>
          </div>
        )}

        {type === "login" ? (
          <motion.button
            whileHover={{ scale: [1.03], transition: { duration: 0.2 } }}
            className="sm:w-full w-5/6 rounded-lg bg-[#123678] text-white flex justify-center items-center px-10 py-[14px]"
          >
            <span>Log In</span>
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: [1.03], transition: { duration: 0.2 } }}
            className="sm:w-full w-5/6 rounded-lg bg-[#123678] text-white flex justify-center items-center px-10 py-[14px]"
          >
            <span>Sign Up</span>
          </motion.button>
        )}
        {type === "login" ? (
          <div className="flex flex-col sm:flex-row  justify-center items-center w-full sm:justify-between text-base text-[#123678]  cursor-pointer">
            <div onClick={() => handleClick("fp")}>Forgot Password?</div>
            <div
              onClick={() => handleClick("signUp")}
              className=" whitespace-nowrap cursor-pointer"
            >
              Don’t have an account? Sign Up
            </div>
          </div>
        ) : (
          <div className="flex flex-row  justify-center items-center w-full  text-base text-[#123678] cursor-pointer ">
            <div
              onClick={() => handleClick("login")}
              className=" whitespace-nowrap"
            >
              Already have an account? Sign In
            </div>
          </div>
        )}
        <div className="flex sm:w-full w-5/6 flex-col sm:flex-row items-center sm:justify-around justify-center text-base text-[#123678]">
          <svg
            width="170"
            height="3"
            viewBox="0 0 170 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="-0.00171232"
              y1="1.79102"
              x2="169.997"
              y2="1.20883"
              stroke="#A3A3A3"
            />
          </svg>
          <div>Or continue with</div>
          <svg
            width="170"
            height="3"
            viewBox="0 0 170 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="-0.00171232"
              y1="1.79102"
              x2="169.997"
              y2="1.20883"
              stroke="#A3A3A3"
            />
          </svg>
        </div>
        <div className="flex gap-5 row-span-2 p-5 cursor-pointer">
          <div onClick={() => handleClick("download")}>
            {" "}
            <GoogleIcon />
          </div>
          <div onClick={() => handleClick("download")}>
            {" "}
            <AppleIcon />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
