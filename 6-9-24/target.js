function target(a){
let target=8;
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]+a[j]==target){
            console.log(a[i],a[j]);
        }
    }
}
}
target(a=[1,,3,4,5,6,7,8,9]);