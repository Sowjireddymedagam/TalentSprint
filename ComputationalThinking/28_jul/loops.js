// while, for, do while

//while loop
// let num = 10;
//  while( num < 20)
//  {
//     console.log(++num);
//  }

//  d0 - while loop


//  do{
//     console.log(num)
//  }   while(num < 50)

    // let num1 = 15963;

    // while ( num1 > 0)
    // {
    //     console.log(num1 % 10);
    //     num1 /=10;
    // }

    // for loop

    let n = 20;
    for (let i = 0; i < n; i++) // i+=2 for even and i +=1 for odd
    {
        console.log("cube : " + i * (i * i)); 
        console.log("increment : " + (i));
        console.log("square: "+ (i * i));
        console.log("multiply: "+ (i * 2));           
       
    }

    // using while

    let num = 1;
    while(num < 10)
    {
        console.log("cube : " + num * (num * num)); 
        console.log("increment : " + (num));
        console.log("square: "+ (num * num));
        console.log("multiply: "+ (num * 2));
        num++;
          
    }

    // using do-while
    
    let num1 = 15;
    do{
        console.log("cube : " + num1 * (num1 * num1)); 
        console.log("increment : " + (num1));
        console.log("square: "+ (num1 * num1));
        console.log("multiply: "+ (num1 * 2));
        console.log(num1 % 10);
    }
    while(num1 < 0)
        num1++;