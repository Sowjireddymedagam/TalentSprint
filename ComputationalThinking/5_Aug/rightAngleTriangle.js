function patterns (num)
{
    let str = "";
    for( i = 0; i <= num; i++)
    {
        for( let j = 1; j <= i; j++)
        {
            str += " * ";
        }
        str += '\n'
    }
    return str;
}
console.log(patterns(5));