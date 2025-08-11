const digitCount = (num) =>
{
    let digit = num.toString();
    let count = 0;

    for( let i = 0; i < digit.length; i++)
    {
        if (digit[i] >= '0' && digit[i] <= '9')
        {
            count++
        }
    }
    return count;
}
console.log(digitCount(12345));

// one more method

function countOfDigit  (n1) 
{
    let count = 0;
    while (n1 > 0)
    {
        let digit = n1 % 10;
        count++;
        n1 = Math.floor(n1/10)
    }
    return count;
}
console.log(countOfDigit(1234));