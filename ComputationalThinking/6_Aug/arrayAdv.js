// Hoisting, first class citizen as function

// map, filter, reduce, spread, rest, destructure

// Spread Operator

const nums = [1, 2, 3, 4];
const numbers = [...nums, 4, 5];
console.log(numbers);
console.log(nums);


const [ a , b] = [12 , 31]
console.log(a);
console.log(b);

// // const [ c , d, ...rest ] = numbers;

// console.log(c);
// console.log(d);
// console.log(rest);


// /spread
const arr = [12, 14, 56, 32];
const num = [...arr, 54, 32];
console.log(num)

// rest
const [first, ...rest] = moreNum;
console.log(moreNum)