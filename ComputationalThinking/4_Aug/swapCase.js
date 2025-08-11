const swapCase = (sentence) =>
{
    let result = " ";
    for( i = 0; i < sentence.length; i++)
    {
        let char = sentence [i];
        if( char >= "A" && char <= "Z")
        {
            result +=char.toLowerCase();
        }
        else if(char >= "a" && char <= "z")
        {
            result += char.toUpperCase();
        }
        else {
            result += char;
        }
    }
    return result;
}
console.log(swapCase("Hello Sowjanya Medagam"));