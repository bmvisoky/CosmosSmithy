import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><a href="home">Home</a></li>
          <li className="navButton"><Link to="/character">Character</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
