type MenuItemType = {
   title: string;
   path: string;
};

type MenuType = {
   group: string;
   items: MenuItemType[];
};

const menu: MenuType[] = [
   {
      group: 'Intro',
      items: [
         {
            title: 'What is Reaksi JS ?',
            path: '/intro',
         },
         {
            title: 'Installation Guide',
            path: '/installation',
         },
      ],
   },
   {
      group: 'Core Concept',
      items: [
         {
            title: 'Component',
            path: '/component',
         },
         {
            title: 'Hooks',
            path: '/hooks',
         },
         {
            title: 'Redux',
            path: '/redux',
         },
         {
            title: 'Router',
            path: '/router',
         },
         {
            title: 'Context',
            path: '/context',
         },
         {
            title: 'References',
            path: '/references',
         },
      ],
   },
];

export default menu;
