import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

class JournalPage extends Component {
  render() {
    return (
      <body class = "JournalBody">
          <div class="Journaldiv">
            <div class="Journaldiv">
              New Journal Entry: <br></br>
            </div>
              <div class="JournalTextInput">
                  <textarea class="JournalTextInput" id="msg" name="msg" placeholder="Create Journal Entry"></textarea>
              </div>
              <div class="Journaldiv">
                  <Button class="JournalButton" id="bt" onClick={this.saveFile}>Save Journal</Button>
              </div>
              <Table hover id="JournalTable">
                 <thead>
                   <tr>
                     <th>Journal</th>
                   </tr>
                 </thead>
                 <tbody>
                 </tbody>
                </Table>
          </div>
      </body>
    )
  }
  saveFile() {
    let table = document.getElementById("JournalTable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    cell1.innerHTML = document.getElementById("msg").value;
  }
}

export default JournalPage;
