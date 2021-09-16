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
        <li><a href='#fragment'>Fragment</a></li>
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

<h2 class='section-title' id='fragment'>
    Fragment
</h2>

Fragment exists to solve the limitation of JSX which requires every
"block" to have one root element. It's particularly useful when you
don't want to render any element as the root of your component
because it will be semantically incorrect or will effect CSS
styling.

```jsx
import Reaksi from 'reaksi';

function TodoItems() {
 return (
   <Reaksi.Fragment>
     <li>1.Buy Milk</li>
     <li>2.Pay Bill</li>
     <li>3.Study</li>
   </Reaksi.Fragment>
 )
}

const App = () => (
 <ol>
   <TodoItems />
   <li>Exercise</li>
 </ol>
);

Reaksi.render(<App/>, container);

// Result :
// <ul>
//   <li>1.Buy Milk</li>
//   <li>2.Pay Bill</li>
//   <li>3.Study</li>
//   <li>4.Exercise</li>
// </ul>
```

You can also use the shorter syntax for fragment, which is supported
by most of modern transpilers. The shorter one is lot more common
and you will see it more often.

```jsx
import Reaksi from 'reaksi';

function TodoItems() {
 return (
 // Shorter syntax
   <>
     <li>1.Buy Milk</li>
     <li>2.Pay Bill</li>
     <li>3.Study</li>
   </>
 )
}

const App = () => (
 <ol>
   <TodoItems />
   <li>Exercise</li>
 </ol>
);

Reaksi.render(<App/>, container);

// Result :
// <ul>
//   <li>1.Buy Milk</li>
//   <li>2.Pay Bill</li>
//   <li>3.Study</li>
//   <li>4.Exercise</li>
// </ul>
```