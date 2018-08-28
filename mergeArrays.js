'use strict'

// coding challenge
// Given:
// array1 = [1, 2, 3, 4]
// array2 = [3, 4, 9]
// array3 = [1, 2, 3, 3, 4, 4, 9]
// Task: merge arrays array1 and array2 in sorted fashion without using any js libraries
function mergeArrays() {
    const array1 = [1, 2, 3, 4];
    const array2 = [3, 4, 9];
    const array3 = [];

    console.log(array1);
    console.log(array2);

    var i = 0;
    var ptr1 = 0;
    var ptr2 = 0;

    while (i < (array1.length + array2.length)) {
        if (array1[ptr1] < array2[ptr2]) {
            array3.push(array1[ptr1]);
            ptr1++;
        }
        else {
            array3.push(array2[ptr2]);
            ptr2++;
        }
        i++;
    }
    console.log(array3);
}
mergeArrays();



