// Game States
// "Win" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;
console.log(
  playerName +
    " attacked " +
    enemyNames[i] +
    ". " +
    enemyNames[i] +
    " now has " +
    enemyHealth +
    " health remaining."
);

// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
console.log(
  enemyNames[i] +
    " attacked " +
    playerName +
    ". " +
    playerName +
    " now has " +
    playerHealth +
    " health remaining."
);

//fight function
var fight = function (enemyName) {
  while (enemyHealth > 0) {
    
  

// Alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");

// Ask player if they would like to skip or fight
var promptFight = window.prompt(
  "would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose"
);

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName +
      " attacked " +
      enemyNames[i] +
      ". " +
      enemyNames[i] +
      " now has " +
      enemyHealth +
      " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyNames[i] + " has died!");
  } else {
    window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyNames[i] +
      " attacked " +
      playerName +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes, leave fight
  if (confirmSkip) {
    window.alert(playerName + " has chosen to skip the fight!");
    playerMoney = playerMoney - 2;
  } else {
    fight();
  }
} else {
  window.alert("You need to choose a valid option. Try again!");
}}}

for (var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
