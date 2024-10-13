// prime 

function prime(a) {
    if (a == 1) {
        console.log("not prime");
    }
    else if (a >= 2) {
        isprime = true;
        for (i = 2; i <= Math.sqrt(a); i++) {
            if (a % i === 0) {
                isprime = false;
            }
        }
        if (isprime) {
            console.log("prime")
        }
        else {
            console.log("not prime")
        }
    }
    // if(a==1){
    //     console.log("not prime")
    // }

    // else if(a==2){
    //     console.log("isprime")
    // }

    // else if(a>2){
    //     let isPrime=true;
    //     for(i=2;i<=Math.sqrt(a);i++){
    //         if(a%i==0){
    //             isPrime=false;
    //         }
    //     }
    //     if(isPrime){
    //         console.log("Is Prime")
    //     }

    //     else{
    //         console.log("Not prime")
    //     }
    // }
}
prime(50)