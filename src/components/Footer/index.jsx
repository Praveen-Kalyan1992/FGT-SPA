import React from "react";
import { LayerIcon } from "../Svgs/All";

const Footer = () => {
  return (
    <footer className="pb-10 text-cente">
      <div className="x_container">
        <div className="w-full h-0.5 bg-gray-500 bg-opacity-20 mb-12 mt-24" />
        <div className="flex items-center justify-center text-2xl gap-1 mb-5">
          <LayerIcon />
          <p>
            <b className="text-green-500">Futuristic </b>
            <b className="text-yellow-500">Global </b>
            <b className="text-blue-500">Technologies</b>
          </p>
        </div>
        <p className="text-center text-gray-700 dark:text-gray-300 tracking-wider font-medium capitalize">
          © 2024
          <b className="text-green-500"> Futuristic </b>
          <b className="text-yellow-500">Global </b>
          <b className="text-blue-500">Technologies </b>
          Inc. All rights reserved.
        </p>
        <ul className="mt-10 flex gap-5 font-medium flex-wrap justify-center text-blue-600 dark:text-blue-300">
          <li>
            {" "}
            <a
              target="__blank"
              href="#"
            >
              Developed by:{" "}
              <b className="text-black dark:text-white">FGT Devs</b>
            </a>{" "}
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
