import _menuList from "@/data/contentrain/Menu/fr.json";

interface ContentRainMenu {
	ID: string;
	libelle: string;
	relative_url?: string | undefined;
	external_url?: string | undefined;
	children: string[] | string;
	level: number;
	ordre: number;
}

export interface Menu {
	ID: string;
	libelle: string;
	relative_url?: string | undefined;
	external_url?: string | undefined;
	children: string[];
	childrenObject?: Menu[];
	level: number;
	ordre: number;
}

const isMenu = (menu: Menu | undefined): menu is Menu => {
	return !!menu;
};

/* ---- On cast les contenu ---- */
const contentrainMenuList = _menuList as ContentRainMenu[];

/* Permet de corriger le problème de string vers tableau vide sur les children */
const objMenuList = contentrainMenuList.map((cM: ContentRainMenu) => {
	return { ...cM, children: cM.children === "" ? [] : cM.children };
}) as Menu[];
/* ---- ----- */

const getMenuChildren = (menu: Menu, _objMenuList: Menu[]) => {
	menu.childrenObject = menu.children
		.map((sM: string) => {
			let foundMenu = objMenuList.find((fiM: Menu) => fiM.ID === sM);
			if (isMenu(foundMenu)) foundMenu = getMenuChildren(foundMenu, _objMenuList);
			return foundMenu;
		})
		.filter(isMenu);
	return menu;
};

const createMenuLevel = (menuList: Menu[], level: number) => {
	let menuWithChild = menuList
		.filter((m: Menu) => m.level === level)
		.filter((m: Menu) => m.children !== undefined && m.children.length > 0)
		.map((m: Menu) => {
			m = getMenuChildren(m, menuList);
			return m;
		});
	return menuWithChild;
};

const createMenu = (menuList: Menu[]) => {
	let firstLevelMenuWithoutChildren = menuList.filter((m: Menu) => m.children.length === 0).filter((m: Menu) => m.level === 0);
	return [...createMenuLevel(menuList, 0), ...firstLevelMenuWithoutChildren];
};

export const menuList = createMenu(objMenuList);
