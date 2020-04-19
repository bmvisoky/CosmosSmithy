import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'reactstrap';
import CharacterSheet from '../mainComponents/characterSheet.js';

let characterArray;
let randomIndex;
let randomCharacter;


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

      <div id="gradient">
         <div style={container}>
         <Col>
          <Row>
            <CharacterSheet />
            <Card style={card}>
               Generated Description goes here. WIP.
            </Card>
          </Row>
          <Button onClick={this.generateCharacter} id="charGENERATE">Generate!</Button>
         </Col>
         </div>
      </div>
    )
  }
}

const container = {
   padding: '70px',
   paddingLeft: '25%',
   margin: 'auto'
};

const card = {
  textAlign: 'center',
  width: '500px',
  fontSize: '11px',
  backgroundColor: '#FDF1DC',
  color: 'black'
};

export default CharacterPage;
