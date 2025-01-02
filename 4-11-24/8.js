// Find the LCM for given 3 numbers a, b, c

function lcm(a,b,c){
 let min=Math.min(a,b,c);
 for(i=min;i<a*b*c;i++){
    if(i%a===0 && i%b===0  && i%c===0){
        console.log(i);
        break;
    }
 }
}
lcm(10,60,33)