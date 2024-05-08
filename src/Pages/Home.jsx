import React, { useEffect } from "react";
import MainView from "./MainView";
import Choose from "./Choose";
import Security from "./Security";
import Feautures from "./Feautures";
import Start from "./Start";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
      className="mt-[70px] md:mt-[90px]"
    >
      <MainView />
      <Choose />
      <Security />
      <Feautures />
      <Start />
    </motion.div>
  );
};

export default Home;
