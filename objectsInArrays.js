/* *********************************    Objects inside arrays      ********************************* */


// *************************************************************************************************
//    IMPORTANT NOTE:
//      First, copy ALL your code from the previous exercise and paste it at the top of this file.
//      Then continue with the instructions below:
// *************************************************************************************************

      // SHORTENED VERSION OF SOLUTIONS FROM PREVIOUS SECTIONS:
      var myPenguin = {
        character: "Penguin McPenguinFace",
        origin: "Donald Duck",
        notes: "A baby penguin in the classic 1939 cartoon \"Donald's Penguin\".",
        canFly: true,
        
        chirp: function() {
          console.log("CHIRP CHIRP! Is this what penguins sound like?");
        },
        
        sayHello: function() {
          console.log("Hello, I'm a penguin and my name is " + this.character + "!");
        },
        
        fly: function() {
          if (this.canFly) {
            console.log("I can fly!");
          } else {
            console.log("No flying for me!");
          }
        },
        
        favoriteFoods: [ 'fish', 'ice cream', 'hot chocolate', 'pineapples' ],
        
        outfit: {
          hat: 'top hat',
          shirt: 'Hawaiian shirt',
          shoes: 'flip-flops',
          accessory: 'pocket watch'
        }
        
      };

/* *********************************    Objects inside arrays      ********************************* */

// For these last few challenges, I'll create three penguins for you to work with:

var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};


// 46. Create a new variable named penguins and set it equal to an array that lists these three penguins! (Hint: remember you can put variable names inside an array, not just hard-coded values! And remember that variable names don't have quotes around them.)

var penguins = [gunter, ramon, fred];


// 47. Access the first penguin in the list and print it to the console using console.log() -- notice that you can see all the properties and methods of that object listed in the console! (Hint: remember that array indexes start counting at 0, not 1!)


console.log(penguins[0]);


// 48. Create a new variable called secondPenguin and set it equal to the second penguin in your penguins array.

var secondPenguin = penguins[1];


// 49. Print to the console the name of the last penguin in the list.

console.log(penguins[2]);


// 50. Remember the penguin you created earlier, with the variable name of myPenguin? Add that penguin to the end of the penguins array!

penguins.push(myPenguin);


// 51. Print the length of the penguins array to the console.

console.log(penguins.length);


// 52. Write one more line of code to change the first penguin's canFly property to the value true (overriding its existing value).

penguins[0].canFly = true;


// 53. Call the sayHello method of the first penguin in your penguins array!

penguins[0].sayHello();


// 54. Write a for loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.

for (var index = 0; index < penguins.length; index++) {
  console.log(penguins[index].name);
}


// 55. Write a for loop to call the sayHello method of every penguin in the array!

for (var index = 0; index < penguins.length; index++) {
  penguins[index].sayHello();
}


// 56. Write a for loop to iterate through every penguin in the array, and add a new property to each penguin called numberOfFeet with the value 2

for (var index = 0; index < penguins.length; index++) {
  penguins[index].numberOfFeet = 2;
}


// 57. Write another for loop to iterate through every penguin in the array, and for each penguin that can fly, print to the console a message containing the penguin's name and " can fly!" -- for example, "Gunter can fly!" or "Ramón can fly!" (Don't do anything for the penguins that cannot fly.)

for (var index = 0; index < penguins.length; index++) {
  if (penguins[index].canFly) {
    console.log(penguins[index].name + " can fly!");
  }
}