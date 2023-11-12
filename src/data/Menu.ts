export interface Menu {
	name: string;
	path?: string | null;
	external?: string | null;
}

export const menuList: Menu[] = [
	{ name: "Accueil", path: "/", external: null },
	{ name: "Services", path: "/services", external: null },
	{ name: "Projet", path: "/projet", external: null },
	{
		name: "Boutique",
		path: null,
		external: "https://www.etsy.com/fr/shop/ManonBerthoStudio",
	},
	{ name: "Contact", path: "/contact", external: null },
];
