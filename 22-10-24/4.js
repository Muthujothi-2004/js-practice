// gcd

// What is the GCD of 36 and 60?

function  gcd(a,b){
    let min=Math.min(a,b)
    for(i=min;i>=0;i--){
    if(a%i===0&&b%i===0){
        console.log(i)
        break;
    }
    }
}gcd(36,60)