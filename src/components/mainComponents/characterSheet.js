import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Container, Col } from 'reactstrap';

const CharacterSheet = (props) => {
  return (
  <div class="text-center" style={{width: '500px'}}>
   <Card body>
      <CardTitle>Name</CardTitle>

      <Row>
         <Col>
            <Row id="charNAME">Berserker</Row>
            <Row></Row>
         </Col>
         <Col>
            <Row>Health:</Row>
            <Row id="charHEALTH">0</Row>
         </Col>
         <Col>
            <Row> Armor Class:</Row>
            <Row id="charARMORCLASS">0</Row>
         </Col>
         <Col>
            <Row>Speed:</Row>
            <Row id="charSPEED">0</Row>
         </Col>
      </Row>
      <Col>
      <Row id="#charSTR">Str: 10</Row>
      <Row id="charDEX">Dex: 10</Row>
      <Row id="charCON">Con: 10</Row>
      <Row id = "charINT">Int: 10</Row>
      <Row id = "charWIS">Wis: 10</Row>
      <Row id="charCHA">Cha: 10</Row>
      </Col>
      <Button id = "charGENERATE">Generate!</Button>
   </Card>
  </div>
  );
};

export default CharacterSheet;
