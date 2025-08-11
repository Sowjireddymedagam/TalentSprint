function FactorSum(num){
    let sum = 1;
       for(let i = 2; i < num; i++){
            if(num % i == 0){
            sum += i;
        }
    } 
     return sum;
}
function IsAmicableNum(num){
    let pair = FactorSum(num);
    let check = FactorSum(pair);
    if(check === num && num !== pair){
        return "Amicable number"
    }else{ 
        return " not Amicable"
    }
}console.log(IsAmicableNum(220));