import Reaksi, { useEffect, useRef, useRouter, useState } from 'reaksi';
import Header from './header/Header';
import './index.css';
import Sidebar from './sidebar/Sidebar';
import { MobileSidebar } from './sidebar/MobileSidebar';
import DocsButton from '@root/components/layout/docsButton/docsButton';
import Spacer from '@shared/spacer/Spacer';
import Footer from '@root/components/layout/footer/Footer';

type props = {
   Page?: any;
};
export default function Layout({ Page }: props) {
   const router = useRouter();
   const isDocs = router.path.substr(0, 5) === '/docs';
   const main = useRef<HTMLElement>(null);

   document.body.style.maxHeight = isDocs ? '100vh' : 'unset';
   const [visibility, toggle] = useState(false);

   const SidebarAndDocsButton = () => (
      <div>
         <Sidebar key={1} />
         <MobileSidebar toggle={toggle} visibility={visibility} />
         <DocsButton
            toggle={() => toggle(!visibility)}
            visibility={visibility}
         />
      </div>
   );

   useEffect(() => {
      toggle(false);
      main.current && (main.current.scrollTop = 0);
   }, [router.path]);

   return (
      <div className='layout-wrapper'>
         <Header />
         <div className={`main-wrapper ${isDocs ? 'fixed-height' : ''}`}>
            {isDocs && <SidebarAndDocsButton />}
            <main className='thin-scrollbar' ref={main}>
               <Page />
               <Spacer height={100} />
            </main>
         </div>
         <Footer />
      </div>
   );
}
