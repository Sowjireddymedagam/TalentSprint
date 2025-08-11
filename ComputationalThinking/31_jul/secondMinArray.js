// second largest number

const secondMinArray = (arr) =>
{
    if ( arr .length < 2) return null;
    let min =  Infinity;
    let secondMin =  Infinity;
    for( let val of arr)
    {
        if ( val < min)
        {
            secondMin = min;
            min = val;
        }
        else if ( val > min && val < secondMin)
        {
            secondMin = val;
        }
    }
    return secondMin;
}
console.log(secondMinArray([12, 13, 17, 32, 98, 56, 76]));