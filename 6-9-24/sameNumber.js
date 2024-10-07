a=[2,2,3,4,4,5,6,6,7,9,9]
let arr=[];
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            arr.push(a[i])
        }
       
    }
}
console.log(arr)