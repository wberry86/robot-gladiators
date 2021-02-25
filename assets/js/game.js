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
var enemyAttack = 72;


// wrap the game logic in a startGame() function


// when the player is defeated or there area no more enemies, call an endGame() function that:

// alerts the players total stats

// asks the player if they want to play again

//If yes, call startGame() to restart game


//After the player skips or defeats an enemy (and there ara still more robots to fight):

// ask the player if they want to 'shop'

// if no, continue as normal

// if yes, call the shop() function

// in the shop() function, ask player if they want to 'refill' health, 'upgrade' 'attack' or 'leave' the shop

// if refill, subtract money points rom player and increase health

// if upgrade, subtract money points from player and increase attack power

// if leave, alert goodbye and exit the function

// if any other invalid option, call Shop() again

// function to start a new game


var startGame = function() { 

    // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {

            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
          window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      
          // pick new enemy to fight based on the index of the enemyNames array 
          var pickedEnemyName = enemyNames[i];
      
          // reset enemyHealth before starting new fight
          enemyHealth = 50;
      
          //use debugger to pause script from running and check to see whats going on
          // debugger;
      
          // pass the pickedEnemyNames variable's value into the fight function,where it will assume the value of the enemyName parameter
          fight(pickedEnemyName);
      
        } else {
          window.alert("You have lost your robot in battle! Game Over!");
          break;
        }
      }
      // play again
      endGame();

};


// function to end the entire game
var endGame = function() {

    //if player is still alive,player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    };

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart game

        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiator! Come back soon!");
    }
}


//fight function
var fight = function (enemyName) {
  while (enemyHealth > 0 && playerHealth > 0) {
    // Ask player if they would like to skip or fight
    var promptFight = window.prompt(
      "would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose"
    );
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName +
          " attacked " +
          enemyName +
          ". " +
          enemyName +
          " now has " +
          enemyHealth +
          " health remaining."
      );

      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyNames[i] + " has died!");

        // award player money for winning
        playerMoney = playerMoney + 20;
        console.log("playerMoney", playerMoney);
        break;
      } else {
        window.alert(
          enemyName + " still has " + enemyHealth + " health left."
        );
      }

      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;

      console.log(
        enemyName +
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
        break;
      } else {
        window.alert(
          playerName + " still has " + playerHealth + " health left."
        );
      }
    }
  }
};

startGame();
console.log(playerHealth);