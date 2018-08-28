/* *********************************    Arrays inside objects      ********************************* */

// *************************************************************************************************
//    IMPORTANT NOTE:
//      First, copy ALL your code from the previous exercise and paste it at the top of this file.
//      Then continue with the instructions below:
// *************************************************************************************************

      // SHORTENED VERSION OF SOLUTION FROM PREVIOUS SECTION:
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
        }
        
      };

/* *********************************    Arrays inside objects      ********************************* */

// 32. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.

myPenguin.favoriteFoods = ["fish", "ice cream", "hot chocolate"];


// 33. Access your penguin's second favorite food and print it to the console using console.log()

console.log(myPenguin.favoriteFoods[1]);


// 34. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.

var firstFavFood = myPenguin.favoriteFoods[0];


// 35. Add another food to the end of the list.

myPenguin.favoriteFoods.push("sushi");


// 36. Print the length of your penguin's favoriteFoods array to the console with console.log()

console.log(myPenguin.favoriteFoods.length);


// 37. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).

myPenguin.favoriteFoods[3] = "pineapples";


// 38. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list. (Hint: this is essentially the same problem as step 18 from above.)

var lastFavFood = myPenguin.favoriteFoods[ myPenguin.favoriteFoods.length - 1 ];


// 39. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console. (Hint: This loop will look exactly the same as the one you wrote for step 16 above, except now you're accessing the array as a property of an object.)

for (var index = 0; index < myPenguin.favoriteFoods.length; index++) {
  console.log(myPenguin.favoriteFoods[index]);
}

