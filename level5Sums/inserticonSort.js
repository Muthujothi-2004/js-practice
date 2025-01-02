function insertion(n){
  for(i=0;i<n.length;i++){
    let current =n[i]
    for(j=i+1;j<n.length;j++){
        if(n[current]>n[j]){
            n[j+1]=n[j] 
        }
    }
    n[j+1]=current
  }
  console.log(n)
}
insertion([1,4,3,2,6,10,0,12])