// GCD

function gcd(a,b){
    let min=Math.min(a,b)
    let i=min
    for(i=min;i>=0;i--){
        if(a%i==0&&b%i===0){
            console.log(i)
            break
        }
    }

    while(min>0){
        if(a%i==0&&b%i===0){
            console.log(i);
            break;
        }
        i--;
    }
}
gcd(40,20)

