import darkLogo from "@/assets/images/logo-dark.png";

import { Link } from "@tanstack/react-router";
import { menuList, Menu } from "@/contentrain/Menu";
import { useState } from "react";
import { motion } from "framer-motion";
import { MenuButton } from "./MenuButton";
import { DropdownMenuItem } from "./MenuItem/DropdownMenuItem";
import { InternalMenuItem } from "./MenuItem/InternalMenuItem";
import { ExternalMenuItem } from "./MenuItem/ExternalMenuItem";
import { MobileHeader } from "./Mobile/MobileHeader";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <motion.nav
      initial={false}
      animate={mobileMenuOpen ? "open" : "closed"}
      className="fixed bottom-0 left-0 z-20 h-16 w-full md:top-0"
    >
      <div className="bg-primary text-white">
        <div className=" mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 md:px-8 xl:px-0">
          <Link to="/" className="ml-4 flex items-center" aria-current="page">
            <img src={darkLogo} className="mr-3 h-16 py-2" alt="Logo Manon" />
            <span className="self-center whitespace-nowrap font-title text-2xl font-semibold">Manon Bertho</span>
          </Link>
          <ul className="hidden flex-row space-x-8 md:flex ">
            {menuList
              .sort((a: Menu, b: Menu) => a.ordre - b.ordre)
              .map((menu: Menu, index: number) => {
                return (
                  <li key={index}>
                    {menu.childrenObject != undefined ? (
                      <DropdownMenuItem menu={menu} index={index} />
                    ) : (
                      <>
                        {menu.internal_url !== undefined && menu.internal_url !== "" && <InternalMenuItem menu={menu} />}
                        {menu.external_url !== undefined && menu.external_url !== "" && <ExternalMenuItem menu={menu} />}
                      </>
                    )}
                  </li>
                );
              })}
          </ul>
          <MenuButton
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="z-50 mr-4 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm md:hidden"
            strokeWidth="2"
            color="#ffffff"
            height={6}
            width={6}
          />
        </div>
      </div>
      {/* Mobile */}
      <MobileHeader closeMenu={closeMenu} mobileMenuOpen={mobileMenuOpen} />
    </motion.nav>
  );
};
