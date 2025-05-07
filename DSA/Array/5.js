
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    
    for( let i=0;i<10000;i++){
        let jump1= x1 +i *v1;
        let jump2 = x2 +i * v2;
        
        if(jump1 === jump2){
            return "YES" ;
        }  
    }
      
        return "NO"       
}

