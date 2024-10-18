// lcm

function lcm(a,b,c){
    let min=Math.max(a,b,c)
    for(i=min;i<a*b*c;i++){
        if(i%a===0&&i%b===0&&i%c===0){
            console.log(i);
            break;
        }
    }
}
lcm(20,60,50)