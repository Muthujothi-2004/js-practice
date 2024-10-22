// gcd 

function gcd(a,b,c){
    let min=Math.min(a,b,c)
        for(i=min;i>=0;i--){
            if(a%i===0&&b%i===0&&c%i===0){
                console.log(i);
                break;
            }
        }
    
}
gcd(30,40,50)