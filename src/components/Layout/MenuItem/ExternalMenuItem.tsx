import { Menu } from "@/data/Menu";

interface ExternalMenuItemProps {
  menu: Menu;
}

export const ExternalMenuItem: React.FC<ExternalMenuItemProps> = ({ menu }) => {
  return (
    <a href={menu.external} className="block py-2 text-center transition ease-in-out hover:text-secondary md:p-0">
      {menu.name}
    </a>
  );
};
