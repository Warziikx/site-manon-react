import { Menu } from "@/contentrain/Menu";

import { InternalMenuItem } from "./InternalMenuItem";
import { ExternalMenuItem } from "./ExternalMenuItem";

interface DropdownMenuItemProps {
  menu: Menu;
  index: number;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ menu, index }) => {
  return (
    <>
      <button
        type="button"
        id={`dropdownHoverButton-${index}`}
        data-dropdown-toggle={`dropdownHover-${index}`}
        data-dropdown-trigger="hover"
        className="block py-2 text-center transition ease-in-out hover:text-secondary md:p-0"
      >
        {menu.libelle}
      </button>
      <div
        id={`dropdownHover-${index}`}
        className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-primary shadow"
      >
        <ul className="space-y-4 py-4" aria-labelledby={`dropdownHoverButton-${index}`}>
          {menu.childrenObject
            ?.sort((a: Menu, b: Menu) => a.ordre - b.ordre)
            .map((subMenu: Menu, subI: number) => {
              const isChildren = subMenu.childrenObject && subMenu.childrenObject.length > 0;
              return (
                <li
                  className="flex flex-row items-center justify-between px-4"
                  key={`submenu-${subI}`}
                  data-dropdown-toggle={isChildren && `doubledropdown-${subI}`}
                  data-dropdown-placement="right-start"
                  data-dropdown-trigger="hover"
                >
                  {subMenu.internal_url !== undefined && menu.internal_url !== "" && (
                    <InternalMenuItem menu={subMenu} />
                  )}
                  {subMenu.external_url !== undefined && menu.external_url !== "" && (
                    <ExternalMenuItem menu={subMenu} />
                  )}
                  {isChildren && (
                    <>
                      <svg
                        className="ms-3 h-2.5 w-2.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      <div
                        id={`doubledropdown-${subI}`}
                        className="z-10 hidden w-64 divide-y divide-gray-100 rounded-lg bg-primary shadow "
                      >
                        <ul className="space-y-4 py-4" aria-labelledby="doubleDropdownButton">
                          {subMenu.childrenObject?.map((subsubMenu: Menu, subsubI: number) => {
                            return (
                              <li
                                className="flex flex-row items-center justify-between px-4"
                                key={`subsubmenu-${subsubI}`}
                              >
                                {subsubMenu.internal_url !== undefined && menu.internal_url !== "" && (
                                  <InternalMenuItem menu={subsubMenu} />
                                )}
                                {subsubMenu.external_url !== undefined && menu.external_url !== "" && (
                                  <ExternalMenuItem menu={subsubMenu} />
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
