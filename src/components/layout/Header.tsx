import './Header.css';
import { useRouter } from 'reaksi';

export default function Header() {
   const router = useRouter();
   const isDocs = router.path.substr(0, 5) === '/docs';
   const goTo = (path: string) => {
      router.push(path);
   };

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
            <ul>
               <li onclick={() => goTo('/')}>Home</li>
               {!isDocs && (
                  <li onclick={() => goTo('/docs/installation')}>Docs</li>
               )}
               <li>GitHub</li>
            </ul>
         </nav>
      </header>
   );
}
