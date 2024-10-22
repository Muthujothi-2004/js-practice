// prime

function prime(a, b) {
    var str =[];
    
    for (i = a; i <= b; i++) {
        if (i <= 1) {
           isPrime=false;
        }
        
    else if(2<=i){
        let isPrime=true;

        for(j=2;j<=Math.sqrt(i);j++){
            if(i%j===0){
                isPrime=false;
            }
        }

        if(isPrime){
str.push(i)
        }
    }

    }
    if (str.length===0) {
        console.log("No prime")
    }
    else{
        console.log(str.join(", "))
    }
}
prime(2,10)