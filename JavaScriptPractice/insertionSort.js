function inser(n){
   for(i=1;i<n.length;i++){
    let temp=a[i]
    let value=i-1

    while( value>=0  && n[value]>temp){
        a[value+1]=a[i]
    }
    a[value]=temp
   }
}
inser([1,2,5,10,8])