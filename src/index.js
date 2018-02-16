// - Imports
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
// import store2 from './site/src/store';
import store from './app/src/store';
import SiteHome from './site/src/App';
import AppHome from './app/src/Home';
import 'bootstrap/dist/css/bootstrap.css';
// import registerServiceWorker from './registerServiceWorker';

let loggedIn = false;


// - App
ReactDOM.render(
  <ApolloProvider client={store}>
    <Router>
      <div>
        <Route exact path='/' component={loggedIn ? AppHome : SiteHome}/>
        <Route path='/app' component={AppHome}/>
        <Route path='/site' component={SiteHome}/>
      </div>
    </Router>
  </ApolloProvider>,
  
  document.getElementById('root'));

// - Service Workers
// lregisterServiceWorker();  // Enable on first, MVP deployment.
