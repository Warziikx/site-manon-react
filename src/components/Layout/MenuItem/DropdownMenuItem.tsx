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
        className="z-10 hidden bg-primary divide-y divide-gray-100 rounded-lg shadow w-44"
      >
        <ul className="py-4 space-y-4" aria-labelledby={`dropdownHoverButton-${index}`}>
          {menu.children?.map((subMenu: Menu, subI: number) => {
            return (
              <li key={`submenu-${subI}`}>
                {menu.path !== undefined && <InternalMenuItem menu={subMenu} />}
                {menu.external !== undefined && <ExternalMenuItem menu={subMenu} />}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
