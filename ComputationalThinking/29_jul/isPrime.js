function isPrime(num)
{
    if( num < 2)
        return false;
    for( let i = 2; i < num; i++)
    {
        if ( num % i === 0)
        {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));

// method 2

const isPrimeNum = (n) =>
{
    if (n < 2)
        return false;

    let i = 2;
    do 
    {
        if(n % i === 0)
            return false;
            i++;
    }
    while ( i < n);
    return true;
};
console.log(isPrimeNum(5));

//method 3
const primeNum3 = (n3) =>
{
    count = 0;
    for( let i = 0; i <= n3; i++)
    {
        if(n3 % i == 0)
            count++
    }
    return count == 2;
};
console.log(primeNum3(5));

// method 4

const primeNum4 = (n4) =>
{
    count = 0;
        for ( let i = 2; i < n4; i++)
        {
            if ( n4 % i == 0)
                count++
        }
       return count == 0;
};
console.log(primeNum4(15));

// method 5

const primeNum5 = (n5) =>
{
    if(n5 < 2) return false;
    for(let i = 2; i <= Math.sqrt(n5); i++)
    {
        if( n5 % i === 0)
            return false;
    }
    return true;
}
console.log(primeNum5(23));