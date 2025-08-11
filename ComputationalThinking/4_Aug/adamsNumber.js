const isAdam = (n) =>
{
    let reverse = (num) => String(num).split(" ").reverse().join(" ");
    // let reverse = (num) => Number(String(num).split(" ").reverse().join(" "));

    const square = n * n;
    const reverseNum = reverse(n);
    const reverseSquareNum = reverseNum * reverseNum;
    const squareReverseNum = reverse(reverseSquareNum);

    return square === squareReverseNum;
    
}
console.log(isAdam(33));