function sidePyramid_1(num)
{
    let str = "";
    for(let i = 1;i <= num; i++)
    {
        for(let j = 1; j <= i; j++)
        {
            str += " *";
        }
        str += '\n';
    }
console.log(str);

    for( let i = 1; i <= num; i++)
    {
        for(let j = 1; j <= (num - i); j++ )    {
        str += " *";
    }
    str += '\n'
    }
    console.log(str);
}
sidePyramid_1(5);