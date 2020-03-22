let monsterData
let statblock = document.querySelector("#stats")


fetch('https://dl.dropboxusercontent.com/s/iwz112i0bxp2n4a/5e-SRD-Monsters.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    monsterData = data
});



document.querySelector("#generator").addEventListener("click",
  function() {
    let randMonster = monsterData[Math.floor(Math.random() * monsterData.length)]
    getStats(randMonster)

});

function getStats(monster) {
    let newSpan = document.createElement('span')
    let newDiv = document.createElement('div')
    let atk = document.querySelector('#attacks')

    document.querySelector(".name").innerHTML = monster.name
    document.querySelector(".description").innerHTML = monster.size + " " + monster.subtype + ", " + monster.alignment
    document.querySelector(".AC").innerHTML = monster.armor_class
    document.querySelector(".HP").innerHTML = monster.hit_points + " (" + monster.hit_dice + ")"
    document.querySelector(".speed").innerHTML = monster.speed
    document.querySelector("#STR").innerHTML = abilityScore(monster.strength)
    document.querySelector("#DEX").innerHTML = abilityScore(monster.dexterity)
    document.querySelector("#CON").innerHTML = abilityScore(monster.constitution)
    document.querySelector("#INT").innerHTML = abilityScore(monster.intelligence)
    document.querySelector("#WIS").innerHTML = abilityScore(monster.wisdom)
    document.querySelector("#CHA").innerHTML = abilityScore(monster.charisma)
    document.querySelector("#senses").innerHTML = monster.senses
    document.querySelector("#lang").innerHTML = monster.languages
    document.querySelector("#challenge").innerHTML = monster.challenge_rating
    abilityScore(monster)
    addAttack(monster.actions)
}

function abilityScore(skill) {
    console.log(skill)
    let modifier = Math.floor((skill - 10) / 2)
    let sign = "+"
    if (modifier <  0) {
      sign = "-"
    }

    return `${skill} (${sign}${modifier})`
    console.log(modifier)
}

function addAttack(actions) {
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
