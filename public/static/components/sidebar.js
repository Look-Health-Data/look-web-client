/* eslint-disable */
/* eslint-disable-next-line */
// - Imports
import React, { Component } from 'react';
import SidebarBase from 'react-sidebar';
import './sidebar.css'
// import styles from '../css/main.css'
// Module not found: Can't resolve '../../images/banner.jpg' in '/Users/joeflack4/projects/look-web-client/src/site/static/css'

// - Resources
//   - Sidebar Docs:  https://github.com/balloob/react-sidebar
//   - React Styles Guide:  https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
//   - Industrious Theme: file:///Users/joeflack4/projects/look-web-client/_dev/static/templates/chosen/templated-industrious/index.html

// - Component
class AppSidebar extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: true  // Toggle
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen = function(open) {
    this.setState({sidebarOpen: open});
  };
  
  render() {
    // noinspection HtmlUnknownTarget, HtmlUnknownAnchorTarget
    let sidebarContent = [
        <ul className="links">
          <li><a href="index.html">Home</a></li>
          <li><a href="elements.html">Elements</a></li>
          <li><a href="generic.html">Generic</a></li>
        </ul>,
        <a href="#menu" role="button" className="close"/>
    ];
        
    // noinspection HtmlUnknownTarget, HtmlUnknownAnchorTarget
    return (
         <SidebarBase sidebar={sidebarContent}
                      open={this.state.sidebarOpen}
                      onSetOpen={this.onSetSidebarOpen}
                      styles={{}}  // Using stylesheet. This Overrides default.
                      pullRight={true}
                      id={'menu'}
                      // sidebarClassName={'menu'}
         >
           {/*Not sure where this text comes in to play.*/}
          <ul className="links">
            <li><a href="index.html">Home</a></li>
            <li><a href="elements.html">Elements</a></li>
            <li><a href="generic.html">Generic</a></li>
          </ul>,
          <a href="#menu" role="button" className="close"/>
        </SidebarBase>
    );
  }
}

export default AppSidebar;
