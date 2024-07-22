import React from "react";
import Header from "../../components/Header";
import { HTMLIcon, ReactIcon } from "../../components/Svgs/All";
import WorkingSVG from "../../assets/images/working-1.svg";
import { useRootContext } from "../../context";
import ArrowCircleRight from "../../components/Svgs/ArrowCircleRight";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const HomeSection = () => {
  const { state } = useRootContext();
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  return (
    <section
      id="home_section"
      className="flex flex-col gap-12 w-full text-black bg-gradient-to-b from-gray-100 to-gray-50 dark:to-dark2 dark:text-white"
    >
      <Header />

      <div className="x_container flex items-center justify-between">
        <div className="w-full md:w-5/12 flex flex-col gap-5 relative z-30 lg:pb-36">
          <motion.div
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible
              }}
              className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-blue-400 dark:to-yellow-500 bg-clip-text text-transparent font-bold sm:w-[500px]"
            >
              Better digital experience with FGT
              <span className="text-blue-600"> for your better tommorow! </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            className="capitalize font-semibold tracking-wider sm:w-[500px]">
            We are team of talented designers providing IT solutions with modern technologies.
          </motion.div>

          {/* <h2 className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-blue-400 dark:to-yellow-500 bg-clip-text text-transparent font-bold sm:w-[500px]">
            Better digital experience with FGT
            <span className="text-blue-600"> for your better tommorow! </span>
          </h2> */}

          {/* <p className="capitalize font-semibold tracking-wider sm:w-[500px]">
            We are team of talented designers providing IT solutions with modern technologies.
          </p> */}
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <HTMLIcon />
              <b>HTML</b>
            </p>
            <p className="flex items-center gap-1">
              <ReactIcon />
              <b>CSS</b>
            </p>
            <p className="flex items-center gap-1">
              <ReactIcon />
              <b>Javascript</b>
            </p>
            <p className="flex items-center gap-1">
              <ReactIcon />
              <b>Typescript</b>
            </p>
            <p className="flex items-center gap-1">
              <ReactIcon />
              <b>Tailwind CSS</b>
            </p>

          </div>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <HTMLIcon />
              <b>React</b>
            </p>
            <p className="flex items-center gap-1">
              <ReactIcon />
              <b>Angular</b>
            </p>
            <p className="flex items-center gap-1">
              <ReactIcon />
              <b>React Native</b>
            </p>
            <p className="flex items-center gap-1">
              <ReactIcon />
              <b>.Net Core</b>
            </p>
            <p className="flex items-center gap-1">
              <ReactIcon />
              <b>DevOps</b>
            </p>

          </div>
          <Link
            to="/about"
            className="px-4 py-3 rounded bg-gradient-to-l to-blue-700 from-blue-600 text-white w-fit focus:ring font-medium tracking-wider flex items-center gap-2 group transition-all"
          >
            <span>Know more Here</span>
            <span
              className="transform group-hover:rotate-[360deg]"
              style={{ transition: "all 1s" }}
            >
              <ArrowCircleRight />
            </span>
          </Link>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="hidden lg:block w-7/12">
          {state?.currentTheme === "dark" ? (
            <img src={WorkingSVG} alt="" />
          ) : (
            <img src={WorkingSVG} alt="" />
          )}
        </motion.div>
      </div>

      <div
        id="home_section_overlay"
        className="bg-gradient-to-b from-[#99999900] via-[#99999978] to-gray-50 dark:from-[#131b4c00] dark:via-[#131b4c78] dark:to-[#0a0829]"
      ></div>
    </section>
  );
};

export default HomeSection;
