function pyramid (num)
{
    let str = "";
    for( i = 1; i <= num; i++)
    {
        for( let j = 1; j <= num -i; j++){
            str += "  ";
        }
        for(let k = 1; k <= 2 * i - 1; k++){
            str +=" *"
        }
        str += '\n'
    }
    return str;
}
console.log(pyramid(5));