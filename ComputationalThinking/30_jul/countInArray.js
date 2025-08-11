const countOfNumInArray = (arr) =>
{
    let count = 0;
    for( let i = 0; i < arr.length; i++)
    {
        count++
    }
    return count;
}
const number2 = [3, 17, 8, 25, 4, 7, 5];
console.log(countOfNumInArray(number2));