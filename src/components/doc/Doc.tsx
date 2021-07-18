import { useEffect, useRef, useRouter } from 'reaksi';
import customMarked from '@root/helpers/customMarked';
import './Doc.css';
import './Warning.css';
import './TableOfContent.css';
import '@root/components/shared/codeBlock/CodeBlock.css';

let cachedHighlightedCode: string | null = null;

export default function Doc() {
   const router = useRouter();
   const wrapper = useRef<HTMLDivElement>(null);

   function setContent() {
      if (wrapper.current && cachedHighlightedCode) {
         wrapper.current.innerHTML = cachedHighlightedCode;
      }
   }

   useEffect(() => {
      setContent();
   });

   useEffect(() => {
      const docPath = router.path.replace('/docs/', '/docs/en/');
      fetch(`${docPath}.md`)
         .then((response) => response.text())
         .then((text) => {
            cachedHighlightedCode = customMarked.parse(text);
            setContent();
         });
   }, [router.path]);

   return <div className='doc-wrapper' ref={wrapper}></div>;
}
