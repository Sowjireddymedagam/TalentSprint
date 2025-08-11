// number, string, boolean, null
// bigInt, undefined, symbol
// object

// let value = null;
// console.log(typeof(value));
// console.log(typeof(!value), !value);

// let number;
// console.log(!number);

// number = 100;
// console.log(!number);



let str = "SOWJANYA REDDY MEDAGAM";
name = "sowji"
let number = "9553904142"
// const str1 = new String("ashok")// not suggested to use
console.log(str.at(5));
console.log(str.charAt(10));
console.log(str.charCodeAt(1));
console.log(str[0,1,2,3]);
console.log(str.codePointAt(8));
console.log(str.concat(9));
console.log(str.endsWith("MEDAGAM"));
console.log(str.includes("hii"));
console.log(str.indexOf("D"));
console.log(str.lastIndexOf("A"));
console.log(str.length);
console.log(str.split(" "));
console.log(str.repeat(3));
console.log(name.padStart(11, "*"));
console.log(str.replaceAll('A' , '$'));
console.log(name.substring().padStart(9, "*"));

// for name show first and last 2 letters 
let name1 = "Sowjanya";
console.log(name1.slice(0, 2) + "*".repeat(name1.length - 4) + name1.slice(-2));


// For number

let mobile = "9553904142";
console.log(mobile.slice(0, 2) + "*".repeat(mobile.length - 4) + mobile.slice(-2));