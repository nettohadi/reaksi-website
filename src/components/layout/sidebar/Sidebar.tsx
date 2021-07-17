import './Sidebar.css';
import Reaksi, { useRouter } from 'reaksi';
import menu from '@root/components/layout/sidebar/menu';

type PropsType = {
   key?: number;
};

export default function Sidebar({ key }: PropsType) {
   const router = useRouter();
   const activePath = router.path.replace('/docs/v1', '');

   const isActivePath = (path: string) => {
      return activePath === path.toLowerCase()
         ? ' primary-bg-color secondary-font-color is-active'
         : '';
   };

   const goTo = (path: string) => {
      router.push('/docs' + path);
   };

   return (
      <div className='sidebar-wrapper'>
         <ul className='primary-font-color'>
            {menu.map((m) => (
               <li className='group-menu'>
                  {m.group}
                  {m.items.length > 0 && (
                     <ul>
                        {m.items.map((item) => (
                           <li
                              className={'menu' + isActivePath(item.path)}
                              onclick={() => goTo(item.path)}
                           >
                              {item.title}
                           </li>
                        ))}
                     </ul>
                  )}
               </li>
            ))}
         </ul>
      </div>
   );
}
