import componentExample from './componentExample';
import CodeBlock from '../../shared/codeBlock/CodeBlock';
import { TableOfContent } from '@shared/blockquote/tableOfContent/TableOfContent';
import { SectionType } from '@root/types';
import Warning from '@root/components/shared/blockquote/warning/Warning';

export default function ComponentDoc() {
   return (
      <div className='doc-wrapper'>
         <h1>Component</h1>
         <p>
            Components are the basic building block in Reaksi. Using components,
            You can break down complex UI into many small pieces, which are easy
            to read and maintain. Component can also be used to attach states
            and side effects into our rendered output.
         </p>
         <Warning>
            To avoid confusion, we expect you to have at least a basic
            understanding of React before going any further. We skip a lot of
            details regarding the core concept in this documentation.
         </Warning>
         <TableOfContent sections={sections} />
         <h2 className='section-title' id='functionalComponent'>
            Functional Component
         </h2>
         <p>
            Functional components are just a regular functions that receive
            props as the first argument. Please be aware that the function name
            must start with an uppercase letter in order for them to work in
            JSX.
         </p>
         <CodeBlock key={4}>{componentExample.functionalComponent}</CodeBlock>
         <h2 className='section-title' id='fragment'>
            Fragment
         </h2>
         <p>
            Fragment exists to solve the limitation of JSX which requires every
            "block" to have one root element. It's particularly useful when you
            don't want to render any element as the root of your component
            because it will be semantically incorrect or will effect CSS
            styling.
         </p>
         <CodeBlock key={5}>{componentExample.fragment}</CodeBlock>
         <p>
            You can also use the shorter syntax for fragment, which is supported
            by most of modern transpilers. The shorter one is lot more common
            and you will see it more often.
         </p>
         <CodeBlock key={6}>{componentExample.fragmentAlias}</CodeBlock>
      </div>
   );
}

const sections: SectionType[] = [
   {
      title: 'Functional Component',
      elementId: 'functionalComponent',
   },
   {
      title: 'Fragment',
      elementId: 'fragment',
   },
];
