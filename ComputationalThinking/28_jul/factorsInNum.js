function factorsInNumber(n)
{
    const factor = [];
    for(let i = 0; i <= n; i++)
    {
        if(n % i == 0){
            factor.push(i)
        }
    }
    return factor;
}
console.log(factorsInNumber(78));

//one more method

function isFactor(num , fact)
{
    return num % fact == 0;
}
console.log(isFactor(10 , 2));
console.log(isFactor(10 , 15));
console.log(isFactor(10 , 5));
console.log(isFactor(10 , 10));
console.log(isFactor(20 , 8));

function countOfFactors(num)
{
    let count = 0;
    for( let i = 1; i <= num; i++)
    {
        if( num % i == 0)
        {
            
            count++;
        }
    }
    return count;
}
console.log(countOfFactors(78));
console.log(countOfFactors(10));