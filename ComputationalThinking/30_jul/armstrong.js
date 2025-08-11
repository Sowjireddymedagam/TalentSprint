function armstrong (num)
{
    let sum = 0;
    let count = digitCount(num);
    while ( num > 0)
    {
        let digit = num % 10;
        sum += Math.pow(digit , count);
        num = Math.floor(num / 10);

    }
    return sum;
}
function isArmstrong (num)
{
    return armstrong(num) == num;
}
console.log(isArmstrong(122));

// method 2
