function isPalindrome(n) {
    const str = n.toString();
    return str === str.split('').reverse().join('');
}

function oddPalindromesInRange(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0 && isPalindrome(i)) {
            result.push(i);
        }
    }
    return result;
}

console.log(oddPalindromesInRange(10, 150)); 
