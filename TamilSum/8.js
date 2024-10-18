function printPrimesInRange(m, n) {
    let str=""
 for(i=m;i<=Math.sqrt(n);i++){
   if(i>=2){
       for(j=2;j<=Math.sqrt(n);j++){
        if(i%2==0)
            str.push(i);
       }
     
    }
    else if (str.length>=0){
       
    console.log("No primes in this range")
    }
    
    
 }
    
}
printPrimesInRange(1, 10)
