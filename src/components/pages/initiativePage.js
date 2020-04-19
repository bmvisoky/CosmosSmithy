import React, { Component } from 'react';
import { Card, Button, CardTitle, Row, Col, Table, Form, FormGroup, Label, Input } from 'reactstrap';


class InitiativePage extends Component {
  addToInit() {
    let table = document.getElementById("initTable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    // Add some text to the new cells:
    cell1.innerHTML = document.getElementById("charInit").value;
    cell2.innerHTML = document.getElementById("charName").value;
    cell3.innerHTML = document.getElementById("charHealth").value;
  }

  startBattle() {
    let table = document.getElementById("initTable");
    let switching = true;
    var i, x, y, shouldSwitch;

    while (switching) {
      switching = false;
      let rows = table.rows;

      for(i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;

        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];

        if( Number(x.innerHTML) < Number(y.innerHTML) ) {
          shouldSwitch = true;
          break;
        }
      }
      if( shouldSwitch ) {
        rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
        switching = true;
      }
    }
  }
  render() {
    return (
     <body>
     <div id="gradient">
     <div style={container}>
      <Col>
         <Card body style={card}>
         <CardTitle>Enter a Character</CardTitle>
            <Col>
               <div style={{paddingLeft: '50px', paddingRight: '50px'}}>
                  <Form>
                     <Row>
                        <FormGroup>
                           <Label>Initiative</Label>
                           <Input id="charInit" type="number" name="initiative" placeholder="Initiative" />
                        </FormGroup>
                        <FormGroup>
                           <Label>Name</Label>
                           <Input id="charName" type="text" name="name" placeholder="Name" />
                        </FormGroup>
                        <FormGroup>
                           <Label>Health</Label>
                           <Input id="charHealth" type="number" name="health" placeholder="Health" />
                        </FormGroup>
                     </Row>
                  </Form>

               </div>
               <div>
                 <Button size="sm" block onClick={this.addToInit}>Add To Initiative</Button>
                 <Button size="sm" block onClick={this.startBattle}>Start the encounter!</Button>
               </div>
            </Col>
         </Card>
         <Card body style={card}>
             <div>
             <Table hover id="initTable">
                <thead>
                  <tr>
                    <th>Initiative</th>
                    <th>Name</th>
                    <th>Health</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
               </Table>
                 <hr/>
             </div>
          </Card>
       </Col>
       </div>
    </div>
</body>
    )
  }
}

const card = {
  textAlign: 'center',
  width: '800px',
  margin: 'auto',
  fontSize: '11px',
  backgroundColor: '#FDF1DC',
  color: 'black',
  padding: '5px 0'};

const container = {
   paddingTop: '5%',
   margin: 'auto'
};

export default InitiativePage;
