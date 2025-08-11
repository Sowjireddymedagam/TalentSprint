function isPrime(n)
{
    if( n <= 1) return false;
    for(let i = 2; i < n; i++)
    {
        if(n % i === 0)
        {
            return false;
        }
    }
    return true;
}
function greatestInArrayIsPrime(arr)
{
    let max = arr[0];
    for(i = 0; i < arr.length; i++)
    {
        if(arr[i] > max)
        {
             max = arr[i];
        }
    }
    return isPrime(max);
}
let arr = [12, 5, 16, 23, 31,89, 15];
console.log(greatestInArrayIsPrime(arr));
