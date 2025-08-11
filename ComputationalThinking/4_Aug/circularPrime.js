function isPrime (n)
{
    if( n < 2) return false;
    for( i = 2; i < n / 2 ; i++)
    {
        if ( n % i == 0)
        {
            return false;
        }
    }
    return true;
}
function rotationNum (n)
{
    let digit = n.toString().split(" ");
    let rotation = [ ];
    for( i = 0; i < digit.length; i++)
    {
        rotation.push(parseInt(digit.join(" ")));
        digit.push(digit.shift());
    }
    return rotation;
}
function isCircularPrime (n)
{
    let rotation = rotationNum(n);
    return rotation.every(isPrime);
}
console.log(isCircularPrime(124));

// method 2
function circularNumber (n)
{
    let numbers = [];
    let numstr = n.toString();
    let current = numstr;

    do{
        current = current.slice(-1) + current.slice(0, -1);
        numbers.push(parseInt(current));
    }
    while(!numbers.includes(n));
    return numbers;
}
function isCircular (arr)
{
    return arr.every((val))
}