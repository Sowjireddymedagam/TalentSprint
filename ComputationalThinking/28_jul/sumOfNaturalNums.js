function sumOfNaturalNumbers(num)
{
    let sum = 0;
    for(let i = 1; i <= num; i++)
    {
        sum += i;
    }
    return sum;
}
const total = sumOfNaturalNumbers(20);
console.log("the sum of first 20 natural numbers is: " + total);