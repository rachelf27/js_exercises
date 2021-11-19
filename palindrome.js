'use strict'

/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false
 

Constraints:

-231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?
*/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    console.log("Plaindrome func 1" + '\n')
    var str = x.toString().split('');
    var revStr = str.reverse();
    var res = revStr.join('');
    console.log(res);
    
    if (res == x){
        console.log("true" + '\n');
        return true;
    }
    else {
        console.log("false" + '\n');
        return false;
    }
};

var isPalindrome2 = function(x) {
    console.log("Plaindrome func 2" + '\n')

    var y = 0;

    while (x > 0) {
        y = (y * 10) + (x % 10);
        x = Math.floor(x /10);
    }
    console.log(y + '\n');
    return y;
};

var isPalindrome3 = function(x) {
    console.log("Plaindrome func 3" + '\n')

    var y = "";
    var k = x < 0 ? 1 : 0;
    for (var i=k; i<x.length; i++){
        y = x[i] + y; 
        console.log(y + '\n');   
    }
    return x < 0 ? '-' + y : y;
};

var isPalindrome4 = function(x) {
    const str = '' + x;
    console.log(str);
    const temp = str.split('').reverse().join('');
    console.log(temp);
    return str === str.split('').reverse().join('');
};

/*isPalindrome(121);
isPalindrome(123);
isPalindrome2(121);
isPalindrome2(123);
isPalindrome2(-234);
isPalindrome3(456);
isPalindrome3(-789);*/
isPalindrome4(456);
isPalindrome4(-789);
isPalindrome4(121);