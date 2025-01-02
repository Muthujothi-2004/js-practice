function bubble(n){
  for(i=0;i<n.length;i++){
    for(j=i+1;j<n.length;j++){
        if(n[i]>n[j]){
            temp=n[i]
            n[i]=n[j]
            n[j]=temp
        }
    }
  }
  console.log(n)
}
bubble([1,3,5,7,2,4,6,5,2,9])