# Router

Router is one of the most important feature in Reaksi. It allows user to navigate between 
different pages without refreshing the page. In Reaksi, router is heavily inspired by 
react-router-dom, a popular routing library commonly used in React. 

Here is how you can set up basic routing in Reaksi :

```jsx
import {Link, Router, Route} from 'reaksi';
import Home from './pages';
import About from './pages';

export default function App (){
   return (
      <div>
         <ul>
            <li>
               // Link is a special component provided by router
               // It renders an anchor element
               <Link to='/'>
                  Home
               </Link>
            </li>
            <li>
               // Link is a special component provided by router
               // It renders an anchor element
               <Link to='/about'>
                  About
               </Link>
            </li>
         </ul>
         <Router>
            // You wrap things in a Route component when you want to display
            // a specific page given the current active route
            <Route path='/' exact>
               <Home/>
            </Route>
            <Route path='/about' exact>
               <About/>
            </Route>
         </Router>
      </div>
   );
}
```

Router supports navigating between pages by pushing new path to routing 
history manually. You do this by invoking useRouter hook, which returns a history 
object. 

```jsx
import {Router, Route} from 'reaksi';
import Home from './pages';
import About from './pages';

export default function App (){
   // useRouter hook
   const router = useRouter();
   
   const goTo = (path) => {
      // pushing new path to the history
      router.push(path);
   }
   
   return (
      <div>
         <ul>
            <li>
               // we replace Link with regular button here
               // we handle navigating to any route manually
               // this is particularly useful when we need additional operation
               <Button onClick={() => goTo('/')}>
                  Home
               </Button>
            </li>
            <li>
               // we replace Link with regular button here
               // we handle navigating to any route manually
               // this is particularly useful when we need additional operation
               <Button onClick={() => goTo('/about')}>
                  About
               </Button>
            </li>
         </ul>
         <Router>
            // You wrap things in a Route component when you want to display
            // a specific page given the current active route
            <Route path='/' exact>
               <Home/>
            </Route>
            <Route path='/about' exact>
               <About/>
            </Route>
         </Router>
      </div>
   );
}
```

Dynamic routing is also possible using Router. Below is how you create dynamic routing :

```jsx
// App.js file
import {Router, Route} from 'reaksi';
import Home from './pages';
import UserProfile from './pages';

export default function App (){
   return (
      <Router>
         <Route path='/' exact>
            <Home/>
         </Route>
         // wrap the dynamic value in angles bracket
         <Route path='/user/[id]'>
            <UserProfile/>
         </Route>
      </Router>
   );
}
```

You can access the dynamic value in matching route using "useParam" hook inside nested 
child component.

```jsx
//UserProfile.js file
import {useParam, Router, Route} from 'reaksi';

export default function UserProfile() {
   // useParam return parameters object
   const params = useParam();
   
   return (
      // any dynamic value in matching route will be accessible as property
      <h1> User id is {params.id} </h1>
   );
}
```