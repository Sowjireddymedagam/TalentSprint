const reverseWords = (sentence) =>
{
    let words = sentence.split(" ");
    let reversed = ' ';
    for( let i = words.length - 1; i >= 0; i--)
    {
        reversed += words[i]; 
        if( i !== 0)
        {
            reversed += " ";
        }
    }
    return reversed;
}
console.log(reverseWords("Any fools can write the code that a computer understand. Good programmers write code that humans can undestand."));