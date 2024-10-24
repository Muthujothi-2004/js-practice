let empty=[]

function array(a){
    even(a);
    console.log(lcm(empty[0],empty[1])) 
}
function even(a){
  for(i=0;i<a.length;i++){
    if(a[i]%2===0){
       empty.push(a[i])
    }
  }
}

function lcm(b,c){
  
    let max=Math.max(b,c)
    for(i=max;i<=10000;i++){
        if(i%b===0 && i%c===0){
            return i
        }
    }
}
array([2,1,4,3,6,5])
console.log(empty)