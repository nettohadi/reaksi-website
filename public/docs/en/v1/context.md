# Context

Context provides a way to pass data through the component tree 
without having to pass it via props  manually at every level. A very popular 
use case for this is UI theme that is required by many components within an application. 

In a typical Reaksi application, data is passed from parent to child via props, 
but such usage can be tiring for data that is used in many  places.  Context provides a way 
to share values between components without having to explicitly pass a prop through every level of the tree.

To use context, we first need to initialize it using "createContext". We can create a context in a separate file
and then exporting it, so other component can use it.

```jsx
//File Theme.js
import {createContext} from "reaksi";
const Theme = createContext('light');
export default Theme;
```

In our root component, we wrap the whole component tree with context provider. Doing this will make sure all 
child components have access to the context.

```jsx
//File App.js
import Theme from './Theme.js';

export default function App() {
   return (
      <Theme.Provider value="light">
         <OtherComponent>
            <DisplayTheme />
         </OtherComponent>
      </Theme.Provider>
   )
}
```

In DisplayTheme component, we can access the context data using "useContext" hook, without any higher-order 
or wrapper components. The first argument must be the context object that's created from a "createContext" call.

```jsx
//File DisplayTheme.js
import {useContext} from 'reaksi';
import Theme from './Theme.js';

export default function DisplayTheme(){
   const theme = useContext(Theme);
   return <p>Current theme: {theme}</p>;
}
```
