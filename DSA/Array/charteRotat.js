function Rotated(n,k){
     for(i=0;i<k;i++){
       let c= n.pop(n[i]);
      
        n.unshift(c)
        console.log(n)
     }
     
}
Rotated(
    ["wkue","qoi", "sbv","fekls" ], 4)

function Rotated(a,k){
    for(i=0;i<k;i++){
       let b= a.pop(i)
        a.unshift(b)
      
    }
    console.log(a)
}
Rotated([1,2,3,4],2 )