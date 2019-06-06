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
