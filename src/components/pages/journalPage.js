import React, { Component } from 'react';
import ReactDOM from "react-dom";


class JournalPage extends Component {
    saveFile = function() {
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

          </div>
      </body>
    )
  }
}

export default JournalPage;
