import darkLogo from "@/assets/images/logo-dark.png";

import { menuList, Menu } from "@/contentrain/Menu";
import { Link } from "@tanstack/react-router";
import { InternalMenuItem } from "./MenuItem/InternalMenuItem";
import { ExternalMenuItem } from "./MenuItem/ExternalMenuItem";
import { Instagram, Linkedin } from "iconoir-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="hidden bg-primary md:flex">
      <div className="w-full p-4 md:py-8 px-32">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col items-center justify-center space-y-2">
            <Link to="/" className="mb-4 flex items-center sm:mb-0">
              <img src={darkLogo} className="mr-3 h-12" alt="Flowbite Logo" />
              <span className=" self-center  whitespace-nowrap font-title text-2xl font-semibold text-white ">
                Manon Bertho
              </span>
            </Link>
            <ul className="flex text-white space-x-4">
              <li>
                <a href="https://www.instagram.com/manonbertho.studio/" className="hover:text-pink-600" target="_blank">
                  <Instagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/manon-bertho-nicolas-342648151/"
                  className="hover:text-blue-600"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex flex-row space-x-8 text-white transition">
            {menuList.map((menu: Menu) => {
              return (
                <li key={menu.libelle}>
                  {menu.internal_url !== undefined && menu.internal_url !== "" && <InternalMenuItem menu={menu} />}
                  {menu.external_url !== undefined && menu.external_url !== "" && <ExternalMenuItem menu={menu} />}
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="my-6 border-gray-300  sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-300  sm:text-center">
          © {currentYear}{" "}
          <Link resetScroll={true} to="/" className="hover:underline">
            Manon Bertho Studio
          </Link>
          . Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};
