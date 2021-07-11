import './Sidebar.css';
import Reaksi, { useRouter } from 'reaksi';
import menu from '@root/components/layout/sidebar/menu';

export default function Sidebar() {
   const router = useRouter();
   const activePath = router.path.replace('/docs', '');

   const isActivePath = (path: string) => {
      console.log(activePath === path.toLowerCase());
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
                        {m.items.map((i) => (
                           <li
                              className={'menu' + isActivePath(i.path)}
                              onclick={() => goTo(i.path)}
                           >
                              {i.title}
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
