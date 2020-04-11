import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Container, Col } from 'reactstrap';

const CharacterSheet = (props) => {
  return (
  <div class="text-center" style={{width: '500px'}}>
   <Card body>
      <CardTitle>Name</CardTitle>

      <Row>
         <Col>
            <Row></Row>
            <Row></Row>
         </Col>
         <Col>
            <Row>Health:</Row>
            <Row>0</Row>
         </Col>
         <Col>
            <Row>Armor Class:</Row>
            <Row>0</Row>
         </Col>
         <Col>
            <Row>Speed:</Row>
            <Row>0</Row>
         </Col>
      </Row>
      <Col>
      <Row>Str: 10</Row>
      <Row>Dex: 10</Row>
      <Row>Con: 10</Row>
      <Row>Int: 10</Row>
      <Row>Wis: 10</Row>
      <Row>Cha: 10</Row>
      </Col>
      <Button>Generate!</Button>
   </Card>
  </div>
  );
};

export default CharacterSheet;
