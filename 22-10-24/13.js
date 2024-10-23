// LCM: Two traffic lights change every 30 seconds and 45 seconds, respectively. If both lights change at the same time,
//  how long will it be before they change together again?

function lcm(a,b){
   let max=Math.max(a,b)
   for(i=max;i<=a*b;i++){
    if(i%a===0&&i%b===0){
        console.log(i)
        break;
    }
   }
}
lcm(30,45)