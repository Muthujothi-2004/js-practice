function mainFunction(a){
 
  console.log(lcm(a[0],a[1]))
  console.log(gcd(a[2],a[3]))
  }


function lcm(b,c){
    let max=Math.max(b,c)
    for(i=max;i<10000;i++){
        if(i%b===0&&i%c===0){
            return i
            // console.log(i);
            break;
        }
        
    }  
}
function gcd(d,e){
   let min=Math.min(d,e)
   for(i=min;i>=0;i--){
    if(d%i===0&&e%i===0){
        return i
        // console.log(i)
        break;
    }
   
   }
}


mainFunction([20,40,30,10])