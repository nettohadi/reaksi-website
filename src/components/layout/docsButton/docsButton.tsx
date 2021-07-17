import './docsButton.css';
import { useEffect, useState } from 'reaksi';

type PropsType = {
   toggle: Function;
   visibility: boolean;
};

export default function DocsButton({ toggle, visibility }: PropsType) {
   useEffect(() => {
      return () => {
         console.log('doc button is unmounted');
      };
   }, []);

   return (
      <button className='docs-button no-clicked-highlight' onclick={toggle}>
         {visibility ? (
            <i className={'fas fa-times'}></i>
         ) : (
            <i className={'fas fa-bars'}></i>
         )}
      </button>
   );
}
