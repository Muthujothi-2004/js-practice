// lcm 

// LCM (Least Common Multiple): The smallest multiple that two or more numbers share.
//  For example, the LCM of 4 and 5 is 20.

function lcm(a,b){
let max=Math.max(a,b)
for(i=max;i<=a*b;i++){
    if(i%a===0&&i%b===0){
        console.log(i)
        break;

    }
}
}
lcm(4,5)