import React from "react";
import {motion} from "framer-motion"

const Feautures = () => {
  const featureContent = [
    {
      name: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet consectetur. Facilisis morbi donec ultricies nulla consequat. Dolor nec eleifend adipiscing blandit.",
    },
    {
      name: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet consectetur. Facilisis morbi donec ultricies nulla consequat. Dolor nec eleifend adipiscing blandit.",
    },
    {
      name: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet consectetur. Facilisis morbi donec ultricies nulla consequat. Dolor nec eleifend adipiscing blandit.",
    },
  ];

  return (
    <div className="bg-featureBg bg-cover bg-no-repeat font-fits flex flex-col items-center md:py-20 py-5">
      <motion.p
initial={{opacity:0,y:50}} whileInView={{opacity:1 ,y:0}} transition={{duration:0.5,ease:"circOut"}}
className="text-[#123567] font-bold text-[49px] mb-10">Feautures</motion.p>
      <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-1 md:gap-32 gap-6 mx-4">
        {featureContent.map((item,index) => {
          return (
            <motion.div 
            initial={{opacity:0,y:index%2===0?150:-150}} 
            whileInView={{opacity:1 ,y:0}} 
            transition={{duration:0.3,delay:index*0.2,ease:"easeIn"}}
            
            
            className="flex flex-col rounded-xl shadow-[0_4px_20px_0px_rgba(0,0,0,0.1)] font-inter items-center justify-center gap-5 lg:px-10 px-4 py-5 bg-[#ffffff]">
              <p className="font-semibold lg:text-2xl text-lg text-wrap text-left">
                {item.name}
              </p>
              <p className="font-normal lg:text-xl text-base max-w-[300px] w-fit text-left">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Feautures;
