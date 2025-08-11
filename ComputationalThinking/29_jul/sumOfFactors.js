function sumOfFactor(num)
{
    sum = 1;
    for( let i = 2; i < num; i++)
    {
        if( num % i == 0)
        {
            sum += i;
        }
    }

// comparison of sum

if (sum === num)
{
    return 'perfect';
}
else if(sum < num)
{
    return 'defecient';
}
else {
    return 'Abundant';
}
}
console.log(sumOfFactor(6));
console.log(sumOfFactor(10));
console.log(sumOfFactor(30));