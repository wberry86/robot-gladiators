// Game States
// "Win" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" Player robot's health is zero or less




//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
    }

    var getPlayerName = function() {
      var name = "";
      while(name === "" || name === null) {
          name = prompt("What is your robot's name?");
      }
      {
      console.log("Your robot's name is" + name);
      return name;
      }
  };


var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, 
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
    }
    else {
        window.alert("You don't have enough money!");
    }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
    }
    else {
        window.alert("You don't have enough money!");
    }
}
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,)
    }
];


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
    
    //reset player stats
    playerInfo.reset();

  
    //function to generate a random numeric value
    var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);

        return value;
        }

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {

            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
          window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      
          // pick new enemy to fight based on the index of the enemy.names array 
          var pickedEnemyObj  = enemyInfo[i];
      
          // reset enemy health before starting new fight
          pickedEnemyObj.health = randomNumber(40, 60);
      
          //use debugger to pause script from running and check to see whats going on
          // debugger;
      
          // pass the pickedenemy.names variable's value into the fight function,where it will assume the value of the enemy.name parameter
          fight(pickedEnemyObj);

          // if player is still alive and we're not at the last enemy in the array
          if (playerInfo.health > 0 && i < enemyInfo.length -1) {

            // ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

            // if yes, take them to the store() function
            if (storeConfirm){
                shop();
            }
              
          }
      
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

    // function to generate a random numeric value
    var randomNumber = function() {
        var value = Math.floor(Math.random() * 21) + 40;

        return value;
    }

    //if player is still alive,player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
var fight = function(enemy) {

    // function to generate a random numeric value
    var randomNumber = function() {
        var value = Math.floor(Math.random() * 21) +40;

        return value;
    }

  while (enemy.health > 0 && playerInfo.health > 0) {

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
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");

        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        break;
      }
    }

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name +
          " attacked " +
          enemy.name +
          ". " +
          enemy.name +
          " now has " +
          enemy.health +
          " health remaining."
      );

      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");

        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
        break;
      } else {
        window.alert(
          enemy.name + " still has " + enemy.health + " health left."
        );
      }

      // generate random damage value based on player's attack power
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      playerInfo.health = Math.max(0, playerInfo.health - damage);

      console.log(
        enemy.name +
          " attacked " +
          playerInfo.name +
          ". " +
          playerInfo.name +
          " now has " +
          playerInfo.health +
          " health remaining."
      );

      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
      } else {
        window.alert(
          playerInfo.name + " still has " + playerInfo.health + " health left."
        );
      }
    }
  }
};

var shop = function() {

    // function to generate a random numeric value
    var randomNumber = function() {
        var value = Math.floor(Math.random() * 21) + 40;

        return value;
    }

    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice"
    );

    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "Refill": //alt new case
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE": //new case
        case "Upgrade": //alt new case
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE": //new case
        case "Leave": //alt new case
        case "leave":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
}

startGame();
console.log(playerInfo.health);
console.log("playerInfo.money", playerInfo.money);
console.log(playerInfo.attack);