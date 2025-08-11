// =, +=, -+, /=, *=. **=

let num = 10
num = num + 5;
console.log(num);
num = num + 1;
console.log(num);
num = num - 6;
console.log(num);
num = num / 2;
console.log(num);
num = num % 6;
console.log(num);
num = num ** 2;
console.log(num);



//incremant and decrement operators

num++;
console.log(num);
console.log(num++);
console.log(++num);
console.log(num--);
console.log(--num);

//swap two numbers
//num1 = 25 , num2 = 36

//using temp
let num1 = 25;
let num2 = 36;
let temp = num1;
num1 = num2;
num2 = temp;

console.log("Swap numbers: " );
console.log("num1: " + num1);
console.log("num2: " + num2);

//without using temp
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log("Swap numbers: " );
console.log("num1: " + num1);
console.log("num2: " + num2);

//change temparature into celcius and units
