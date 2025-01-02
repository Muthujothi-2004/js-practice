function selection (n){
  for(i=0;i<n.length-1;i++){
    let min=i;
    for(j=i+1;j<n.length;j++){
        if(n[min]>n[j]){
            min=j
        }
    }
    console.log(n.join(" "));
    if(min!=i){
        [n[i],n[min]]=[n[min],n[i]]
    }
  }
  console.log(n.join(" "))
}
selection([4,5,1,3,7])