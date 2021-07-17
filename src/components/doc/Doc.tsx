import { useEffect, useRef, useRouter, useState } from 'reaksi';
import marked from 'marked';
import Prism from 'prismjs';
import './Doc.css';
import '@root/components/shared/codeBlock/CodeBlock.css';

marked.setOptions({
   highlight: function (code, lang) {
      console.log('highlight', Prism.languages, lang);
      return Prism.languages[lang]
         ? Prism.highlight(code, Prism.languages[lang], lang)
         : code;
   },
});

let cachedHighlightedCode: string | null = null;

export default function Doc() {
   const router = useRouter();
   const wrapper = useRef<HTMLDivElement>(null);

   function setContent() {
      if (wrapper.current && cachedHighlightedCode) {
         console.log(cachedHighlightedCode);
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
            cachedHighlightedCode = marked.parse(text);
            setContent();
         });
   }, []);

   return <div className='doc-wrapper' ref={wrapper}></div>;
}
