import React, { Component } from 'react';
import ReactDOM from "react-dom";



    let monsterData;


class CharacterPage extends Component {
  constructor(props) {

    super(props);

    fetch('https://dl.dropboxusercontent.com/s/iwz112i0bxp2n4a/5e-SRD-Monsters.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        monsterData = data
    });
    this.generateMonster = this.generateMonster.bind(this);
  }
  generateMonster() {
    let randMonster = monsterData[Math.floor(Math.random() * monsterData.length)]
    this.getStats(randMonster)
  }

  abilityScore(skill) {
      console.log(skill)
      let modifier = Math.floor((skill - 10) / 2)
      let sign = "+"
      if (modifier <  0) {
        sign = "-"
      }

      return `${skill} (${sign}${modifier})`
      console.log(modifier)
  }
  addAttack(actions) {
    document.getElementById("attacks").innerHTML = "";
    for (let i in actions) {
        let name = actions[i].name
        let descrip = actions[i].desc
        document.querySelector('#attacks').insertAdjacentHTML(
          'beforeend',
          `<div class="attack">
            <span class="attackname">${name} </span>
            <span class="descri">${descrip}</span>
           </div>`
         )
    }
  }

  getStats(monster) {
      let newSpan = document.createElement('span')
      let newDiv = document.createElement('div')
      let atk = document.querySelector('#attacks')

      document.querySelector(".name").innerHTML = monster.name
      document.querySelector(".description").innerHTML = monster.size + " " + monster.subtype + ", " + monster.alignment
      document.querySelector(".AC").innerHTML = monster.armor_class
      document.querySelector(".HP").innerHTML = monster.hit_points + " (" + monster.hit_dice + ")"
      document.querySelector(".speed").innerHTML = monster.speed
      document.querySelector("#STR").innerHTML = this.abilityScore(monster.strength)
      document.querySelector("#DEX").innerHTML = this.abilityScore(monster.dexterity)
      document.querySelector("#CON").innerHTML = this.abilityScore(monster.constitution)
      document.querySelector("#INT").innerHTML = this.abilityScore(monster.intelligence)
      document.querySelector("#WIS").innerHTML = this.abilityScore(monster.wisdom)
      document.querySelector("#CHA").innerHTML = this.abilityScore(monster.charisma)
      document.querySelector("#senses").innerHTML = monster.senses
      document.querySelector("#lang").innerHTML = monster.languages
      document.querySelector("#challenge").innerHTML = monster.challenge_rating
      this.abilityScore(monster)
      this.addAttack(monster.actions)
  }

  render() {
    return (
     <body>
     <div id="gradient">
         <div id="statblock">
           <button onClick={this.generateMonster}>Generate Monster!</button>
           <div class="name">Ogre</div>
           <div class="description">Large giant, chaotic evil</div>

           <div class="gradient"></div>

           <div class="red">
               <div ><span class="bold">Armor Class </span><span class="AC"> 11 (hide armor)</span></div>
               <div><span class="bold">Hit Points </span><span class="HP"> 59 (7d10+21)</span></div>
               <div><span class="bold">Speed </span><span class="speed"> 40 ft.</span></div>
           </div>

           <div class="gradient"></div>

           <table>
               <tr><th>STR    </th><th>DEX   </th><th>CON    </th><th>INT   </th><th>WIS   </th><th>CHA   </th></tr>
               <tr><td id="STR">19 (+4)</td><td id="DEX">8 (-1)</td><td id="CON">16 (+3)</td><td id="INT">5 (-3)</td><td id="WIS">7 (-2)</td><td id="CHA">7 (-2)</td></tr>
           </table>

           <div class="gradient"></div>

           <div class="red">
               <div><span class="bold">Senses </span><span id="senses"> darkvision 60ft., passive Perception 8</span></div>
               <div><span class="bold">Languages </span><span id="lang"> Common, Giant</span></div>
               <div><span class="bold">Challenge </span><span id="challenge"> 2 (450 XP)</span></div>
           </div>

           <div class="gradient"></div>

           <div class="actions red">Actions</div>
           <div class="hr"></div>
           <div id="attacks">
             <div class="attack">
               <span class="attackname">Greatclub.</span>
               <span class="description"> Melee Weapon Attack:</span>
               <span>+6 to hit, reach 5 ft., one target.</span>
               <span class="description">Hit:</span>
               <span>13 (2d8+4) bludgeoning damage.</span>
             </div>
           </div>
         </div>
     </div>
     <script src="monsterGen.js"></script>
     </body>
    )
  }
}


export default CharacterPage;
