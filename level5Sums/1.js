function bubbleObject(n){
    for(i=0;i<n.length;i++){
        for(j=i+1;j<n.length;j++){
            if(n[i].price>n[j].price){
                temp= n[i]
                n[i]=n[j]
                n[j]=temp
            }
        }
    }
    console.log(n)


}
bubbleObject([
    { name: "date", price: 45 },
    { name: "apple", price: 13 },
    { name: "cherry", price: 25 },
    { name: "banana", price: 10 }
  ])