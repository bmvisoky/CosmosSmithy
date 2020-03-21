import React, { Component } from 'react';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import HeaderBar from './headerComponent/headerBar.js';

class App extends Component {
  render() {
    return (
        <div id="WebSiteBox">
           <div id="WebsiteHeader">
              <HeaderBar />
              <NavBar />
           </div>

          <HomePage />
          <Footer />
        </div>
    )
  }
}

export default App;
