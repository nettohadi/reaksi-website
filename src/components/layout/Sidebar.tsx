import './Sidebar.css';
import { useRouter } from 'reaksi';

export default function Sidebar() {
   const router = useRouter();
   const activePath = router.path.replace('/docs/', '');

   const isActivePath = (path: string) => {
      return activePath === path.toLowerCase()
         ? 'primary-bg-color secondary-font-color is-active'
         : '';
   };

   const goTo = (path: string) => {
      router.push('/docs/' + path);
   };

   return (
      <div className='sidebar-wrapper'>
         <ul className='primary-font-color'>
            <li
               className={isActivePath('installation')}
               onclick={() => goTo('installation')}
            >
               Installation
            </li>
            <li className={isActivePath('hooks')} onclick={() => goTo('hooks')}>
               Hooks
            </li>
            <li className={isActivePath('redux')} onclick={() => goTo('redux')}>
               Redux
            </li>
            <li
               className={isActivePath('router')}
               onclick={() => goTo('router')}
            >
               Router
            </li>
            <li
               className={isActivePath('context')}
               onclick={() => goTo('context')}
            >
               Context
            </li>
         </ul>
      </div>
   );
}
