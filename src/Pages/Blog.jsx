import React, { useEffect } from "react";
import blog from "../assets/Group 33998.png";
import card1 from "../assets/Frame 34068.png";
import { motion } from "framer-motion";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cardContent = [
    {
      image: card1,
      head: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
    },
    {
      image: card1,
      head: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
    },
    {
      image: card1,
      head: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
    },
    {
      image: card1,
      head: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
    },
    {
      image: card1,
      head: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
    },
    {
      image: card1,
      head: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
    },
    {
      image: card1,
      head: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
    },
    {
      image: card1,
      head: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
    },
    {
      image: card1,
      head: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
      desc: "Lorem ipsum dolor sit amet consectetur. Sagittis quis eu eu et quam  viverra. ",
    },
  ];
  // bg-gradient-to-b from-[#cdf9fa] to-[#ffffff]
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
      className="blogsBg mt-[70px] md:mt-[90px] "
    >
      <div className="font-fits flex flex-col justify-center pt-10">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="mx-auto items-center text-[49px] font-bold text-[#123678]"
        >
          Blog
        </motion.p>
        <div className="flex justify-center items-center flex-col md:flex-row px-10 md:px-5">
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="lg:max-w-[35vw] w-fit font-semibold lg:text-2xl md:text-xl"
          >
            Lorem ipsum dolor sit amet consectetur. Volutpat elit nascetur
            suspendisse sed faucibus enim quis viverra consectetur. In sit cum
            porta urna pharetra blandit non hendrerit vulputate. Proin ut et
            fames netus congue tincidunt ornare. Pharetra tincidunt eget
            maecenas faucibus proin odio purus in eu.
          </motion.p>
          <div>
            <motion.img
              initial={{ opacity: 0, scale: 1.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              src={blog}
              alt="blog"
            />
          </div>
        </div>
      </div>
      <div className="font-fits flex flex-col justify-center pt-10">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="mx-auto items-center text-[49px] font-bold text-[#123678] pb-10"
        >
          Featured Blogs
        </motion.p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto gap-16">
          {cardContent.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, rotateY: 100, filter: `blur(3px)` }}
                whileInView={{ opacity: 1, rotateY: 0, filter: `blur(0px)` }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "circOut",
                }}
                key={index + item?.desc}
                className="flex flex-col text-left max-w-[368px]"
              >
                <img src={item.image} alt="card" />
                <div className="bg-[#f0f0f0] p-2 rounded-lg">
                  <p className="font-bold text-[25px]">{item.head}</p>
                  <p className="font-normal text-xl">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.button
          whileHover={{ scale: [1, 1.05, 1], transition: { duration: 0.2 } }}
          className="bg-[#123678] text-white rounded-lg px-7 py-2 w-fit mx-auto my-8"
        >
          Load More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Blog;
