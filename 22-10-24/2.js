// gcd

// GCD (Greatest Common Divisor): The largest number that divides two or more numbers without leaving a remainder.
//  For example, the GCD of 12 and 15 is 3.

function gcd(a,b){
let min=Math.min(a,b)
for(i=min;i>=0;i--){
 if(a%i===0&&b%i===0){
    console.log(i)
    break;
 }
}
}
gcd(12,15)