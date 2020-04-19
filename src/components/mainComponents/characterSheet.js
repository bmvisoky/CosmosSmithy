import React from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';

const CharacterSheet = (props) => {
  return (
  <div class="text-center" style={{width: '500px'}}>
   <Card body style={card}>
      <CardTitle id="charNAME">Name</CardTitle>

      <Row>
         <Col>
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
         <Col>
            <Row>Str: </Row>
            <Row id="charSTR">10</Row>
         </Col>
         <Col>
            <Row>Dex: </Row>
            <Row id="charDEX">10</Row>
         </Col>
         <Col>
            <Row>Con: </Row>
            <Row id="charCON">10</Row>
         </Col>
         <Col>
            <Row>Int: </Row>
            <Row id="charINT">10</Row>
         </Col>
         <Col>
            <Row>Wis: </Row>
            <Row id="charWIS">10</Row>
         </Col>
         <Col>
            <Row>Cha: </Row>
            <Row id="charCHA">10</Row>
         </Col>
      </Col>
   </Card>
  </div>
  );
};

const card = {
  textAlign: 'center',
  width: '500px',
  margin: 'auto',
  fontSize: '11px',
  backgroundColor: '#FDF1DC',
  color: 'black',
  padding: '5px 0'};

export default CharacterSheet;
