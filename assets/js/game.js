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


//fight function
var fight = function(enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

// Ask player if they would like to skip or fight
var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose");

// If player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // Remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyNames[0] + ". " + enemyNames[0] + " now has " + enemyHealth + " health remaining." 
    );

// Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyNames[0] + ". " + enemyNames[0] + " now has " + enemyHealth + " health remaining."
);

// Check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyNames[0] + " has died!");
} else {
    window.alert(enemyNames[0] + " still has " + enemyHealth + " health left.");
}

// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
console.log(
    enemyNames[0] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

//Check players health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
// If player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // Confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // Subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // If no (false), ask question again by running fight() again
} else {
    fight();
}};
// If player did not choose 1 or 2 in prompt
//else {
    //window.alert("You need topick a valid option. Try again!");

//};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}


