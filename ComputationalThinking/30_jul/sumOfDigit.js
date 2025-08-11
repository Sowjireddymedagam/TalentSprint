const digitCount = (num) =>
{
    let digit = num.toString();
    let sum = 0;

    for( let i = 0; i < digit.length + 1; i++)
    {
        sum += i
    }
    return sum;
}
console.log(digitCount(12345));

// method 2

const sumOfDigits = (n1) =>
{
    let sum1 = 0;
    while (n1 > 0)
    {
        sum1 += getLastDigit(n1);
        n1 = dropLastDigit(n1);
    }
    return sum;
}
console.log(digitCount(1234));