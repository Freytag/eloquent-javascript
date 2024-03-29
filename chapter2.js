console.log('Chapter 2 Exercise 1')
let star = '';
while (star.length < 8) {
    star += '*';
    console.log(star);
}

// cleaner solution given by book

// for (let line = "#"; line.length < 8; line += "#")
//     console.log(line);

console.log('  ')
console.log('  ')
console.log('  ')
console.log('Chapter 2 Exercise 2')


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

// cleaner solution given by book

// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
// }

console.log('  ')
console.log('  ')
console.log('  ')
console.log('Chapter 2 Exercise 3')

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
gridBySize();

// cleaner solution given by book

// let board = "";
// for (let y = 0; y < size; y++) {
//     for (let x = 0; x < size; x++) {
//         if ((x + y) % 2 == 0) {
//             board += " ";
//         } else {
//             board += "#";
//         }
//     }
//     board += "\n";
// }