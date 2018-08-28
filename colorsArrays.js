// Below tests are practiced, modified using the tests given in following link
// https://github.com/LearnTeachCode/pair-partners/issues/42

describe('Colors in an Array', function () {
    //Create an array named colors that contains seven different names of colors as strings."
    const colors = ["crimson red", "cobalt blue", "musturd yellow", "boysenberry purple", "emerald green", "snow white", "raven black"];
    it("Print the array to the console", function () {
        console.log("all the colors in the array: " + colors, "\n");
    });
    // Access the 3rd color in the array and print it to the console  with string "3rd color in the array: "
    it("Access the 3rd color in the array and print it to the console", function () {
        console.log("3rd color in the array: " + colors[2], "\n");
    });
    // Write one line of code that changes the value of the last color in the list to "midnight black" (overwriting the previous value).
    it("Write one line of code that changes the value of the last color in the list to \"midnight black\" (overwriting the previous value).", function () {
        colors[6] = "midnight black";
        console.log("last color in the array: " + colors[6], "\n");
    });
    // Create a new variable called 8thColor and set it equal to the eighth color in the list.
    it("Create a new variable called 8thColor and set it equal to the eighth color in the list.", function () {
        var _8thColor = "candy pink";
        colors[7] = _8thColor;
        console.log("8th color in the array: " + _8thColor, "\n");
    });
    // Add another color to the end of the list.
    it("Add another color to the end of the list.", function () {
        colors.push("golden brown");
        console.log("9th color in the array: " + colors[8], "\n");
        console.log("all the colors in the array: " + colors, "\n");
    });
    // Add another color to the beginning of the list.
    it("Add another color to the beginning of the list.", function () {
        colors.unshift("fuschia");
        console.log("all the colors in the array: " + colors, "\n");
    });
    // Print the length of the array to the console with console.log()
    it("Print the length of the array to the console with console.log()", function () {
        console.log("length of the array: " + colors.length, "\n")
    });
    // Remove the last color from the end of list, and then print the length of the array to the console one more time.
    it("Remove the last color from the end of list, and then print the length of the array to the console one more time.", function () {
        colors.pop(colors.length);
        console.log("all the colors in the array: " + colors, "\n");
        console.log("length of the array: " + colors.length, "\n")
    });
    // Write a for loop to iterate through every color in the array and print each color's value to the console.
    it("Write a for loop to iterate through every color in the array and print each color's value to the console.", function () {
        for (i = 0; i < colors.length; i++) {
            console.log("color #", i, colors[i], "\n");
        }
    });
    // Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)
    it("reate a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list.", function () {
        const lastIndex = colors.length - 1;
        const lastColor = colors[lastIndex];
        console.log(lastColor, "\n");
    });
});