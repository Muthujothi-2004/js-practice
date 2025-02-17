// Integer: Sort the following numbers in ascending order using Bubble Sort:
function Integer(n){
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

Integer([34, 12, 25, 78, 56, 9])