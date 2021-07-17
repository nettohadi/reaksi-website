import hooksExample from './hooksExample';
import CodeBlock from '../../shared/codeBlock/CodeBlock';
import { TableOfContent } from '@root/components/shared/blockquote/tableOfContent/TableOfContent';
import { SectionType } from '@root/types';
import Warning from '@root/components/shared/blockquote/warning/Warning';

export default function HooksDoc() {
   return (
      <div className='doc-wrapper'>
         <h1>Hooks</h1>
         <p>
            Hooks is a new concept that allows you to compose state and side
            effects. They allow you to reuse stateful logic between components.
         </p>
         <Warning>
            We expect you to have at least a basic understanding of React before
            going any further. We skip a lot of details regarding core concept
            and everything, so it will be confusing if you don't know React.
         </Warning>
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
         <TableOfContent sections={sections} />
         <h2 className='section-title' id='useState'>
            UseState
         </h2>
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
         <CodeBlock key={1}>{hooksExample.useState}</CodeBlock>
         <h2 className='section-title' id='useEffect'>
            UseEffect
         </h2>
         <p>
            Side-Effects are at the heart of many modern Apps. Whether you want
            to fetch some data from an API or trigger an effect on the document,
            you'll find that the useEffect fits nearly all your needs. It's one
            of the main advantages of the hooks API, that it reshapes your mind
            into thinking in effects instead of a component's lifecycle.
         </p>
         <CodeBlock key={2}>{hooksExample.useEffect}</CodeBlock>
         <h2 className='section-title' id='useRef'>
            UseRef
         </h2>
         <p>
            UseRef returns a mutable "ref" object whose ".current" property is
            initialized with passed argument (initialValue). The returned object
            will persist for the full lifetime of the component.
         </p>
         <p>A common use case is to store a reference to a DOM node.</p>
         <CodeBlock key={3}>{hooksExample.useRef}</CodeBlock>
      </div>
   );
}

const sections: SectionType[] = [
   {
      title: 'UseState',
      elementId: 'useState',
   },
   {
      title: 'UseEffect',
      elementId: 'useEffect',
   },
   {
      title: 'UseRef',
      elementId: 'useRef',
   },
];
