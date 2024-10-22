// lcm

function lcm(a,b,c){
 let max=Math.max(a,b,c)
 for(i=max;max<=a*b*c;i++){
    if(i%a===0&&i%b===0&&i%c===0){
        console.log(i)
        break;
    }
 }
}
lcm(10,50,100);