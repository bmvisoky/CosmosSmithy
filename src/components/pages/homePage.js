import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
     <div id="gradient">
      <div id="navigation">
          <div id="left-box">
             <div id="generate">GENERATE</div>
             <button id="menu-button">npc</button>
             <button id="menu-button">monster</button>
             <button id="menu-button">...</button>
          </div>
          <div id="center-box">
             <div id="create">CREATE</div>
             <button id="menu-button">world</button>
             <button id="menu-button">note</button>
             <button id="menu-button">...</button>
         </div>
         <div id="right-box">
             <div id="run">RUN</div>
            <button id="menu-button">...</button>
            <button id="menu-button">...</button>
            <button id="menu-button">...</button>
        </div>
      </div>
      </div>
    )
  }
}

export default HomePage;
