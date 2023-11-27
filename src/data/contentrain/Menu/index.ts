import _menuList from "@/data/contentrain/Menu/fr.json";

export interface Menu {
	ID: string;
	libelle: string;
	relative_url?: string | undefined;
	external_url?: string | undefined;
	children: Menu[];
	ordre: number;
}
const objMl = _menuList as Menu[];

const createMenuLevel = (menuList: Menu[]) => {
	let childrenMenu =  menuList
		.filter((m: Menu) => m.children !== undefined && m.children.length > 0)
		.map((m: Menu) => {
			m.children = m.children.map((sM: Menu) => {
				const found = menuList.find((oM: Menu) => oM.ID == sM.ID);
				if (found) return found;
				return sM;
			});
			return m;
		});
};

export const menuList = createMenuLevel(objMl);
