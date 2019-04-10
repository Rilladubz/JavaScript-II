// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

function printLength(arr) {
  console.log(arr.length);
}

getLength(items, printLength);


// last passes the last item of the array into the callback.
function last(arr, cb) {
  return cb(arr);
}

function getLast(arr) {
  console.log(arr.slice(-1)[0]);
}

last(items, getLast);

// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x, y);
}

function add(x, y) {
  console.log(x + y);
}

sumNums(5, 6, add);

// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  return cb(x, y);
}

function multiply(x, y) {
  console.log(x * y);
}

multiplyNums(5, 5, multiply);

// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.

function contains(item, list, cb) {
  return cb(item, list);
}

function findElement(item, list) {
  console.log(list.includes(item));
}

contains("Notebook", items, findElement);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
