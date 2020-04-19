import React from 'react';
import { Card, Button, CardTitle, CardText, Row } from 'reactstrap';

const MainCards = (props) => {
  return (
   <div class="text-center">
    <Row>
      <Card body>
        <CardTitle>Create</CardTitle>
        <CardText>Write your ideas down!</CardText>
        <Button href="/journal" block>Journal</Button>
        <Button href="/character" block>Character</Button>
      </Card>
      <Card body>
        <CardTitle>Generate</CardTitle>
        <CardText>Generate things in a pinch!</CardText>
        <Button href="/monster" block>Monsters</Button>
        <Button href="/character" block>Characters</Button>

      </Card>
      <Card body>
        <CardTitle>Run</CardTitle>
        <CardText>Are your dice ready?</CardText>
        <Button href="/initiative" block>Initiative</Button>
      </Card>
    </Row>
   </div>
  );
};

export default MainCards;
