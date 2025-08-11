function addNumbers(num)
{
    if  (num <= 1) return num;
    return num + addNumbers(num - 1 );
}
console.log(addNumbers(10));

// factorial

function factNumbers(num1)
{
    if  (num1 == 0 || num1 === 1) return 1;
    return num1 * factNumbers(num1 - 1 );
}
console.log(factNumbers(100));

// fibonacci series
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