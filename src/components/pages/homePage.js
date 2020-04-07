import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainCards from '../mainComponents/mainCards.js'


class HomePage extends Component {
  render() {
    return (
     <div id="gradient">
      <div id="navigation">
      <MainCards />

      </div>
     </div>
    )
  }
}

export default HomePage;
