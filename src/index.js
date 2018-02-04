// - Imports
import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
// import Script from 'react-load-script';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import { default as PublicSite} from './site/PublicSite';
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';

// - Authentication
let loggedIn = false;

// - Routes
const Client = () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>~ Health Hub ~</title>
            {/*<link rel="canonical" href="http://mysite.com/example" />*/}
        </Helmet>
        <Router>
              <div>

              {/*<ul>*/}
                {/*<li><Link to="/">Home</Link></li>*/}
                {/*<li><Link to="/about">About</Link></li>*/}
                {/*<li><Link to="/topics">Topics</Link></li>*/}
              {/*</ul>*/}
              {/*<hr/>*/}
                {/*  TODO: Instead, reroute to /app if logged in. */}
                {/*{*/}
                  {/*loggedIn*/}
                    {/*? <Route exact path="/" component={App}/>*/}
                    {/*: <Route exact path="/" component={PublicSite}/>*/}
                {/*}*/}
              {/*<Route path={!loggedIn ? '/app' : '/app'} component={App}/>*/}
              <Route exact path='/' component={loggedIn ? App : PublicSite}/>

              <Route path='/app' component={App}/>
              <Route path='/site' component={PublicSite}/>
                  </div>

                {/*<Route path={loggedIn ? '/site' : '/(|site)'} component={PublicSite}/>*/}
        </Router>
        {/*<Script url=''/>*/}
		{/*<Script url="static/js/jquery.min.js"/>*/}
		{/*<Script url="static/js/browser.min.js"/>*/}
		{/*<Script url="static/js/breakpoints.min.js"/>*/}
		{/*<Script url="static/js/util.js"/>*/}
		{/*<Script url="static/js/main.js"/>*/}
    </div>



);

// - Render
ReactDOM.render(<Client />, document.getElementById('root'));

// - Service Workers
// lregisterServiceWorker();  // Enable on first, MVP deployment.

// - TODO
//   - React Router Links
// import {Link} from 'react-router-dom';
// <Link to={`${match.url}/rendering`}>
//   Rendering with React
// </Link>
