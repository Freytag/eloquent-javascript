console.log("Chapter 4 Exercise 1");

function range(start, end, step = 1) {
  const completeRange = [];
  if (end > start) {
    for (let i = start; i <= end; i += step) {
      completeRange.push(i);
    }
  } else {
    for (let i = start; i >= end; i -= Math.abs(step)) {
      completeRange.push(i);
    }
  }
  return completeRange;
}

function sum(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// Books Solution
// function range(start, end, step = start < end ? 1 : -1) {
//     let array = [];

//     if (step > 0) {
//         for (let i = start; i <= end; i += step) array.push(i);
//     } else {
//         for (let i = start; i >= end; i += step) array.push(i);
//     }
//     return array;
// }

// function sum(array) {
//     let total = 0;
//     for (let value of array) {
//         total += value;
//     }
//     return total;
// }

console.log("  ");
console.log("  ");
console.log("  ");
console.log("Chapter 4 Exercise 2");

function reverseArray(array) {
  const newArray = [];
  for (let slot of array) {
    newArray.unshift(slot);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let first = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = first;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

console.log("  ");
console.log("  ");
console.log("  ");
console.log("Chapter 4 Exercise 3");

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, index) {
  if (!list) {
    return undefined;
  } else if (index > 0) {
    return nth(list.rest, index - 1);
  } else {
    return list.value;
  }
}

// Book Solution
// function nth(list, n) {
//   if (!list) return undefined;
//   else if (n == 0) return list.value;
//   else return nth(list.rest, n - 1);
// }

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20