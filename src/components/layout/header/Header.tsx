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
         <li onclick={() => goTo('/docs/v1/reaksi')}>Docs</li>
         <li>
            <a href='https://github.com/nettohadi/reaksi'>GitHub</a>
         </li>
      </ul>
   );

   const search = () => (
      <div className='search-wrapper'>
         <div className='search-icon '>
            <i class='fas fa-search'></i>
         </div>
         <div className='search-input'>
            <input type='text' placeholder='Search' />
         </div>
         <div className='search-keys'>
            <div className='search-key ctrl'>CTRL</div>
            <div className='search-key'>K</div>
         </div>
      </div>
   );

   return (
      <header className={isDocs ? 'primary-bg-color' : 'secondary-bg-color'}>
         <div
            className='logo_wrapper no-clicked-highlight'
            onclick={() => goTo('/')}
         >
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
            {!isDocs ? menus() : search()}
         </nav>
      </header>
   );
}
