export type SectionType = {
   title: string;
   elementId: string;
};

export type MenuItemType = {
   title: string;
   path: string;
};

export type MenuType = {
   group: string;
   items: MenuItemType[];
};
