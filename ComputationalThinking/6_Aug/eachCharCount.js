const sentenceStatement = {
    chatCount(text){
        const frequency = { };
        for(const char of text){
            frequency[char] = (frequency[char] || 0) + 1;
        }
        return frequency;
    }
};
const str = "Any fools can write the code that a computer understand. Good programmers write code that humans can undestand."
const result = sentenceStatement.chatCount(str);
console.log(result);

// without using object

function eachCharCount (str1)
{
    let count = [];
    str1 = str1.toLowerCase();
    
    for(let char of str1)
    {
        if(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z')
        {
           count[char] = (count[char] || 0) + 1; 
        }
    }
    return count;
}
const str1 = "Any fools can write the code that a computer understand. Good programmers write code that humans can undestand."
console.log(eachCharCount(str1));