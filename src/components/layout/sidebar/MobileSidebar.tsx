import './Sidebar.css';
import Sidebar from './Sidebar';

type PropsType = {
   toggle: Function;
   visibility: boolean;
};

export function MobileSidebar({ toggle, visibility }: PropsType) {
   return (
      <div className={'mobile-sidebar-wrapper ' + (visibility ? 'open' : '')}>
         <Sidebar key={2} />
         <div
            className='sidebar-empty-area'
            onclick={() => toggle(false)}
         ></div>
      </div>
   );
}
