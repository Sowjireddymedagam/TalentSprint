const sumOfSquareOfDigit = (num) =>
{
    let sum =0;
    while (num > 0)
    {
        let digit = num % 10;
        sum += Math.pow(digit , 2); //sum += digit **2
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(sumOfSquareOfDigit(123));

