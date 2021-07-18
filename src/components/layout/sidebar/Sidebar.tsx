import './Sidebar.css';
import { useRouter } from 'reaksi';
import docsList from '@shared/docsList';

type PropsType = {
   key?: number;
};

export default function Sidebar({ key }: PropsType) {
   const version = 'v1';

   const router = useRouter();
   const activePath = router.path.replace('/docs', '');

   const isActivePath = (path: string) => {
      return activePath === path.toLowerCase()
         ? ' primary-bg-color secondary-font-color is-active'
         : '';
   };

   const goTo = (path: string, isDoc = true) => {
      router.push((isDoc ? '/docs' : '') + path);
   };

   return (
      <div className='sidebar-wrapper thin-scrollbar'>
         <ul className='primary-font-color'>
            <li className='group-menu'>
               Links
               <ul>
                  <li className='menu' onclick={() => goTo('/', false)}>
                     Home
                  </li>
                  <li className='menu'>
                     <a href='https://github.com/nettohadi/reaksi'>GitHub</a>
                  </li>
               </ul>
            </li>
            {docsList[version]?.map((doc) => (
               <li className='group-menu'>
                  {doc.group}
                  {doc.items.length > 0 && (
                     <ul>
                        {doc.items.map((item) => (
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
