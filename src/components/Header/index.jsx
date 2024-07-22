import React, { useEffect, useRef, useState } from "react";
import DarkIcon from "../Svgs/DarkIcon";
import LightIcon from "../Svgs/LightIcon";
import theme_toggler from "../../utils/theme_toggler";
import { DiscordIcon, GithubIcon, LayerIcon } from "../Svgs/All";
import { useRootContext } from "../../context";
import { NavLink } from "react-router-dom";
import Language from "../Svgs/Eye";
import { motion, useScroll } from "framer-motion";

const Header = () => {
  const { state, dispatch } = useRootContext();
  const [sticky, setSticky] = useState(false);
  const [open_mobile_menu, set_omm] = useState(false);
  const mobile_menu_ref = useRef();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (open_mobile_menu) {
      mobile_menu_ref.current.classList.remove("scale-y-0");
      mobile_menu_ref.current.classList.add("scale-y-100");
    } else {
      mobile_menu_ref.current.classList.add("scale-y-0");
      mobile_menu_ref.current.classList.remove("scale-y-100");
    }
  }, [open_mobile_menu]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      dispatch({ type: "set_current_theme", payload: theme });
    }

    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 140) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, [dispatch]);

  function theme_toggle_handler() {
    const theme = theme_toggler();
    dispatch({ type: "set_current_theme", payload: theme });
  }

  return (
    <>
     <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.header
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`h-header_height w-full flex z-50 ${sticky &&
          " fixed right-0 top-0 left-0 bg-white shadow dark:bg-dark1 bg-opacity-90 dark:bg-opacity-90"
          }`}
      >
        <div className="x_container h-full flex items-center justify-between">
          <NavLink to="/" className="flex items-center sm:text-2xl gap-1">
            <LayerIcon />
            <p>
              <b className="text-green-500">Futuristic </b>
              <b className="text-yellow-500">Global </b>
              <b className="text-blue-500">Technologies</b>
            </p>
          </NavLink>

          <ul
            ref={mobile_menu_ref}
            className="font-bold absolute top-header_height right-[2.5%] p-8 pr-12 flex items-center flex-col gap-3 bg-white shadow dark:bg-dark2 bg-opacity-90 dark:bg-opacity-90 rounded-sm transform scale-y-0 origin-top lg:shadow-none transition-all lg:scale-y-100 lg:dark:bg-transparent lg:bg-transparent lg:gap-7 lg:flex-row lg:static"
            style={{ zIndex: "60" }}
          >
            <motion.li className="w-full text-left" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <NavLink
                to={`/`}
                className={({ isActive }) =>
                  `dark:hover:text-white hover:text-blue-500 ${isActive
                    ? "dark:text-white text-blue-500"
                    : "dark:text-gray-400 text-gray-700"
                  }`
                }
              >
                Home
              </NavLink>
            </motion.li>

            <motion.li className="w-full text-left" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <NavLink
                to={`/about`}
                className={({ isActive }) =>
                  `dark:hover:text-white hover:text-blue-500 ${isActive
                    ? "dark:text-white text-blue-500"
                    : "dark:text-gray-400 text-gray-700"
                  }`
                }
              >
                About
              </NavLink>
            </motion.li>

            <motion.li className="w-full text-left" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <NavLink
                to={`/services`}
                className={({ isActive }) =>
                  `dark:hover:text-white hover:text-blue-500 ${isActive
                    ? "dark:text-white text-blue-500"
                    : "dark:text-gray-400 text-gray-700"
                  }`
                }
              >
                Services
              </NavLink>
            </motion.li>

            <motion.li className="w-full text-left" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <NavLink
                to={`/project`}
                className={({ isActive }) =>
                  `dark:hover:text-white hover:text-blue-500 ${isActive
                    ? "dark:text-white text-blue-500"
                    : "dark:text-gray-400 text-gray-700"
                  }`
                }
              >
                Projects
              </NavLink>
            </motion.li>

            <motion.li className="w-full text-left" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <NavLink
                to={`/team`}
                className={({ isActive }) =>
                  `dark:hover:text-white hover:text-blue-500 ${isActive
                    ? "dark:text-white text-blue-500"
                    : "dark:text-gray-400 text-gray-700"
                  }`
                }
              >
                Team
              </NavLink>
            </motion.li>

            {/* <li className="w-full text-left">
            <NavLink
              to={`/components`}
              className={({ isActive }) =>
                `dark:hover:text-white hover:text-blue-500 ${
                  isActive
                    ? "dark:text-white text-blue-500"
                    : "dark:text-gray-400 text-gray-700"
                }`
              }
            >
              Components
            </NavLink>
          </li> */}

            <motion.li className="w-full text-left" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <NavLink
                to={`/contact`}
                className={({ isActive }) =>
                  `dark:hover:text-white hover:text-blue-500 ${isActive
                    ? "dark:text-white text-blue-500"
                    : "dark:text-gray-400 text-gray-700"
                  }`
                }
              >
                Contact
              </NavLink>
            </motion.li>
          </ul>

          <ul className="flex items-center gap-3 sm:gap-7">
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <button
                className="flex items-center justify-center w-6 sm:w-7 h-6 sm:h-7 dark:bg-gray-200 bg-gray-600 text-white dark:text-gray-900 rounded-full"
                onClick={theme_toggle_handler}
              >
                {state?.currentTheme === "light" ? <DarkIcon /> : <LightIcon />}
              </button>
            </motion.li>
            {/* <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <button
                className="flex items-center justify-center w-6 sm:w-7 h-6 sm:h-7 dark:bg-gray-200 bg-gray-600 text-white dark:text-gray-900 rounded-full"
                onClick={theme_toggle_handler}
              >
                {state?.currentTheme === "light" ? <Language /> : <Language />}
              </button>
            </motion.li> */}
            {/* <li>
            <div className="flex gap-2 items-center">
             <Language />

              <a
                href="#"
                className="bg-blue-700 text-white rounded-sm shadow focus:ring flex items-center gap-0.5 md:px-2 px-2 py-1 md:py-2 text-xs md:text-sm"
              >
                <DiscordIcon />
                <small>Join</small>
              </a>

              <a
                href="#"
                className="bg-blue-700 text-white rounded-sm shadow focus:ring hidden sm:flex items-center gap-0.5 md:px-2 px-1.5 py-1 md:py-2 text-xs md:text-sm"
              >
                <GithubIcon />
                <small>Give star</small>
              </a>
            </div>
          </li> */}
            <li className="lg:hidden">
              <button
                className="gap-[6px] relative w-12 h-16 flex flex-col justify-center items-center focus:border-none focus:outline-none z-50"
                onClick={() => set_omm((p) => !p)}
              >
                <span
                  className={`block w-6 h-[2px] sm:w-8 sm:h-[3px] rounded bg-gray-600 dark:bg-gray-200 transition-all ${open_mobile_menu
                    ? "absolute inset-0 m-auto transform rotate-45"
                    : ""
                    }`}
                />
                <span
                  style={{ transition: "all .5s" }}
                  className={`block w-6 h-[2px] sm:w-8 sm:h-[3px] rounded bg-gray-600 dark:bg-gray-200 ${open_mobile_menu ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                  className={`block w-6 h-[2px] sm:w-8 sm:h-[3px] rounded bg-gray-600 dark:bg-gray-200 transition-all ${open_mobile_menu
                    ? "absolute inset-0 m-auto transform -rotate-45"
                    : ""
                    }`}
                />
              </button>
            </li>
          </ul>
        </div>
      </motion.header>
     </>
  );
};

export default Header;
