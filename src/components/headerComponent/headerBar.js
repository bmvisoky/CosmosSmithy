import React, { Component } from 'react';
import Logo from "./logo.png"
class HeaderBar extends Component {
  render() {
    return (
     <img id="logo" src={Logo} alt="Cosmos Smithy!"/>
    )
  }
}

export default HeaderBar;
