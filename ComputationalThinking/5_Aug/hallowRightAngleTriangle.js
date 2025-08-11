// method 1
function patterns_4 (num)
{
    let str = "";
    for( i = 1; i <= num; i++)
    {
        for( let j = 1; j <= num; j++)
        {
            if( i === 1 || j === num || i === j)
            {
                str += " *"
            }
            else {
                str += "  "
            }
        }
        str += '\n'
    }
    return str;
}
console.log(patterns_4(5));

// method 2
function patterns_1 (num)
{
    let str = "";
    for( i = 1; i <= num; i++)
    {
        for( let j = 1; j <= i; j++)
        {
            if( j === 1 || j === i || i === num)
            {
                str += " *"
            }
            else {
                str += "  "
            }
        }
        str += '\n'
    }
    return str;
}
console.log(patterns_1(5));

// method 3
function patterns_3 (num)
{
    let str = "";
    for( i = 1; i <= num; i++)
    {
        for( let j = i; j <= num; j++)
        {
            if( i === 1 || j === num || i === j)
            {
                str += " *"
            }
            else {
                str += "  "
            }
        }
        str += '\n'
    }
    return str;
}
console.log(patterns_3(5));

// method 4
function patterns_2 (num)
{
    let str = "";
    for( i = 1; i <= num; i++)
    {
        for( let j = 1; j <= num; j++)
        {
            if( i === num || j === num || i + j === num + 1)
            {
                str += " *"
            }
            else {
                str += "  "
            }
        }
        str += '\n'
    }
    return str;
}
console.log(patterns_2(5));