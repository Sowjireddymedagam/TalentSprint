const vowelCount = (str) =>
{
    let count = 0;
    for( i = 0; i < str.length; i++)
    {
        if(str[i] == 'a' ||str[i] == 'e' || str[i] == 'i' || str[i] == 'o' ||str[i] == 'u' ||
            str[i] == 'A' || str[i] =='E' || str[i] =='O' || str[i] =='I' || str[i] =='U')
         count++
    }
    return count;
    
}
console.log(vowelCount("Sowjanya"))

// method 2

const vowelCount1 = (str) =>
{
    const vowel = 'aeiou'
    let count = 0;
    for( let char of str)
    {
        let convertedChar = char.toLowerCase();
        if(!vowel.includes(char))
        {
            count++;
        }
    }
    return count;
}
console.log(vowelCount1("Sowjanya"))
