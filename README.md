# Eloquent Javascript Exercises and Projects

This is a collection of the exercises and projects i've done from reading _Eloquent Javascript_ on (https://eloquentjavascript.net/)

## Chapter 2: Program Structure

### Looping a triangle

Write a loop that makes seven calls to `console.log` to output the following triangle:

```sh
#
##
###
####
#####
######
#######
```

#### MY SOLUTION

```js
let star = '';
while (star.length < 8) {
    star += '*';
    console.log(star);
}
```

### FizzBuzz

Write a program that uses `console.log` to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print `"Fizz"` instead of the number, and for numbers divisible by 5 (and not 3), print `"Buzz"` instead.

When you have that working, modify your program to print `"FizzBuzz"` for numbers that are divisible by both 3 and 5 (and still print `"Fizz"` or `"Buzz"` for numbers divisible by only one of those).

#### MY SOLUTION

```js
for (let i = 1; i < 101; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i + ' FizzBuzz');
    } else if (i % 3 === 0) {
        console.log(i + ' Fizz');
    } else if (i % 5 === 0) {
        console.log(i + ' Buzz');
    } else {
        console.log(i)
    }
}

```

### Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to `console.log` should show something like this:

```sh
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
```

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

#### MY SOLUTION

```js
function gridBySize(size = 8) {
    let grid = '';
    for (let row = 0; row < size; row++) {
        let rowString = '';
        if (row > 0)
            rowString += '\n';
        for (let column = 0; column < size; column++) {
            if (row % 2 === 0) {
                if (column % 2 === 0)
                    rowString += '#'
                else
                    rowString += ' '
            } else {
                if (column % 2 === 0)
                    rowString += ' '
                else
                    rowString += '#'
            }
        }
        grid += rowString
    }
    console.log(grid);
}

```

## Chapter 3: Functions

### Minimum

The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

#### MY SOLUTION

```js
function min(a, b) {
    if (a < b) return a
    else return b
}
```

### Recursion

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

 - Zero is even.
 - One is odd.
 - For any other number N, its evenness is the same as N - 2.

Define a recursive function `isEven` corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

#### MY SOLUTION

```js
function isEven(n) {
    if (n >= 0) {
        if (n == 0) return true;
        else if (n == 1) return false;
        else return isEven(n - 2);
    } else {
        return false;
    }
}
```

### Bean counting

You can get the Nth character, or letter, from a string by writing `"string"[N]`. The returned value will be a string containing only one character (for example, `"b"`). The first character has position 0, which causes the last one to be found at position `string.length - 1`. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

#### MY SOLUTION

```js
function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) count++
    }
    return count;
}

function countBs(string) {
    return countChar(string, "B");
}
```

## Chapter 4: Program Structure

### The sum of a range

The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

`console.log(sum(range(1, 10)));`

Write a `range` function that takes two arguments, `start` and `end`, and returns an array containing all the numbers from `start` up to (and including) `end`.

Next, write a `sum` function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call `range(1, 10, 2)` should return `[1, 3, 5, 7, 9]`. Make sure it also works with negative step values so that `range(5, 2, -1)` produces `[5, 4, 3, 2]`.

#### MY SOLUTION

```js
function range(start, end, step = 1) {
  const completeRange = [];
  if (end > start) {
    for (let i = start; i <= end; i+=step) {
      completeRange.push(i);
    }
  } else {
    for (let i = start; i >= end; i-=Math.abs(step)) {
      completeRange.push(i);
    }    
  }
  return completeRange  
}

function sum(numbers){
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total
}
```

### Reversing an array

Arrays have a `reverse` method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, `reverseArray` and `reverseArrayInPlace`. The first, `reverseArray`, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, `reverseArrayInPlace`, does what the reverse method does: it _modifies_ the array given as argument by reversing its elements. Neither may use the standard `reverse` method.

#### MY SOLUTION

```js
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
```

### A list
Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

```js
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
```
The resulting objects form a chain, like this:

A linked list
A nice thing about lists is that they can share parts of their structure. For example, if I create two new values `{value: 0, rest: list}` and `{value: -1, rest: list}` (with `list` referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

Write a function arrayToList that builds up a list structure like the one shown when given `[1, 2, 3]` as argument. Also write a `listToArray` function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or `undefined` when there is no such element.

#### My Solutions
```js
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list,array = []) {
  array.push(list.value);
  if (list.rest) return listToArray(list.rest,array)
  else return array;
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
```

### Deep comparison

The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function `deepEqual` that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces `"object"` for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, `typeof null` also produces `"object"`.

The `Object.keys` function will be useful when you need to go over the properties of objects to compare them.


#### MY SOLUTION

```js
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || b == null || typeof a != "object" || typeof b != "object" ) return false;
  
  if (Object.keys(a).length === Object.keys(b).length) {
	const aKeys = Object.keys(a), bKeys = Object.keys(b);
    for (let key of aKeys) {
      if (bKeys.includes(key) && deepEqual(a[key], b[key])) {
        return true;
      } else {
        return false
      }
    }
  } else {
    return false
  }
}	
```
####Somethings I learned. 
