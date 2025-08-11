// sum of even numbers
const num = [12, 3, 41, 25, 78, 18, 37, 21]
console.log(num.filter((val) => (val % 2 == 0)).reduce ((sum , val) => (sum + val)));

console.log(num.reduce((sum , val) => (sum + val),0));

// second largest number

const secondMaxArray = (arr) =>
{
    if ( arr .length < 2) return null;
    let max = - Infinity;
    let secondMax = - Infinity;
    for( let val of arr)
    {
        if ( val > max)
        {
            secondMax = max;
            max = val;
        }
        else if ( val < max && val > secondMax)
        {
            secondMax = val;
        }
    }
    return secondMax;
}
console.log(secondMaxArray([12, 13, 17, 32, 98, 56, 76]));
