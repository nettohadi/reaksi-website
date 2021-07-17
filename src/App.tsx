import Home from './components/home';
import Layout from './components/layout';
import { Route, Router } from 'reaksi';
import HooksDoc from './components/contents/hooks';
// import InstallationDoc from './components/contents/installation';
import ReduxDoc from './components/contents/redux';
import RouterDoc from './components/contents/router';
import ContextDoc from './components/contents/context';
import ComponentDoc from '@root/components/contents/component';
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
         <Route path='/docs/component' exact>
            <Layout Page={ComponentDoc} />
         </Route>
         <Route path='/docs/hooks' exact>
            <Layout Page={HooksDoc} />
         </Route>
         <Route path='/docs/redux' exact>
            <Layout Page={ReduxDoc} />
         </Route>
         <Route path='/docs/router' exact>
            <Layout Page={RouterDoc} />
         </Route>
         <Route path='/docs/context' exact>
            <Layout Page={ContextDoc} />
         </Route>
      </Router>
   );
}
