/* For each index of the array, take all of the other numbers and reduce them
  to their cumulative product. Probably do this by making a new array without
  the value at i and reducing it for each number.

  Pseudocode:
  make empty array
  make total variable

  function randomArray(numberOfElements) {
    for numberOfElements times
      push random number to end of array (probably range of 10 per element)
    return;
  }

  function cumulativeProduct () {\
    for index of randomArray
      create array without index
      reduce(a*b) and store in total
  }*/


let array = [];
let solutionArray = [];
function randomArray(x) {
  for (let i = 0; i < x; i++) {
    let y = Math.floor(Math.random() * 10);
    if (y === 0) {
      y++;
    }
    array.push(y);
  }
}

function cumulativeProduct() {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    console.log(i);
    solutionArray.push(array.filter(function(a, b) {
      if (b !== i) {return a}
    }).reduce((a, b) => a * b));
  }
}

randomArray(10);
cumulativeProduct();
console.log(array);
console.log(solutionArray);
