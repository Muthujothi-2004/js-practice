// String: Sort the following array of strings in alphabetical order:

function string(n){
    for(i=0;i<n.length;i++){
        for(j=i+1;j<n.length;j++){
            if(n[i]>n[j]){
                temp=n[i]
                n[i]=n[j]
                n[j]=temp
            }
        }
    }
    console.log(n.join())
}

string(["banana", "apple", "grape", "mango", "cherry"])