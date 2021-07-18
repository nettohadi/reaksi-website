import { useEffect, useRef, useRouter } from 'reaksi';
import './Doc.css';
import '@root/components/shared/codeBlock/CodeBlock.css';
import customMarked from '@root/helpers/customMarked';
import DocPlaceholder from '@root/components/doc/DocPlaceholder';

let cachedHighlightedCode: string | null = null;
let loading = false;
export default function Doc() {
   const router = useRouter();
   const wrapper = useRef<HTMLDivElement>(null);

   function setContent() {
      if (wrapper.current && cachedHighlightedCode) {
         wrapper.current.innerHTML = cachedHighlightedCode;
      }
   }

   useEffect(() => {
      loading = true;
      const docPath = router.path.replace('/docs/', '/docs/en/');
      fetch(`${docPath}.md`)
         .then((response) => response.text())
         .then((text) => {
            cachedHighlightedCode = customMarked.parse(text);
            setContent();
            loading = false;
         });
   }, [router.path]);

   useEffect(() => {
      if (!loading) {
         setContent();
      } else {
         wrapper.current && (wrapper.current.innerHTML = DocPlaceholder);
      }
   });

   return <div className='doc-wrapper' ref={wrapper}></div>;
}
