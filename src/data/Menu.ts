export interface Menu {
    name: string;
    path: string;
}

export const menuList: Menu[] = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projet", path: "/projet" },
    { name: "Contact", path: "/contact" },
];
