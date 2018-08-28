/* *********************************    Objects inside objects      ********************************* */


// *************************************************************************************************
//    IMPORTANT NOTE:
//      First, copy ALL your code from the previous exercises and paste it at the top of this file.
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
        },
        
        favoriteFoods: [ 'fish', 'ice cream', 'hot chocolate', 'pineapples' ]
        
      };

/* *********************************    Objects inside objects      ********************************* */

// 40. Add a new property to your penguin called outfit and set it equal to another object with the following properties: hat, shirt, pants, and shoes -- each property should have a string as its value! (I suggest you give it a baseball cap, Hawaiian shirt, cargo shorts, and flip-flops, because wouldn't that be ridiculous?)

myPenguin.outfit = {
  hat: "baseball cap",
  shirt: "Hawaiian shirt",
  pants: "cargo shorts",
  shoes: "flip-flops"
};


// 41. Create a new variable called penguinHatType and set it equal to the value of the hat in your penguin's outfit! Then print your new variable to the console.

var penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);


// 42. Without modifying any of your previous code, write one new line of code to add an accessory property to your penguin's outfit and set it equal to the string "pocket watch" -- because penguins are classy like that!

myPenguin.outfit.accessory = "pocket watch";


// 43. Write one more line of code to change the hat in your penguin's outfit to "top hat" and override the previous value. (Again, because penguins are classy!)

myPenguin.outfit.hat = "top hat";


// 44. This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! Let's delete the pants property from this penguin's outfit property. (Hint: see this page on the delete operator for examples.)

delete myPenguin.outfit.pants;


// 45. Write a for ... in loop to print the value of each piece of clothing in your penguin's outfit so you can see a list of clothing items in the console. (Hint: This is the same as step 31 from above, only now we're accessing values from a nested object!)

for (property in myPenguin.outfit) {
  console.log(myPenguin.outfit[property]);
}