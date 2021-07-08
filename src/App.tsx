import Home from './components/home';
import Layout from './components/layout';
import { Route, Router } from 'reaksi';
import HooksDoc from './components/docs/hooks';
import InstallationDoc from './components/docs/installation';
import ReduxDoc from './components/docs/redux';
import RouterDoc from './components/docs/router';
import ContextDoc from './components/docs/context';

export default function App() {
   console.log('rendered App');
   return (
      <Router>
         <Route path='/' exact>
            <Layout Page={Home} />
         </Route>
         <Route path='/docs/installation' exact>
            <Layout Page={InstallationDoc} />
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
