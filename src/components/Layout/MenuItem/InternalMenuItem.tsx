import { Menu } from "@/data/contentrain/Menu";
import { Link } from "@tanstack/react-router";

interface InternalMenuItemProps {
	menu: Menu;
}

export const InternalMenuItem: React.FC<InternalMenuItemProps> = ({ menu }) => {
	return (
		<Link
			to={menu.relative_url}
			activeProps={{ className: "text-secondary" }}
			activeOptions={{ exact: true }}
			className="block py-2 text-center transition ease-in-out hover:text-secondary md:p-0"
			aria-current="page"
		>
			{menu.libelle}
		</Link>
	);
};
