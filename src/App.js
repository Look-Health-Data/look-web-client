// Imports.Core
import React, { Component } from 'react';
import Helmet from 'react-helmet';

// import logo from './logo.svg';
// import './App.css';

// Imports.Components
// import { Button } from '@progress/kendo-react-buttons';

// App
class App extends Component {

  // Boilerplate.Kendo.Constructor
  constructor(props) {
    super(props);

    this.state = {
      title: 'HH: Dashboard'
    }
  }

  // Boilerplate.Kendo.Events
  // onButtonClick = () => {
  //   this.setState({title: 'Hello there!'})
  // };

  render() {
    return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Health Hub: Home</title>
            {/*<link rel="canonical" href="http://mysite.com/example" />*/}
        </Helmet>
        <div>

        </div>
    </div>
    );
  }
}

export default App

// - Deprecated
//   render() {
//     return (
//       <div className="App">
//         {/*<header className="App-header">*/}
//           {/*<img src={logo} className="App-logo" alt="logo" />*/}
//           {/*<h1 className="App-title">Welcome to Health Hub</h1>*/}
//         {/*</header>*/}
//         {/*<p className="App-intro">*/}
//           {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
//         {/*</p>*/}
//
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">{this.state.title}</h1>
//         </header>
//         <p className="App-intro">
//           <Button
//             onClick={this.onButtonClick}
//             primary={true}
//             icon={''}
//             iconClass={''}
//             imageUrl={''}
//             imageAlt={''}
//           >
//             Clicky Clicky
//           </Button>
//         </p>
//
//       </div>
//     );
//   }
// }
