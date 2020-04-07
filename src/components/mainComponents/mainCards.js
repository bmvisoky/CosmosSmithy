import React from 'react';
import { Card, Button, CardTitle, CardText, Row } from 'reactstrap';

const MainCards = (props) => {
  return (
   <div class="text-center">
    <Row>
      <Card body>
        <CardTitle>Create</CardTitle>
        <CardText>Write your ideas down!!</CardText>
        <Button href="/journal" block>Journal</Button>
        <Button block>Coming Soon!</Button>
        <Button block>Coming Soon!</Button>
      </Card>
      <Card body>
        <CardTitle>Generate</CardTitle>
        <CardText>Generate things in a pinch!</CardText>
        <Button href="/character" block>Monsters</Button>
        <Button block>Coming Soon!</Button>
        <Button block>Coming Soon!</Button>
      </Card>
      <Card body>
        <CardTitle>Run</CardTitle>
        <CardText>Are your dice ready?</CardText>
        <Button href="/initiative" block>Initiative</Button>
        <Button block>Coming Soon!</Button>
        <Button block>Coming Soon!</Button>
      </Card>
    </Row>
   </div>
  );
};

export default MainCards;
// <div id="left-box">
//    <div id="generate">GENERATE</div>
//    <button id="menu-button">npc</button>
//    <button id="menu-button"><Link to="/character">Monster</Link></button>
//    <button id="menu-button">...</button>
//
// </div>
// <div id="center-box">
//    <div id="create">CREATE</div>
//    <button id="menu-button">world</button>
//    <button id="menu-button"><Link to="/journal">Journal</Link></button>
//    <button id="menu-button">...</button>
// </div>
// <div id="right-box">
//    <div id="run">RUN</div>
//   <button id="menu-button"><Link to="/initiative">Initiative</Link></button>
//   <button id="menu-button">...</button>
//   <button id="menu-button">...</button>
// </div>
