import React, { Component } from 'react';
import ReactDOM from "react-dom";

class InitiativePage extends Component {
  addToInit() {
    let table = document.getElementById("initTable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = document.getElementById("charName").value;
    cell2.innerHTML = document.getElementById("charInit").value;
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

        if( Number(x.innerHTML) > Number(y.innerHTML) ) {
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
     <div id="statblock">
     <div>
        <h4>Enter a new character:</h4>
        <div>
            <input id="charInit" type="text" placeholder="Name"/>
            <input id="charName" type="number" placeholder="Initiative"/>
        </div>
        <button onClick={this.addToInit}>Add To Initiative</button>
        <button onClick={this.startBattle}>Start the encounter!</button>
    </div>

    <div>
        <table id="initTable">
            <thead>
                <tr>
                    <th>Initiative</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <hr/>
    </div>

    </div>

    </div>
</body>
    )
  }
}


export default InitiativePage;
