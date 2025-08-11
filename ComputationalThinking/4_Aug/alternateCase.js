const alternateCase = (str) =>
{
    let result = " ";
    for( i = 0 ; i < str.length; i++)
    {
        let char = str [i];
        if( i % 2 == 0)
        {
            result +=char.toUpperCase();
        }
        else {
            result +=char.toLowerCase();
        }
    }
    return result;
}
console.log(alternateCase("sowjanya"));
