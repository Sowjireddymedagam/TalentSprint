let year = 1700;

if((year % 4 == 0 && year % 100 !=0) || (year % 400 == 0)){
    console.log (year + " Is a leap Year")
}
else{
    console.log (year + " is not a leap year")
}
