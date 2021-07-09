export const hooksExample = {
   useState: `
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
   `,
   useEffect: `
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
   `,
};
