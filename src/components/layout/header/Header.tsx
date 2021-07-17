import './Header.css';
import Reaksi, { useRouter } from 'reaksi';

export default function Header() {
   const router = useRouter();
   const isDocs = router.path.substr(0, 5) === '/docs';

   const goTo = (path: string) => {
      router.push(path);
   };

   const menus = () => (
      <ul>
         <li onclick={() => goTo('/docs/installation')}>Docs</li>
         <li>GitHub</li>
      </ul>
   );

   return (
      <header className={isDocs ? 'primary-bg-color' : 'secondary-bg-color'}>
         <div className='logo_wrapper' onclick={() => goTo('/')}>
            <div className={isDocs ? 'secondary-logo' : 'logo'}></div>
            <h2
               className={
                  isDocs ? 'secondary-font-color' : 'primary-font-color'
               }
            >
               Reaksi JS
            </h2>
         </div>
         <nav
            className={isDocs ? 'secondary-font-color' : 'primary-font-color'}
         >
            {!isDocs ? menus() : ''}
         </nav>
      </header>
   );
}
