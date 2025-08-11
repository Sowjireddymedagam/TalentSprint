const sumOfEvenNumInArray = (arr) =>
{
    let sum = 0;
    for( let i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 === 0)
        {
            sum += arr[i]
        }
    }
    return sum;
}
const number2 = [3, 17, 8, 25, 4, 7, 5];
console.log(sumOfEvenNumInArray(number2));


