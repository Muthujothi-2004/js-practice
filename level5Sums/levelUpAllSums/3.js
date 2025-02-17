function bubbleObject(n){
    for(i=0;i<n.length;i++){
        for(j=i+1;j<n.length;j++){
            if(n[i].age>n[j].age){
                temp=n[i]
                n[i]=n[j]
                n[j]=temp
            }
        }
    }
    console.log(n)
}
bubbleObject([
    { name: "Ram", age: 25 },
    { name: "Shyam", age: 32 },
    { name: "Radha", age: 22 },
    { name: "Mohan", age: 28 }
])