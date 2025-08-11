// const arr = [5,6,2003,"sowji"]
// console.log(arr[3]);

// console.log(arr.push(12,15));
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr.unshift(60,23));

const num = [12, 3, 41, 25, 78, 18, 37, 21]
console.log(num.filter((val) => (val % 2 === 0)));
console.log(num.reduce((sum , val) => (sum + val) , 100));
console.log(num.reduceRight((sum , val) => (sum + val) , 100));

const names = [" apple " , " banana " , " kiwi " , " orange " , " pomogranate ", " papaya " , " watermelon "]
console.log(names.reduce((prev , curr) => prev + curr, "hi =>"))

// Greatest of Array
const greatestNumInArray = (arr) =>
{
    let max = arr[0];
    for( let i = 1; i < arr.length; i++)
    {
        if(arr[i] > max)
        {
            max = arr[i];
        }
    }
    return max;
}
const numbers = [3, 17, 8, 25, 4];
console.log(greatestNumInArray(numbers));

// Second greatest number in an array

const secondGreatNumInArray = (arr) =>
{
    let max = Math.max(...arr);
    let secondMax = arr[0];
    for( let i = 1; i < arr.length; i++)
    {
        if(arr[i] < max && arr[i] > secondMax)
        {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
const numbers1 = [3, 17, 8, 25, 4];
console.log(secondGreatNumInArray(numbers1));

// small number in an Array

const smallestNumInArray = (arr) =>
{
    let min = arr[0];
    for( let i = 1; i < arr.length; i++)
    {
        if(arr[i] < min)
        {
            min = arr[i];
        }
    }
    return min;
}
const number = [3, 17, 8, 25, 4];
console.log(smallestNumInArray(number));

// sum of numbers in an Array

const sumOfNumInArray = (arr) =>
{
    let sum = 0;
    for( let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    return sum;
}
const number2 = [3, 17, 8, 25, 4];
console.log(sumOfNumInArray(number2));