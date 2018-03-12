// - Imports
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
// noinspection NpmUsedModulesInstalled
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import store2 from './site/src/store';
import store from './app/src/store';
import SiteHome from './site/src/Site';
import AppHome from './app/src/Home';
import NotFound404 from './app/src/views/NotFound404'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import {
  GettingStartedPersonType, GettingStartedTest, GettingStartedWhoFor
} from "./app/src/views/GettingStarted/_ignored/GettingStartedIgnored";
import GS1 from "./app/src/views/GettingStarted/pages/1";
import GS2 from "./app/src/views/GettingStarted/pages/2";
import GS3 from "./app/src/views/GettingStarted/pages/3";
import GS4 from "./app/src/views/GettingStarted/pages/4";
import GS5 from './app/src/views/GettingStarted/pages/5';
// import registerServiceWorker from './registerServiceWorker';

let loggedIn = false;
// noinspection UnnecessaryLocalVariableJS
let loadSite = loggedIn;

// - App
ReactDOM.render(
  <ApolloProvider client={store}>
    <MuiThemeProvider>
      <Router>
        {/*<div className={loadSite ? '' : 'outer'}>*/}
        {/*<div className='outer'>*/}
        {/*<div>*/}
        <Switch>
          <Route exact path='/' component={loadSite ? AppHome : SiteHome}/>
          <Route path='/home' component={AppHome}/>
          <Route path='/site' component={SiteHome}/>
          {/*This route instead somehow causes getting-started/* to return GettingStarted1*/}
          {/*<Route path='/getting-started/' component={GettingStarted1}/>*/}
          <Route path='/getting-started/who-for' component={GettingStartedWhoFor}/>
          <Route path='/getting-started/person-type' component={GettingStartedPersonType}/>
          <Route path='/getting-started/test' component={GettingStartedTest}/>
          
          <Route path='/getting-started/1' component={GS1}/>
          <Route path='/getting-started/2' component={GS2}/>
          <Route path='/getting-started/3' component={GS3}/>
          <Route path='/getting-started/4' component={GS4}/>
          <Route path='/getting-started/5' component={GS5}/>
          
          <Route component={NotFound404} />
        </Switch>
        {/*</div>*/}
      </Router>
    </MuiThemeProvider>
  </ApolloProvider>,
  
  document.getElementById('root'));

// - Service Workers
// lregisterServiceWorker();  // Enable on first, MVP deployment.
