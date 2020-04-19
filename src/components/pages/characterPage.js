import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Card, Button, CardTitle, CardText, Row } from 'reactstrap';
import CharacterSheet from '../mainComponents/characterSheet.js';

let characterArray;
let randomIndex;
let randomCharacter;

const card = {  margin: 'auto',
  width: '350px',
  fontSize: '11px',
  backgroundColor: '#FDF1DC',
  color: 'black',
  padding: '5px'};

class CharacterPage extends Component {

   constructor(props) {

   super(props);
   this.generateCharacter = this.generateCharacter.bind(this);

   }

   generateCharacter() {
      characterArray = ["Acolyte", "Assassin", "Bandit", "Bandit Captain",
   		         "Berserker", "Commoner", "Cultist", "Cult Fanatic",
	                 "Driud", "Gladiator", "Gaurd", "Knight", "Mage", "Noble",
		         "Priest", "Scout", "Spy", "Thug", "Tribal Warrior", "Veteran"];

      randomIndex = Math.floor(Math.random() * characterArray.length );
      randomCharacter = characterArray[randomIndex];
      console.log( randomCharacter );

      this.getStats(randomCharacter);
   }

   getStats(character) {
      let newSpan = document.createElement('span')
      let newDiv = document.createElement('div')
      
      document.querySelector("#charNAME").innerHTML = randomCharacter;
      document.querySelector("#charARMORCLASS").innerHTML = Math.floor((Math.random() * 30) + 1)
      document.querySelector("#charHEALTH").innerHTML = Math.floor((Math.random() * 20) + 1)
      document.querySelector("#charSPEED").innerHTML = Math.floor((Math.random() * 20) + 1)
      document.querySelector("#charSTR").innerHTML =  Math.floor((Math.random() * 20) + 1)
      document.querySelector("#charDEX").innerHTML = Math.floor((Math.random() * 20) + 1)
      document.querySelector("#charCON").innerHTML = Math.floor((Math.random() * 20) + 1)
      document.querySelector("#charINT").innerHTML = Math.floor((Math.random() * 20) + 1)
      document.querySelector("#charWIS").innerHTML = Math.floor((Math.random() * 20) + 1)
      document.querySelector("#charCHA").innerHTML = Math.floor((Math.random() * 20) + 1)

    }

   render() {
    return (
	    <CharacterSheet />
           <button onClick={this.generateCharacter}>Generate!</button>
    )
  }

}


export default CharacterPage;
