import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Card, Button, CardTitle, CardText, Row, Col, Table, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class JournalPage extends Component {
    saveFile = function() {
          let table = document.getElementById("JournalTable");
          let row = table.insertRow(1);
          let cell1 = row.insertCell(0);
          cell1.innerHTML = document.getElementById("msg").value;
        }
      /*

      const msg = document.getElementById('msg');


      let JournalTxt = msg.value;


      const textToBLOB = new Blob([JournalTxt], { type: 'text/plain' });
      const sFileName = 'JournalEntry.txt';

      let newLink = document.createElement("a");
      newLink.download = sFileName;

      if (window.webkitURL != null) {
          newLink.href = window.webkitURL.createObjectURL(textToBLOB);
      }
      else {
          newLink.href = window.URL.createObjectURL(textToBLOB);
          newLink.style.display = "none";
          document.body.appendChild(newLink);
      }

      newLink.click();
  }
*/
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
                  <input type="button" class="JournalButton" id="bt" value="Save Journal" onClick={this.saveFile} />
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
}

export default JournalPage;
