// prime

// List the first five prime numbers.

function prime(a){
    let prime=[]
    let num=2;
    if(a<=1){
      let  isprime= false
    }   
    else{
        let isprime=true;
        for(i=num;i<=Math.sqrt(a);i++){
          if(a%i===0){
            isprime=false;
          }
        }
        if(isprime){
          prime.push(i)
        num=num+1;
       
        }
        else{
            console.log(prime)
        }

    }
}prime(20)