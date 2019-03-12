/*This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?*/

/*
array of numbers
number k

function args: k
  for i=0 in array of numbers
    for j=i+1 in array of numbers do
        get the sum of number at i and number at j, x
        if x is equal to k
            push number at i and number at j to array (could do index: value array of objects)
            return true
        otherwise continue
  if program execution gets to this point return false
*/

let array = [];
let k = 10;

function createRandomSet(l) {
  for (let i = 0; i < l; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
}

function checkForSum (k) {
  for (let i = 0; i < array.length-1; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] + array[j] === k) {
        return true;
      } else {
        continue;
      }
    }
  }
  return false;
}

createRandomSet(15);
console.log(k);
console.log(array);
console.log(checkForSum(k));
