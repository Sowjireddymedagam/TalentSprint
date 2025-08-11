// let month = 2;
// let days = 0; // later write in switch case

// if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 ||
//     month === 10 || month === 12)
//     {
//         days = 31;
//     }
//     else if(month === 4 || month === 6 || month === 9 || month === 11)
//     {
//         days = 30;
//     }
//     else if(month === 2)
//     {
//         days = 28;
//     }
//     else{
//         console.log("not valuable")        
//     }
//     if(days !==0)
//     {
//         console.log("month " + month + " has " + days + " days" )
        
//     }


    // using switch

    let months = march;
    let day;

    switch (months)
    {
        case january:
        case march:
        case may:
        case july:
        case august:
        case october:
        case december:
            day = 31;
            break;
        
        case april:
        case june:
        case semptember:
        case november:
            day = 30;
            break;

        case february:
            day = 28;
            break;
    }
console.log ("month " + months + " has " + day + " days")