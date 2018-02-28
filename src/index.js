// - Imports
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
// import store2 from './site/src/store';
import store from './app/src/store';
import SiteHome from './site/src/Site';
import AppHome from './app/src/Home';
import NotFound404 from './app/src/views/NotFound404'
import { GS1 as GS1, GS2, GS3, GS4,
  GettingStartedPersonType, GettingStartedWhoFor, GettingStartedTest }
  from './app/src/GettingStarted'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
// import registerServiceWorker from './registerServiceWorker';

let loggedIn = false;
// noinspection UnnecessaryLocalVariableJS
let loadSite = loggedIn;

// - App
ReactDOM.render(
  <ApolloProvider client={store}>
    <Router>
      {/*<div className={loadSite ? '' : 'outer'}>*/}
      <div className='outer'>
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
        
        <Route component={NotFound404} />
      </Switch>
      </div>
    </Router>
  </ApolloProvider>,
  
  document.getElementById('root'));

// - Service Workers
// lregisterServiceWorker();  // Enable on first, MVP deployment.
