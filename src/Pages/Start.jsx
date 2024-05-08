import React from "react";
import start1 from "../assets/Group 33937.png";
import start2 from "../assets/Group 33939.png";
import start3 from "../assets/Group 33938.png";
import { useNavigate } from "react-router-dom";
// import frame from "../assets/Frame.png";
import { motion } from "framer-motion";

const Start = () => {
  const navigate = useNavigate();
  const handleButtons = (item) => {
    if (item === "scan") {
      navigate("/download");
    } else navigate("/signup");
  };
  const startContent = [
    {
      icon: start1,
      name: "Lorem ipsum dolor sit amet",
      desc: "pellentesque tincidunt scelerisque pretium tellus gravida arcu mauris.",
    },
    {
      icon: start2,
      name: "Lorem ipsum dolor sit amet",
      desc: "pellentesque tincidunt scelerisque pretium tellus gravida arcu mauris. ",
    },
    {
      icon: start3,
      name: "Lorem ipsum dolor sit amet",
      desc: "pellentesque tincidunt scelerisque pretium tellus gravida arcu mauris.",
    },
  ];
  return (
    <div className="md:bg-frame xl:bg-cover md:bg-contain  md:bg-no-repeat w-[99.2vw] md:h-[100vh] h-full font-fits flex flex-col items-center lg:py-5 lg:gap-5 gap-1 relative bg-bottom ">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="text-[#52b5b6] font-bold text-[49px] my-5 text-center"
      >
        <span className="text-[#123678]">Quick</span> Start Guide
      </motion.p>
      <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-1 md:gap-32 gap-6 mx-4">
        {startContent.map((item, index) => {
          return (
            <motion.div
              initial={{ scale: 0.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "circOut", type: "spring" }}
              className="flex flex-col font-fits items-center justify-center gap-10 px-10 py-5"
            >
              <motion.img
                initial={{ rotateX: "90deg" }}
                whileInView={{ rotateX: "0deg" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.4,
                  ease: "circOut",
                  type: "spring",
                }}
                src={item.icon}
                alt="icon"
                className="w-[99px] h-[99px]"
              />
              <p className="text-xl text-wrap text-center font-bold">
                {item.name}
              </p>
              <p className="font-normal text-xl  max-w-[400px] md:min-w-[200px] w-fit text-center">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        initial={{ rotateY: "180deg" }}
        whileInView={{ rotateY: "0deg" }}
        transition={{ duration: 0.9, ease: "circOut", type: "spring" }}
        className="flex flex-col justify-center items-center pb-10"
      >
        <div className="grid grid-cols-2 grid-rows-1 w-fit gap-10">
          <button
            onClick={() => handleButtons("scan")}
            className="bg-[#123678] text-white md:px-5 px-2 md:py-[10px] py-2 rounded-lg w-fit flex items-center gap-2"
          >
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4521 15.8044L23.2155 10.5434L4.59983 0.992889C3.36606 0.384417 2.21026 0.299017 1.19674 0.964423L17.4521 15.8044ZM24.1978 21.9638L30.1893 18.8877C31.3588 18.2899 32 17.443 32 16.5036C32 15.566 31.3588 14.7173 30.1913 14.1195L24.767 11.3387L18.6605 16.911L24.1978 21.9638ZM0.194908 2.25787C0.0701667 2.60836 0 2.99978 0 3.42856V29.5911C0 30.2689 0.163723 30.8525 0.459983 31.3169L16.2417 16.9092L0.194908 2.25787ZM17.4521 18.0123L1.75807 32.3399C2.05823 32.4448 2.38178 32.5 2.72286 32.5C3.33098 32.5 3.96443 32.3363 4.60957 32.009L22.6483 22.7627L17.4521 18.0123Z"
                fill="white"
              />
            </svg>
            Google Play
          </button>
          <button
            onClick={() => handleButtons("scan")}
            className="bg-[#123678] text-white md:px-5 px-2 md:py-[10px] py-2 rounded-lg w-fit flex items-center gap-2"
          >
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 0.5C24.8368 0.5 32 7.6632 32 16.5C32 25.3368 24.8368 32.5 16 32.5C7.1632 32.5 0 25.3368 0 16.5C0 7.6632 7.1632 0.5 16 0.5ZM16.8 18.1H6.88C6.45565 18.1 6.04869 18.2686 5.74863 18.5686C5.44857 18.8687 5.28 19.2757 5.28 19.7C5.28 20.1243 5.44857 20.5313 5.74863 20.8314C6.04869 21.1314 6.45565 21.3 6.88 21.3H7.7024L7.2432 22.1176C7.14045 22.301 7.07484 22.5029 7.05011 22.7117C7.02538 22.9205 7.04202 23.1321 7.09907 23.3344C7.15613 23.5368 7.25248 23.7259 7.38262 23.8911C7.51277 24.0562 7.67417 24.1941 7.8576 24.2968C8.04103 24.3995 8.2429 24.4652 8.45169 24.4899C8.66048 24.5146 8.87209 24.498 9.07445 24.4409C9.2768 24.3839 9.46594 24.2875 9.63106 24.1574C9.79618 24.0272 9.93405 23.8658 10.0368 23.6824L11.3696 21.3H16.8C17.2243 21.3 17.6313 21.1314 17.9314 20.8314C18.2314 20.5313 18.4 20.1243 18.4 19.7C18.4 19.2757 18.2314 18.8687 17.9314 18.5686C17.6313 18.2686 17.2243 18.1 16.8 18.1ZM19.8288 13.3192C19.6311 12.9598 19.3029 12.69 18.912 12.5656C18.5211 12.4412 18.0974 12.4717 17.7283 12.6507C17.3593 12.8298 17.0731 13.1438 16.9289 13.5279C16.7847 13.9119 16.7936 14.3367 16.9536 14.7144L17.0368 14.8824L21.9648 23.6824C22.1644 24.0382 22.4923 24.3043 22.8816 24.4264C23.2709 24.5484 23.6921 24.5172 24.0591 24.339C24.4261 24.1608 24.7111 23.8491 24.856 23.4678C25.0009 23.0864 24.9946 22.6641 24.8384 22.2872L24.7552 22.1176L24.2976 21.3016H25.12C25.5303 21.3048 25.9262 21.1503 26.2258 20.87C26.5254 20.5897 26.7059 20.205 26.7299 19.7954C26.7539 19.3858 26.6197 18.9826 26.3549 18.6691C26.0901 18.3557 25.7151 18.156 25.3072 18.1112L25.12 18.1H22.5056L19.8288 13.3192ZM15.7968 6.1192C15.5991 5.75975 15.2709 5.48997 14.88 5.36557C14.4891 5.24117 14.0654 5.27166 13.6963 5.45075C13.3273 5.62984 13.0411 5.94384 12.8969 6.32788C12.7527 6.71193 12.7616 7.13668 12.9216 7.5144L13.0032 7.6824L14.1664 9.7576L11.2752 14.9192C11.074 15.2756 11.0171 15.6955 11.116 16.0926C11.215 16.4897 11.4624 16.8338 11.8073 17.0541C12.1522 17.2744 12.5684 17.3542 12.9703 17.277C13.3722 17.1998 13.7292 16.9716 13.968 16.6392L14.0688 16.4824L18.9968 7.6824C19.2007 7.3259 19.2597 6.90465 19.1616 6.50586C19.0634 6.10707 18.8157 5.76128 18.4697 5.54006C18.1237 5.31885 17.7059 5.23915 17.3028 5.31747C16.8996 5.39579 16.542 5.62612 16.304 5.9608L16.2048 6.1176L16 6.484L15.7968 6.1192Z"
                fill="white"
              />
            </svg>
            Apple Store
          </button>
        </div>
        <button
          onClick={() => handleButtons("signUp")}
          className="bg-[#123678] text-white md:px-5 px-2 w-[165px] h-[53px] md:py-[10px] py-2 rounded-lg flex items-center justify-center mx-3 mt-5"
        >
          Sign Up
        </button>
      </motion.div>
      {/* <img src={frame} alt="frame" className="w-full" /> */}
      <div className="absolute md:bg-start bg-gradient-to-r from-[#DCF0F0] from-[50%] to-[#FFFFFF] bg-cover inset-0 top-0 -z-10"></div>
    </div>
  );
};

export default Start;
