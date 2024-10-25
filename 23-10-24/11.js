// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. 
// After that, the next term is defined as the sum of the previous two terms.

function printPattern(n) {
    for(i=1;i<=n;i++){
        let pat ="";
        for(j=1;j<=i;j++){
            if(i%2===1){
                pat=pat+i;
                break;
              
            }
            else{
                pat=pat+"*"
            }
        }
       
        console.log(pat)
        
        
    }
 
    
}
printPattern(5)