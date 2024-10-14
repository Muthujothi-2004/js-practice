n=100;
let isprime=true;
if(n<=1){
    console.log(" not prime")
}
else if (n>=2) {
    for(i=2;i<=Math.sqrt(n);i++){
        isprime=true;
        if(n%i===0){
            isprime=false;
        }
    }
    if(isprime){
        console.log("prime")
    }
    else{
        console.log("not prime")
    }
    
}
