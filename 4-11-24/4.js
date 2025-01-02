// 1. You have a number n, write a program which tells if it is a power of 3 or not. 

// Hint: 9 is a power of 3, we arrive at 9 as 3x3 (3 multiplied with itself twice)

 

// Sample Input:

// 81 (HINT: 81 = 3x3x3x3)

// Output

// Yes

// Sample Input

// 25

// Output

// NO

function power(n){
 let isPower= false;
    for(i=1;i<=n;i++){
        if(3**i===n){
            isPower= true;
             console.log("yes")
      
        }
        
    }
    if(!isPower){
        console.log("no")
    }

}
power(81)

function power(a){

    let isPower=true;
    for(i=1;i<=a;i++){
        if(3**i===a){
            console.log("yes")
            isPower=flase
        }
    }

    if(isPower){
        console.log("no")
    }

}
power(81)