const isPalindrome = (input) =>
{
    let str = input.toString();
    let len = str.length;

    for( let i = 0; i <= len / 2; i++)
    {
        if(str [i] !== str[len - 1 - i])
        {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("123"));

// for number
const isPalindromeNum = (num) =>
{
    let original = num;
    let reverse = 0;

    while(num != 0)
    {
        let digit = num / 10;
        reverse = reverse * 10 + digit;
        num /= 10;
        if ( reverse === num)
            return true;
    }
    return false;
}
console.log(isPalindromeNum(12321));

// reverse of a number

function reverseOfNumber(n1)
{
    let rev = 0;
    let original = n1
    while (n1 > 0)
    {
        let digit = n1 % 10;
        rev = rev * 10 + digit;
        n1 = Math.floor(n1 / 10);
    }
    if(rev == n1)
    {
        return true;
    }
    return false;
}
console.log(reverseOfNumber(1234));