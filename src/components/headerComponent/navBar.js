import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><a href="home">Home</a></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
