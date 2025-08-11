const collatz = (n) =>
{
    let num = [];
    while ( n !== 1)
    {
        num.push(n);
        if( n % 2 == 0)
        {
            n = n / 2;
        }
        else{
            n = n * 3 + 1;
        }
    }
    num.push(n);
    return num;
}
console.log(collatz(1));

// with recursion
const collatzSeries = (n1) =>
{
    if(n1 === 1) return [1];
    
    const next = ( n1 % 2 === 0) ? n1 / 2 : n1 * 3 + 1;
    return [n1, ...collatzSeries(next)];
}
console.log(collatzSeries(1));