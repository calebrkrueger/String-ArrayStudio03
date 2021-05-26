let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet0 = food.split(",").sort();

let cabinet1= equipment.split(",").sort();

let cabinet2 = pets.split(",").sort();

let cabinet3 = sleepAids.split(",").sort();

//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(cabinet0,cabinet1,cabinet2,cabinet3);
console.log(cargoHold);

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
/*let userSelection = input.question("Select a cabinet (0 - 3) in the cargoHold:");*/


//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
/*if (userSelection >= 0 && userSelection <= 3){
  console.log(cargoHold[userSelection]);
}else console.log('Invalid entry');*/


//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let userSelection2 = input.question("Select a cabinet (0 - 3) in the cargoHold:");
let userSelection3 = input.question("Enter item name:");
if (userSelection2 >= 0 && userSelection2 <= 3 && cargoHold[userSelection2].includes(userSelection3.toLowerCase())){ 
  console.log(`Cabinet ${userSelection2} DOES contain ${userSelection3}.`);
} else
console.log(`Cabinet ${userSelection2} DOES NOT contain ${userSelection3}.`);
