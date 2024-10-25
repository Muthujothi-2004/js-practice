function areCoPrime(a, b) {
    let min=Math.min(a,b)
    for(i=min;i>=0;i--){
        if(a%i===0&&b%i===0){
            if(i===1)
            console.log("Not a co-prime")
        break;
        }
        else{
            console.log("co-prime")
        }
    }
 
 }
 areCoPrime(20, 10)