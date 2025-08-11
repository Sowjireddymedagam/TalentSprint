function letterPattern (num)
{
    let str = "";
    for( let i = 1; i <= num; i++)
    {
        for( let j = 1; j <= num; j++)
        {
            if( (i === 1 && j !== 1 && j !== num) || (j === 1 || j === num) && i !== 1 || i === Math.ceil(num / 2))
            {
                str += " *";
            }
            else
                {
                str += '  ';
            }
        }
        str += '\n';
    }
    return str;
}
console.log(letterPattern(5));