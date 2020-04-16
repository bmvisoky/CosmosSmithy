import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Card, Button, CardTitle, CardText, Row } from 'reactstrap';
import CharacterSheet from '../mainComponents/characterSheet.js';

const card = {  margin: 'auto',
  width: '350px',
  fontSize: '11px',
  backgroundColor: '#FDF1DC',
  color: 'black',
  padding: '5px'};

class CharacterPage extends Component {
  render() {
    return (
     <CharacterSheet />

    )
  }
}


export default CharacterPage;
