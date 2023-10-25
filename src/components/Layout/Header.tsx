import darkLogo from "@/assets/images/logo-dark.png";
import logo from "@/assets/images/logo.png";

import { Link } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { HalfMoon, SunLight } from "iconoir-react";

import { menuList, Menu } from "@/data/Menu";
import useThemeContext from "@/context/ThemeContext";
import { useState } from "react";
import { motion } from "framer-motion";

const ulVariants = {
  open: () => ({
    clipPath: `circle(${1000 * 2 + 200}px at 90vw -30px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  }),
  closed: {
    clipPath: "circle(30px at 90vw -30px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.05,
    },
  },
};

const liVariants = {
  open: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: 100 },
    },
  },
  closed: {
    y: -10,
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Header: React.FC = () => {
  const { dark } = useThemeContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <motion.nav initial={false} animate={mobileMenuOpen ? "open" : "closed"} className="fixed left-0 top-0 z-20 w-full">
      <div className="border-b border-gray-200 bg-link-water">
        <div className=" mx-auto flex max-w-screen-xl px-4 md:px-8 xl:px-0 flex-wrap items-center justify-between">
          <a href="https://manonbertho-studio.fr/" className="ml-4 flex items-center">
            <img src={dark ? darkLogo : logo} className="mr-3 h-16" alt="Flowbite Logo" />
            <span className="self-center whitespace-nowrap font-title text-2xl font-semibold">Manon Bertho</span>
          </a>
          <ul className="hidden flex-row space-x-8 md:flex ">
            {menuList.map((menu: Menu) => {
              return (
                <li key={menu.name}>
                  <Link
                    onClick={closeMenu}
                    to={menu.path}
                    activeProps={{ className: "text-accent" }}
                    activeOptions={{ exact: true }}
                    className="block py-2 text-center transition ease-in-out hover:text-accent md:p-0"
                    aria-current="page"
                  >
                    {menu.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="mr-4 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100  md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
      <motion.ul
        variants={ulVariants}
        className="bg-link-water "
        style={{
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
      >
        {menuList.map((menu: Menu) => {
          return (
            <motion.li variants={liVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} key={menu.name}>
              <Link
                onClick={closeMenu}
                to={menu.path}
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: true }}
                className="block py-2 text-center transition ease-in-out hover:text-accent md:p-0"
                aria-current="page"
              >
                {menu.name}
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
};
