import { useEffect } from 'reaksi';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import { hooksExample } from './hooksCodes';

export default function HooksDoc() {
   useEffect(() => {
      document.querySelectorAll('code').forEach((el: any) => {
         hljs.highlightElement(el);
         console.log('run hightlight js', { language: 'javascript' });
      });
   });

   return (
      <div className='doc-wrapper'>
         <h1>Hooks</h1>
         <p>
            We expect you to have at least a basic understanding of React before
            going any further. Because we skip a lot of details regarding core
            concept and everything, so it will be confusing if you don't know
            React.
         </p>
         <p>
            Hooks is a new concept that allows you to compose state and side
            effects. They allow you to reuse stateful logic between components.
         </p>
         <p>
            Hooks are used inside functional component, and avoid many pitfalls
            of the "this" keyword relied on by the class components API. Instead
            of accessing properties from the component instance, hooks rely on
            closures.
         </p>
         <p>
            We're planning to incorporate all React hooks into Reaksi. But it it
            will take some time before we can do all of them. Here are all hooks
            we created so far :
         </p>
         <h2>1. UseState</h2>
         <p>
            This hook accepts an argument, this will be the initial state. When
            invoking this hook returns an array of two variables. The first
            being the current state and the second one being the setter for our
            state.
         </p>
         <p>
            Our setter behaves similar to the setter of our classic state. It
            accepts a value or a function with the currentState as argument.
         </p>
         <p>
            When you call the setter and the state is different, it will trigger
            a rerender starting from the component where that useState has been
            used.
         </p>
         <pre>
            <code className='sh'>{hooksExample.useState}</code>
         </pre>
         <h2>2. UseEffect</h2>
         <p>
            Side-Effects are at the heart of many modern Apps. Whether you want
            to fetch some data from an API or trigger an effect on the document,
            you'll find that the useEffect fits nearly all your needs. It's one
            of the main advantages of the hooks API, that it reshapes your mind
            into thinking in effects instead of a component's lifecycle.
         </p>
         <pre>
            <code className='sh'>{hooksExample.useEffect}</code>
         </pre>
         <h2>3. UseRef</h2>
         <p>
            There are other hooks when using Redux, router, or context. But
            those will be explained in a separate section.
         </p>
      </div>
   );
}
