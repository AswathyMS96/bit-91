import React, { useEffect } from "react";
import coins from "../assets/Frame 34135.png";
import card1 from "../assets/Frame 34068.png";
import cardFooter from "../assets/Rectangle 4653.png";
import { motion } from "framer-motion";

const CoinList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cardContent = [
    {
      image: card1,
      head: "Lorem ipsum dolor sit amet consectetur. Purus a dolor rutrum et purus eros. Ut dui ultricies mauris viverra odio. Ut eu aliquet duis volutpat metus convallis elementum sagittis rhoncus. At pretium pharetra enim. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquam tincidunt ut diam adipiscing elit. Netus ac nibh sed laoreet magna suspendisse euismod tristique mauris. ",
    },
    {
      image: card1,
      head: "Lorem ipsum dolor sit amet consectetur. Purus a dolor rutrum et purus eros. Ut dui ultricies mauris viverra odio. Ut eu aliquet duis volutpat metus convallis elementum sagittis rhoncus. At pretium pharetra enim. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquam tincidunt ut diam adipiscing elit. Netus ac nibh sed laoreet magna suspendisse euismod tristique mauris. ",
    },
    {
      image: card1,
      head: "Lorem ipsum dolor sit amet consectetur. Purus a dolor rutrum et purus eros. Ut dui ultricies mauris viverra odio. Ut eu aliquet duis volutpat metus convallis elementum sagittis rhoncus. At pretium pharetra enim. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquam tincidunt ut diam adipiscing elit. Netus ac nibh sed laoreet magna suspendisse euismod tristique mauris. ",
    },
  ];
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
      className="mt-[70px] md:mt-[90px]"
    >
      <div className="bg-gradient-to-r from-[#cdf9fa] to-[#ffffff] font-fits">
        <div className="font-fits flex flex-col justify-center pt-10">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="mx-auto items-center text-[49px] font-bold text-[#123678] mb-10"
          >
            Coin Listings
          </motion.p>
          <div className="flex justify-around items-center flex-col md:flex-row px-10 md:px-5">
            <motion.img
              initial={{ opacity: 0, scale: 2, filter: `blur(2px)` }}
              whileInView={{ opacity: 1, scale: 1, filter: `blur(0px)` }}
              transition={{ duration: 1, ease: "circOut" }}
              src={coins}
              alt="coins"
            />
          </div>
        </div>
        <div className="font-fits flex flex-col justify-center items-center pt-10">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto gap-16 rounded-lg">
            {cardContent.map((item, index) => {
              return (
                <motion.div
                  initial={{ opacity: 1, rotateX: 90 }}
                  whileInView={{ opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.3,
                    ease: "circOut",
                  }}
                  className="flex flex-col text-left max-w-[372px] items-center"
                >
                  <p className="text-[#123678] font-semibold text-3xl mb-6">
                    STEP {index + 1}:
                  </p>
                  <img src={item.image} alt="card" />
                  <div className="bg-[#f0f0f0] p-2 font-normal text-xl rounded-lg">
                    <p>{item.head}</p>
                    <p className="my-4">
                      <span className="font-bold">NOTE: </span>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.button
            whileHover={{ scale: [1, 1.05, 1], transition: { duration: 0.2 } }}
            className="bg-[#123678] text-white rounded-lg px-4 py-2 w-fit mx-auto mt-8 mb-12 flex gap-2"
          >
            <span>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5_1865)">
                  <path
                    d="M8.00717 6.0414C5.53859 4.35711 3.23717 5.64283 1.30859 7.62283L5.57717 10.1943M13.1243 11.1585C14.8086 13.6271 13.5229 15.9285 11.5429 17.8571L8.97145 13.5885"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.45429 6.95423L12.2114 11.7114M5.57715 10.1814L8.98429 13.5885C11.71 11.9557 14.8086 10.3742 16.2229 8.90852C19.2829 5.84852 17.5086 1.65709 17.5086 1.65709C17.5086 1.65709 13.3171 -0.117196 10.2571 2.9428C8.79143 4.35709 7.19715 7.46852 5.57715 10.1814Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.1657 5.64277C14.3362 5.64277 14.4997 5.57504 14.6203 5.45448C14.7409 5.33392 14.8086 5.17041 14.8086 4.99991C14.8086 4.82942 14.7409 4.6659 14.6203 4.54534C14.4997 4.42479 14.3362 4.35706 14.1657 4.35706C13.9952 4.35706 13.8317 4.42479 13.7112 4.54534C13.5906 4.6659 13.5229 4.82942 13.5229 4.99991C13.5229 5.17041 13.5906 5.33392 13.7112 5.45448C13.8317 5.57504 13.9952 5.64277 14.1657 5.64277ZM5.39717 16.4942C4.65145 17.2142 1.30859 17.8571 1.30859 17.8571C1.30859 17.8571 1.95145 14.5142 2.67145 13.7685C2.93771 13.4838 3.28392 13.2865 3.6645 13.2024C4.04509 13.1183 4.44222 13.1514 4.80362 13.2974C5.16502 13.4434 5.47374 13.6954 5.68916 14.0202C5.90458 14.345 6.01659 14.7275 6.01045 15.1172C6.00575 15.3759 5.94903 15.6311 5.84367 15.8674C5.7383 16.1037 5.58646 16.3178 5.39717 16.4942Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_1865">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0.666016 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            Apply Now
          </motion.button>
          <div className="mb-14">
            <motion.img
              initial={{ opacity: 1, rotateX: 180 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1.5 }}
              src={cardFooter}
              alt="footer"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CoinList;
