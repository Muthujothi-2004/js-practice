// What is the GCD of 48 and 180?

function gcd(a,b){
  let min=Math.min(a,b)
  for(i=min;i>=0;i--){
    if(a%i===0&&b%i===0){
        console.log(i)
        break;
    }
  }
}
gcd(48,180)