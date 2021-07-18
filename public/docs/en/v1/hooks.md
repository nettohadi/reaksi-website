# Hooks

Hooks is a new concept that allows you to use state and side
effects without writing a class.

<Warning>
    To avoid confusion, we expect you to have at least a basic
    understanding of React before going any further. We skip a lot of
    details regarding the core concept in this documentation.
</Warning>

Hooks are only used inside functional components. It solves the "this" 
problem when using class component. With hooks, states and side effects are more 
flexible. Also, you can easily reuse and extract code from any component
by creating custom hooks.

We're planning to incorporate more React hooks into Reaksi. But, it
will take some time before we can do all of them. Here are all the hooks 
that we've created so far :

<TOC>
    <ul>
        <li><a href='#useState'>UseState</a></li>
        <li><a href='#useEffect'>UseEffect</a></li>
        <li><a href='#useRef'>UseRef</a></li>
    </ul>
</TOC>

<h2 class='section-title' id='useState'>
    UseState
</h2>

This hook return a value, and a function / setter to update it. The hook 
accepts one argument, which will be used as the initial state when component 
renders for the first time. 

when the setter is invoked with a new state, the component will 
re-render. The setter also accept a callback as an argument.
This callback will be invoked and get the current state 
as its first argument.

During subsequent re-renders, the first value returned by useState will always 
be the most recent state after applying updates.


```jsx
import { useState } from 'reaksi';
  
const Counter = () => {
 const [count, setCount] = useState(0);
 const increment = () => setCount(count + 1);
 // You can also pass a callback to the setter
 const decrement = () => setCount((currentCount) => currentCount - 1);

 return (
   <div>
     <p>Count: {count}</p>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
   </div>
 );
}
```

<h2 class='section-title' id='useEffect'>
    UseEffect
</h2>

Other than state, your component will most likely perform some kind 
of side-effects. It can be fetching data from an API or even updating 
the state based on some conditions. UseEffect hook changes the way 
we apply effects, rather than relying on lifecycle, it forces us to think 
in effects instead.

This approach open a whole  different possibilities, and can even make us 
creative.

```jsx
import { useEffect } from 'reaksi'

// Component that will always display the current window width
function WindowWidth(props) {
 const [width, setWidth] = useState(0);

 function onResize() {
   setWidth(window.innerWidth);
 }

 useEffect(() => {
   window.addEventListener('resize', onResize);
   return () => window.removeEventListener('resize', onResize);
 }, []);

 return <div>Window width: {width}</div>;
}
```


<h2 class='section-title' id='useRef'>
    UseRef
</h2>

UseRef returns a mutable "ref" object whose ".current" property is
initialized with passed argument (initialValue). The returned object
will persist for the full lifetime of the component.

A common use case is to store a reference to a DOM node.

```jsx
import {useRef} from 'reaksi';

function TextInputWithFocusButton() {
   const inputEl = useRef(null);
   const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
   };
   return (
      <>
         <input ref={inputEl} type="text" />
         <button onClick={onButtonClick}>Focus the input</button>
      </>
   );
}
```
