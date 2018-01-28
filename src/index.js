// - Imports
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';
import App from './App';
import { default as PublicSite} from './site/PublicSite';
// import registerServiceWorker from './registerServiceWorker';

// - Authentication
let loggedIn = false;

// - Routes
const BasicExample = () => (
  <Router>
    <div>
      {/*<ul>*/}
        {/*<li><Link to="/">Home</Link></li>*/}
        {/*<li><Link to="/about">About</Link></li>*/}
        {/*<li><Link to="/topics">Topics</Link></li>*/}
      {/*</ul>*/}
      {/*<hr/>*/}
        {/*  TODO: Instead, reroute to /app if logged in. */}
        {
          loggedIn
            ? <Route exact path="/" component={App}/>
            : <Route exact path="/" component={PublicSite}/>
        }
      <Route exact path="/app" component={App}/>
      <Route path="/site" component={PublicSite}/>
    </div>
  </Router>
);
// export default BasicExample

// - Render
ReactDOM.render(<BasicExample />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// - Service Workers
// lregisterServiceWorker();  // Enable on first, MVP deployment.

// - TODO
//   - React Router Links
// import {Link} from 'react-router-dom';
// <Link to={`${match.url}/rendering`}>
//   Rendering with React
// </Link>
