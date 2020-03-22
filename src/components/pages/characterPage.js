import React, { Component } from 'react';

class CharacterPage extends Component {
  render() {
    return (
     <div id="gradient">
         <div id="statblock">
           <button id="generator">Generate Monster!</button>
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
    )
  }
}
export default CharacterPage;
