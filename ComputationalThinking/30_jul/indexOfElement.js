const indexNumInArray = (arr , target) =>
{
    for( let i = 0; i < arr.length; i++)
    {
        if(arr[i] === target)
        {
            return i;
        }
    }
    return -1;
}
const number2 = [3, 17, 8, 25, 4, 7, 5];
console.log(indexNumInArray(number2 , 7));