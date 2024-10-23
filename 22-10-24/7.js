// What is the LCM of 8 and 12?

function lcm(a,b){
   let max=Math.max(a,b)
   for(i=max;i<=a*b;i++){
    if(i%a===0&&i%b===0){
        console.log(i)
        break;
    }
   }
} 
lcm(8,12)