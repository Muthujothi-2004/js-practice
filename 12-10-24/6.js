// lcm
function lcm(a,b){
let max=Math.max(a,b)
    let i=max;
    while(max>0){
        if(i%a===0&&i%b==0){
            console.log(i);
            break;
        }
        i++
    }



}
lcm(60,20)