 # Component
 
Components are the basic building block in Reaksi. Using components,
You can break down complex UI into many small pieces, which are easy
to read and maintain. Component can also be used to attach states
and side effects into our rendered output.
 
<Warning>
    To avoid confusion, we expect you to have at least a basic
    understanding of React before going any further. We skip a lot of
    details regarding the core concept in this documentation.
</Warning>

<TOC>
    <ul>
        <li><a href='#functionalComponent'>Functional Component</a></li> 
    </ul>
</TOC>

<h2 class='section-title' id='functionalComponent'>
    Functional Component
</h2>

Functional components are just a regular functions that receive
props as the first argument. Please be aware that the function name
must start with an uppercase letter in order for them to work in
JSX.

```jsx
import Reaksi from 'reaksi'

function Component(props) {
 return <div>This is {props.name}.</div>;
}

// Usage
const App = <Component name="My First Component" />;
  
Reaksi.render(App, document.body);

// Result: <div>This is My First Component.</div>
```

[comment]: <> (<h2 class='section-title' id='fragment'>)

[comment]: <> (    Fragment)

[comment]: <> (</h2>)

[comment]: <> (Fragment exists to solve the limitation of JSX which requires every)

[comment]: <> ("block" to have one root element. It's particularly useful when you)

[comment]: <> (don't want to render any element as the root of your component)

[comment]: <> (because it will be semantically incorrect or will effect CSS)

[comment]: <> (styling.)

[comment]: <> (```jsx)

[comment]: <> (import Reaksi from 'reaksi';)

[comment]: <> (function TodoItems&#40;&#41; {)

[comment]: <> ( return &#40;)

[comment]: <> (   <Reaksi.Fragment>)

[comment]: <> (     <li>1.Buy Milk</li>)

[comment]: <> (     <li>2.Pay Bill</li>)

[comment]: <> (     <li>3.Study</li>)

[comment]: <> (   </Reaksi.Fragment>)

[comment]: <> ( &#41;)

[comment]: <> (})

[comment]: <> (const App = &#40;&#41; => &#40;)

[comment]: <> ( <ol>)

[comment]: <> (   <TodoItems />)

[comment]: <> (   <li>Exercise</li>)

[comment]: <> ( </ol>)

[comment]: <> (&#41;;)

[comment]: <> (Reaksi.render&#40;<App/>, container&#41;;)

[comment]: <> (// Result :)

[comment]: <> (// <ul>)

[comment]: <> (//   <li>1.Buy Milk</li>)

[comment]: <> (//   <li>2.Pay Bill</li>)

[comment]: <> (//   <li>3.Study</li>)

[comment]: <> (//   <li>4.Exercise</li>)

[comment]: <> (// </ul>)

[comment]: <> (```)

[comment]: <> (You can also use the shorter syntax for fragment, which is supported)

[comment]: <> (by most of modern transpilers. The shorter one is lot more common)

[comment]: <> (and you will see it more often.)

[comment]: <> (```jsx)

[comment]: <> (import Reaksi from 'reaksi';)

[comment]: <> (function TodoItems&#40;&#41; {)

[comment]: <> ( return &#40;)

[comment]: <> ( // Shorter syntax)

[comment]: <> (   <>)

[comment]: <> (     <li>1.Buy Milk</li>)

[comment]: <> (     <li>2.Pay Bill</li>)

[comment]: <> (     <li>3.Study</li>)

[comment]: <> (   </>)

[comment]: <> ( &#41;)

[comment]: <> (})

[comment]: <> (const App = &#40;&#41; => &#40;)

[comment]: <> ( <ol>)

[comment]: <> (   <TodoItems />)

[comment]: <> (   <li>Exercise</li>)

[comment]: <> ( </ol>)

[comment]: <> (&#41;;)

[comment]: <> (Reaksi.render&#40;<App/>, container&#41;;)

[comment]: <> (// Result :)

[comment]: <> (// <ul>)

[comment]: <> (//   <li>1.Buy Milk</li>)

[comment]: <> (//   <li>2.Pay Bill</li>)

[comment]: <> (//   <li>3.Study</li>)

[comment]: <> (//   <li>4.Exercise</li>)

[comment]: <> (// </ul>)

[comment]: <> (```)