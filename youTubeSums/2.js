// binary srting

 var binary = function sttr(n){
    let count =0;
    for(i=1;i<=32;i++){
        if(n&1){
            count= count+1;
        }

        n=n>>1;
    }
  console.log(count)
}