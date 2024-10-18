function prime(n) {
    // if (n <= 1) {
    //     console.log("Not prime")
    // }

    // else {
    //     let isprmie = true;
    //     for (i = 2; i <= Math.sqrt(n); i++) {
            
    //         if (n % i === 0) {
    //             isprmie = false;
    //         } 
    //     }
    //     if(isprmie){
    //         console.log("prime")
    //     }

    //     else {
    //         console.log("Not prime")
    //     }
    // }

    if(n<=1){
        console.log("not a prime")
    }

    else{
        let isprmie=true
        for(i=2;i<=Math.sqrt(n);i++){
            if(n%i===0){
                isprmie=false
            }
        }
        if(isprmie){
            console.log("prime")
        }
        else{
            console.log("Not a prime")
        }
    }
}

prime(19)