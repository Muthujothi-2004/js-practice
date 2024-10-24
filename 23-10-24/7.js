let empty=[]
function mainFunction(a){
  odd(a);
  console.log(gdc(empty[1],empty[2]))
}
function odd(a){
for(i=0;i<a.length;i++){
    if(a[i]%2===1){
      empty.push(a[i])
    }
}
}
 function gcd(b,c){
    let min=Math.min(b,c)
    for(i=min;i>=0;i--){
        if(b%i===0&& c%i===0){
         return i 
        }
    }
 }
mainFunction([2,1,4,3,5,6])
// console.log(empty)