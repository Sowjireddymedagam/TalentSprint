//using temp
let num1 = 25;
let num2 = 36;
console.log(`Before swapping - num1 : ${num1} \tnum2 : ${num2}`);
let temp = num1;
num1 = num2;
num2 = temp;
console.log(`After swapping - num1 : ${num1} \tnum2 : ${num2}`);

// console.log("Swap numbers: " );
// console.log("num1: " + num1);
// console.log("num2: " + num2);

//without using temp
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log("Swap numbers: " );
console.log("num1: " + num1);
console.log("num2: " + num2);