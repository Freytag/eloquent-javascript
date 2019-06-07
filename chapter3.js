console.log("Chapter 3 Exercise 1");

function min(a, b) {
  if (a < b) return a;
  else return b;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

console.log("  ");
console.log("  ");
console.log("  ");
console.log("Chapter 3 Exercise 2");

function isEven(n) {
  if (n >= 0) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else return isEven(n - 2);
  } else {
    return false;
  }
}

// Books Solution

// function isEven(n) {
//     if (n == 0) return true;
//     else if (n == 1) return false;
//     else if (n < 0) return isEven(-n);
//     else return isEven(n - 2);
// }

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
console.log("  ");
console.log("  ");
console.log("  ");
console.log("Chapter 3 Exercise 3");

function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) count++;
  }
  return count;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

/// Book Solution

// function countChar(string, ch) {
//     let counted = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == ch) {
//             counted += 1;
//         }
//     }
//     return counted;
// }
