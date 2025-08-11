function fibNumbers(num2)
{
    const numb = [0 , 1];
    for( i = 2; i <= num2; i++ )
    {
    numb.push(numb[ i - 1] + numb [ i - 2]);
    }
    return numb
}
console.log(fibNumbers(15));

// withou recursion

const fibonacci = (n) =>
{
    let a = 0, b = 1
    console.log(a);
    for(let i = 1; i <= n; i++)
    {
        console.log(b);
        [a ,b] = [b, a + b];
    }
}
fibonacci(15);