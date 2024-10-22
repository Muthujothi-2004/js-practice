function prime(a){
    if(a<=1){
        console.log("not prime")
    }
    else {
        for(i=2;i<=Math.sqrt(a);i++){
            let isprime=true;
            if(a%i==0){
                isprime=false;
            }
            if(isprime){
                console.log("prime")
            }
            else{
                console.log("not prime")
            }
        }
     
    }
}
prime(100)