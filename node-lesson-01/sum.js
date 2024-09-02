/* ‘Simple mathematics’ program in node.js */
console.log("Assignment1: Sum of two numbers in Node.js")

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

if (isNaN(num1) || isNaN(num2)) {
    console.error("Please enter 2 valid numbers as arguments.")
} else {
    const sum = num1 + num2;
    console.log(`The sum of ${num1} + ${num2} is: ${sum}`)
}
