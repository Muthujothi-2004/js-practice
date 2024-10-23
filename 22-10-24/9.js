// Is 29 a prime number? Why or why not?

function prime(a){
  if(a<=1){
    isprime=false
  }
  else{
    let isprime=true;
    for(i=2;i<=Math.sqrt(a);i++){
        if(a%i===0){
            isprime=false;
        }
    }
    if(isprime){
        console.log("is prime")
    }
    else{
        console.log("not a prime")
    }
  }
}
prime(29)