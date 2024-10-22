// prime

function prime(a){

     if(a<=1){
        console.log("Not prime");
     }
     else{
        let isprime=true;
        for(i=2;i<=Math.sqrt(a);i++){
            if(a%2===0){
                 isprime=false;
            }
        }
        if(isprime){
            console.log("prime")
        }
        else{
            console.log("Not prime")
        }
     }
}
prime(19)