import { MenuType } from '@root/types';

const version = 'v1';
const docsListV1: MenuType[] = [
   {
      group: 'Intro',
      items: [
         {
            title: 'What is Reaksi JS ?',
            path: `/${version}/intro`,
         },
         {
            title: 'Installation Guide',
            path: `/${version}/installation`,
         },
      ],
   },
   {
      group: 'Core Concept',
      items: [
         {
            title: 'Component',
            path: `/${version}/component`,
         },
         {
            title: 'Hooks',
            path: `/${version}/hooks`,
         },
         {
            title: 'Redux',
            path: `/${version}/redux`,
         },
         {
            title: 'Router',
            path: `/${version}/router`,
         },
         {
            title: 'Context',
            path: `/${version}/context`,
         },
         {
            title: 'References',
            path: `/${version}/references`,
         },
      ],
   },
];

export default docsListV1;
