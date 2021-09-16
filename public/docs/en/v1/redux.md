# Redux

Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used 
with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook's 
Flux architecture, it was created by Dan Abramov and Andrew Clark.

Reaksi has a built-in support for Redux. No need to install additional plugin to start working with Redux. Reaksi 
provides an API that enable your component to interact with Redux store, so you don't have to write that custom logic 
yourself. Reaksi implements performance optimization to make sure component will only re-renders if the data it needs 
has changed.

To use Redux in Reaksi, you start by installing Redux package and then create your store, reducer, and action. After that,
import "ReduxProvider" from reaksi and pass it the Redux store. Wrap your whole application with "ReduxProvider" to make 
sure every child component gets access to the store.

```jsx
//App.js
import Reaksi from 'reaksi';
import {ReduxProvider} from 'reaksi';
import {createStore} from 'redux';
import Counter from './Counter';
import reducer from './reducer'; 


const store = createStore(reducer);

export default function App(){
   return (
      <ReduxProvider store={store}>
         <Counter/>
      </ReduxProvider>
   );   
}
```

```js
//reducer.js
export default function reducer(state = {count:1}, action) {
   switch (action.type) {
      case 'INCREMENET':
         return state.count + 1;
      case 'DECREMENT' : 
         return state.count - 1;
      default:
         return state;
   }
}
```

```jsx
//Counter.js
import Reaksi from 'reaksi';
import { useSelector, useDispatch } from 'reaksi';

export default function Counter() {
   const count = useSelector(state => state.count);
   
   return (
      <div>
         <button onClick={() => useDispatch({type:'INCREMENT'})}>+</button>
         <div>{count}</div>
         <button onClick={() => useDispatch({type:'DECREMENT'})}>-</button>
      </div>
   );
}
```