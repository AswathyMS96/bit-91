import React, { useEffect } from "react";
import topLeft from "../assets/topleft.png";
import topRight from "../assets/topright.png";
import bottomLeft from "../assets/bottomleft.png";
import bottomRight from "../assets/bottomright.png";
import scan from "../assets/Group (4).png";
import { motion } from "framer-motion";

const DownloadApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
      className="bg-downloadBg bg-contain w-full md:h-[100vh] h-full pt-[90px] md:pt-0 relative flex justify-center items-center"
    >
      <div className="absolute top-0 left-0 hidden md:flex">
        <motion.img
          initial={{ opacity: 0, filter: `blur(5px)` }}
          whileInView={{ opacity: 1, filter: `blur(0px)` }}
          transition={{ duration: 0.2, ease: "easeInOut", type: "spring" }}
          src={topLeft}
          alt="topleft"
        />
      </div>
      <div className="absolute top-0 right-0 hidden md:flex">
        <motion.img
          initial={{ opacity: 0, filter: `blur(5px)` }}
          whileInView={{ opacity: 1, filter: `blur(0px)` }}
          transition={{ duration: 0.4, ease: "easeInOut", type: "spring" }}
          src={topRight}
          alt="topright"
        />
      </div>
      <div className="absolute bottom-0 left-0 hidden md:flex">
        <motion.img
          initial={{ opacity: 0, filter: `blur(5px)` }}
          whileInView={{ opacity: 1, filter: `blur(0px)` }}
          transition={{ duration: 0.6, ease: "easeInOut", type: "spring" }}
          src={bottomLeft}
          alt="bottomleft"
        />
      </div>
      <div className="absolute bottom-0 right-0 hidden md:flex">
        <motion.img
          initial={{ opacity: 0, filter: `blur(5px)` }}
          whileInView={{ opacity: 1, filter: `blur(0px)` }}
          transition={{ duration: 0.8, ease: "easeInOut", type: "spring" }}
          src={bottomRight}
          alt="bottomright"
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center font-fits md:mx-8  mx-3 xl:mx-0">
        <div className="flex flex-col gap-4">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="font-bold text-[49px] break-words text-[#123678]  max-w-[400px]"
          >
            Download the <span className="text-[#52b5b6]">BIT</span> 91 App now
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="text-black text-2xl font-normal max-w-[592px] text-left pr-10"
          >
            Lorem ipsum dolor sit amet consectetur. Dictum eget faucibus arcu
            velit consectetur ultrices. Lacus vulputate nullam adipiscing cursus
            ultricies ultrices mattis at lorem.
          </motion.p>
          <div className="flex flex-row lg:w-3/4 w-full justify-between">
            <button className="bg-[#123678] text-white px-5  py-[10px] rounded-lg w-fit flex items-center gap-2">
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
            <button className="bg-[#123678] text-white px-5  py-[10px] rounded-lg w-fit flex items-center gap-2">
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
        </div>
        <div>
          <motion.img
            initial={{ opacity: 0, scale: 5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            src={scan}
            alt="scan"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default DownloadApp;
