import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DiceComponent = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>Dice Roller!</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Dice Roller</ModalHeader>
        <ModalBody id="bodyText">
          Roll that dice!
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={d4}>d4</Button>{' '}
          <Button color="info" onClick={d6}>d6</Button>{' '}
          <Button color="warning" onClick={d8}>d8</Button>
          <Button color="link" onClick={d10}>d10</Button>{' '}
          <Button color="info" onClick={d12}>d12</Button>{' '}
          <Button color="primary" onClick={d20}>d20</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}


  const d4 = () => {
    var random = Math.floor(Math.random() * 4) + 1;
    document.getElementById("bodyText").innerHTML = random;
  }

  const d6 = () => {
    var random = Math.floor(Math.random() * 6) + 1;
    document.getElementById("bodyText").innerHTML = random;
  }

  const d8 = () => {
    var random = Math.floor(Math.random() * 8) + 1;
    document.getElementById("bodyText").innerHTML = random;
  }

  const d10 = () => {
    var random = Math.floor(Math.random() * 10) + 1;
    document.getElementById("bodyText").innerHTML = random;

  }

  const d12 = () => {
    var random = Math.floor(Math.random() * 12) + 1;
    document.getElementById("bodyText").innerHTML = random;
  }

  const d20 = () => {
    var random = Math.floor(Math.random() * 20) + 1;
    document.getElementById("bodyText").innerHTML = random;
  }


export default DiceComponent;
