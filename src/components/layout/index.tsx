import Reaksi, { useRouter } from 'reaksi';
import Header from './header/Header';
import Footer from './footer/Footer';
import './index.css';
import Sidebar from './sidebar/Sidebar';

type props = {
   Page?: any;
};
export default function Layout({ Page }: props) {
   const router = useRouter();
   const isDocs = router.path.substr(0, 5) === '/docs';

   document.body.style.maxHeight = isDocs ? '100vh' : 'unset';

   return (
      <Reaksi.Fragment>
         <Header />
         <div className={`main-wrapper ${isDocs ? 'fixed-height' : ''}`}>
            {isDocs && <Sidebar />}
            <main>
               <Page />
            </main>
         </div>
      </Reaksi.Fragment>
   );
}
