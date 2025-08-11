function nextPalindrome(n) {
    n++;
    while (true) {
        const str = n.toString();
        const reversed = str.split('').reverse().join('');
        if (str === reversed) {
            return n;
        }
        n++;
    }
}

console.log(nextPalindrome(123));

// method 2
