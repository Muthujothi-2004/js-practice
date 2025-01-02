function selection(n){
 for(i=0;i<n.length;i++){
    let min= i;
    for(j=i+1;j<n.length;j++){
        if(n[min].price>n[j].price){
            min=j
        }
    }
    [n[i],n[min]]=[n[min],n[i]]
 }
 console.log(n)
}
selection(([
    { name: "date", price: 45 },
    { name: "apple", price: 13 },
    { name: "cherry", price: 25 },
    { name: "banana", price: 10 }
  ]))