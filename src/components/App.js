import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homePage.js';
import CharacterPage from './pages/characterPage.js';
import InitiativePage from './pages/initiativePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import HeaderBar from './headerComponent/headerBar.js';



class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <div id="WebSiteBox">
              <HeaderBar />
              <NavBar />
                 <Switch>
                 <Route path="/" component={HomePage} exact/>
                 <Route path="/character" component={CharacterPage}/>
                 <Route path="/initiative" component={InitiativePage}/>
                 </Switch>
          <Footer />
        </div>
     </BrowserRouter>
    )
  }
}

export default App;
