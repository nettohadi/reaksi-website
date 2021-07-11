import './CodeBlock.css';
import Prism from 'prismjs';
import { useEffect, useRef } from 'reaksi';

type propsType = {
   children?: string;
   key?: number;
};

export default function CodeBlock(props: propsType) {
   const codeEl = useRef();
   useEffect(() => {
      Prism.highlightElement(codeEl.current);
      console.log('prism highlighg');
   });

   return (
      <div className='code-block-wrapper'>
         <pre className='line-numbers'>
            <code className='language-jsx' ref={codeEl}>
               {props.children}
            </code>
         </pre>
      </div>
   );
}
