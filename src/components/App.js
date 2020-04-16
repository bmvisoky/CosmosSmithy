import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homePage.js';
import MonsterPage from './pages/monsterPage.js';
import InitiativePage from './pages/initiativePage.js';
import CharacterPage from './pages/characterPage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import JournalPage from './pages/journalPage.js';
import Carousel from './headerComponent/carousel.js';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <div id="WebSiteBox">
              <NavBar />
              <Carousel />
                 <Switch>
                 <Route path="/" component={HomePage} exact/>
                 <Route path="/monster" component={MonsterPage}/>
                 <Route path="/initiative" component={InitiativePage}/>
                 <Route path="/journal" component={JournalPage}/>
                 <Route path="/character" component={CharacterPage}/>
                 </Switch>
          <Footer />
        </div>
     </BrowserRouter>
    )
  }
}

export default App;
