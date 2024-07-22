import React from "react";
import DetailsSectionData from "../../data/categories/DetailsSectionData";
import { motion } from "framer-motion";

const Single = ({ title, des, Icon }) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="col-span-12 sm:col-span-6 lg:col-span-4 p-10 border mr-5 ml-5 mt-5 mb-5 border-blue-500 border-opacity-20">
      <motion.div animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
        className="w-fit p-3 flex items-center justify-center bg-white shadow-lg dark:bg-dark1 bg-opacity-50 dark:bg-opacity-50 rounded">
        <Icon />
      </motion.div>
      <h3 className="text-xl lg:text-2xl font-bold uppercase mt-6 mb-5">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 font-medium text-base font-comfortaa">
        {des}
      </p>
    </motion.div>
  );
};

const DetailsSection = () => {
  return (
    <section className="section-bg lg:-mt-36 pt-10 lg:pt-80 relative z-40">
      <div className="x_container">
        <div className="w-full h-0.5 bg-gray-500 bg-opacity-20 mb-12 mt-24" />
        <div className="x_container grid grid-cols-12 bg-white dark:bg-dark1 rounded bg-opacity-20 dark:bg-opacity-5">
          {DetailsSectionData?.map((d, i) => (
            <Single key={i} title={d.title} des={d.des} Icon={d.Icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
