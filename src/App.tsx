import Home from './components/home';
import Layout from './components/layout';
import { Route, Router } from 'reaksi';
import Doc from '@root/components/doc/Doc';

export default function App() {
   console.log('rendered App');

   return (
      <Router>
         <Route path='/' exact>
            <Layout Page={Home} />
         </Route>
         <Route path='/docs'>
            <Layout Page={Doc} />
         </Route>
      </Router>
   );
}
