// let num = 14;
// let rem = num % 7; // later change it to switch case

// let day;
// if(rem === 0)
// {
//   day = "sunday";  
// }
// else if(rem === 1)
// {
//     day = "monday";
// }
// else if(rem === 2)
// {
//     day = "tuesday";
// }
// else if(rem === 3)
// {
//     day = "wednesday";
// }
// else if(rem === 4)
// {
//     day = "thursday";
// }
// else if(rem === 5)
// {
//     day = "Friday";
// }
// else if(rem === 6)
// {
//     day = "saturday";
// }
// else{
//     days = "invalid";
// }
// console.log("The day of number " + num + " is " + day );


// using switch case

let number = 12;
let remainder = number % 7;

let days;

switch (remainder)
{
    case 0:
        days = "sunday";
        break;

    case 1:
        days = "monday";
        break;

    case 2:
        days = "tuesday";
        break;
    
    case 3:
        days = "wednesday";
        break;

    case 4:
        days = "thursday";
        break;

    case 5:
        days = "friday";
        break;

    case 6:
        days = "saturday";
        break;
    }

    console.log (console.log("The day of number " + number + " is " + days));
