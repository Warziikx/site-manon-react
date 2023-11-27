import { Menu } from "@/data/Menu";
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
      >
        {menu.name}
      </button>
      <div
        id={`dropdownHover-${index}`}
        className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-primary shadow"
      >
        <ul className="space-y-4 py-4" aria-labelledby={`dropdownHoverButton-${index}`}>
          {menu.children?.map((subMenu: Menu, subI: number) => {
            return (
              <li
                className="flex flex-row items-center justify-between px-4"
                key={`submenu-${subI}`}
                data-dropdown-toggle={`doubledropdown-${subI}`}
                data-dropdown-placement="right-start"
                data-dropdown-trigger="hover"
              >
                {subMenu.path !== undefined && <InternalMenuItem menu={subMenu} />}
                {subMenu.external !== undefined && <ExternalMenuItem menu={subMenu} />}
                {subMenu.children && subMenu.children.length > 0 && (
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
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-primary shadow "
                    >
                      <ul className="py-2 text-sm" aria-labelledby="doubleDropdownButton">
                        {subMenu.children?.map((subsubMenu: Menu, subsubI: number) => {
                          return (
                            <li key={`subsubmenu-${subsubI}`}>
                              {subsubMenu.path !== undefined && <InternalMenuItem menu={subsubMenu} />}
                              {subsubMenu.external !== undefined && <ExternalMenuItem menu={subsubMenu} />}
                            </li>
                          );
                        })}
                        {/* <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Overview
                        </a>
                      </li> */}
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
