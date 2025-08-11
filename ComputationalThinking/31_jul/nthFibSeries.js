const nthFibSeries = (n) =>
{
    if(n === 0) return 0;
    if(n === 1) return 1;
    let a = 0; b = 1;
    let fib;
    
    for( i = 2; i <= n; i++)
    {
        fib = a + b;
        a = b;
        b = fib;
    }
    return fib;
}
console.log(nthFibSeries(15));