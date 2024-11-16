function arr(a){
   let b= a[0];
   for(i=1;i<a.length;i++){
    if(b>a[i]){
        b=a[i];
    }
   }
   console.log(b)
}
arr([2,4,6,7,4,3,8,9,10])