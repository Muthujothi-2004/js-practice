function classifyNumber(n){
     if(n % 3===0 && n%5===0){
        console.log("Divisible by both 3 and 5");
    }
   
    else if(n % 5===0){
        console.log("Divisible by 5");
    }
     else if(n % 3===0){
        console.log("Divisible by 3");
    }
    
    else{
        console.log("Not divisible by 3 or 5");
    }
}
classifyNumber(30);