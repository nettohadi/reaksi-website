import './TableOfContent.css';
import { SectionType } from '@root/types';

type PropsType = {
   sections: SectionType[];
};

export function TableOfContent({ sections }: PropsType) {
   const goToSection = (elementId: string) => {
      const el = document.getElementById(elementId);

      el?.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
         inline: 'nearest',
      });
   };

   return (
      <blockquote className='table-of-content-wrapper'>
         <h4 className='title'>Table of Contents</h4>
         <ul>
            {sections.map((section) => (
               <li>
                  <a
                     href=''
                     onclick={(e: MouseEvent) => {
                        e.preventDefault();
                        goToSection(section.elementId);
                     }}
                  >
                     {section.title}
                  </a>
               </li>
            ))}
         </ul>
      </blockquote>
   );
}
