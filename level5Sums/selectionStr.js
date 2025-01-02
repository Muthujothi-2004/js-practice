function selectiontr(n){
  for(i=0;i<n.length;i++){
    let min=i;
    for(j=i+1;j<n.length;j++){
        if(n[min]>n[j]){
            min=j
        }
    }
   [n[i],n[min]]=[n[min],n[i]]
  }
  console.log(n)
}
selectiontr(["apple","zara", "hari", "rexcy"])