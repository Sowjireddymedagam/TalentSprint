function sumOfEvenInRange(n1 , n2)
{
    sum = 0;
    for(i = n1; i <= n2; i+=2)
    {
        sum +=i;
    }
    return sum;
}
const evenSum = sumOfEvenInRange(6 , 10);
console.log("sum of total even numbers is: " +evenSum);