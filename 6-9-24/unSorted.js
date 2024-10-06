function unSort(a){
    let k=3;
    sum=0;
let c=a.sort(function(a,b){
    return b-a;
})
for(i=0;i<=k;i++){
sum=sum+a[i]
    
}
console.log(sum)

}
unSort(a=[85,40,20,90,100,95,10,15])