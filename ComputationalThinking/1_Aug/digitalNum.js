function digitalSum(n) {
    return n === 0 ? 0 : 1 + ((n - 1) % 9);
}
console.log(digitalSum(193476));
console.log(digitalSum(19765432));

// method 2

const DigitalSum = (num) =>
{
    while( num >= 10)
    {
        let sum = 0;
        while (num > 0) 
        {
            sum += num % 10;
            num =Math.floor(num / 10)
        }
        num = sum;
    }
    return num;
}
console.log(DigitalSum(193476));
console.log(DigitalSum(19765432));


// method 3 : without recursion

function digSum (n1)
{
    let sum = 0;
    while( n1 > 0 ){
    let digit = n1 % 10;
    sum += digit;
    n1 = Math.floor(n1 / 10);
    }
    return sum < 10 ? sum : digSum(sum);
}
console.log(digSum(19653));