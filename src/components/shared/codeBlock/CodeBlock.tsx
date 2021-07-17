import './CodeBlock.css';
import Prism from 'prismjs';
import { useEffect, useRef, VNodeType } from 'reaksi';

type propsType = {
   children?: VNodeType[];
   key?: number;
};

export default function CodeBlock(props: propsType) {
   const codeEl = useRef<HTMLElement>();
   const highlightedCode = useRef<string>(null);

   useEffect(() => {
      console.log('mounted', codeEl.current);
      // only run once when first mounted
      Prism.highlightElement(codeEl.current);
      // cache the highlighted code
      highlightedCode.current = codeEl.current?.innerHTML || '';
   }, []);

   useEffect(() => {
      if (highlightedCode.current) {
         // use the cache for next render
         codeEl.current && (codeEl.current.innerHTML = highlightedCode.current);
      }
   });

   return (
      <div className='code-block-wrapper code-toolbar'>
         <pre className='language-jsx'>
            <code className='language-jsx' ref={codeEl}>
               {props.children}
            </code>
         </pre>
      </div>
   );
}
