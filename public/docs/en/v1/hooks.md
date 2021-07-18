# Hooks

Hooks is a new concept that allows you to compose state and side
effects. They allow you to reuse stateful logic between components.

<Warning>
    We expect you to have at least a basic <un></un>derstanding of React before
    going any further. We skip a lot of details regarding core concept
    and everything, so it will be confusing if you don't know React.
</Warning>


Hooks are used inside functional component, and avoid many pitfalls
of the "this" keyword relied on by the class components API. Instead
of accessing properties from the component instance, hooks rely on
closures.


We're planning to incorporate all React hooks into Reaksi. But it it
will take some time before we can do all of them. Here are all hooks
we created so far :

<TOC>
    <ul>
        <li><a href='#useState'>UseState</a></li>
        <li><a href='#useEffect'>UseEffect</a></li>
        <li><a href='#useRef'>UseRef</a></li>
    </ul>
</TOC>

<h2 className='section-title' id='useState'>
    UseState
</h2>

This hook accepts an argument, this will be the initial state. When
invoking this hook returns an array of two variables. The first
being the current state and the second one being the setter for our
state.


Our setter behaves similar to the setter of our classic state. It
accepts a value or a function with the currentState as argument.


When you call the setter and the state is different, it will trigger
a rerender starting from the component where that useState has been
used.

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

<h2 className='section-title' id='useEffect'>
    UseEffect
</h2>

Side-Effects are at the heart of many modern Apps. Whether you want
to fetch some data from an API or trigger an effect on the document,
you'll find that the useEffect fits nearly all your needs. It's one
of the main advantages of the hooks API, that it reshapes your mind
into thinking in effects instead of a component's lifecycle.

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


<h2 className='section-title' id='useRef'>
    UseRef
</h2>

UseRef returns a mutable "ref" object whose ".current" property is
initialized with passed argument (initialValue). The returned object
will persist for the full lifetime of the component.

A common use case is to store a reference to a DOM node.

```jsx
import {useRef} from 'reaksi';

function Component() {
  // Initialize useRef with an initial value of `null`
  const input = useRef(null);
  const onClick = () => input.current && input.current.focus();

  return (
    <>
      <input ref={input} />
      <button onClick={onClick}>Focus input</button>
    </>
  );
}
```
