function greatestOfFourNumbers(n1 , n2 , n3 , n4)
{
    switch (true)
    {
        case (n1 > n2 && n1 > n3 && n1 > n4):
            return n1;
        case (n2 > n1 && n2 > n3 && n2 > n4):
            return n2;
        case (n3 > n1 && n3 > n2 && n3 > n4):
            return n3;
        default:
            return n4;
    }
}
console.log(greatestOfFourNumbers(21 , 23 , 25 , 15));