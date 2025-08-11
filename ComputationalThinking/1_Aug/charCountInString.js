const charCount = (str) =>
{
    let count = 0;
    for( i = 0; i < str.length; i++)
    {
        count++;
    }
    return count;
}
const str = "sowji"
console.log(charCount(str));

// word count

const characterCount = (str1) =>
{
    let word = str1.trim().split(/\s+/);
    let count1 = 0;
    for( let i = 0; i < word.length; i++)
    {
        count1++;
    }
    return count1;
}
console.log(characterCount("sowjanya Medagam"));