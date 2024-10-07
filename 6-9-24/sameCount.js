// same count 
function nam(a){
count=0;
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            count=count+1;

        }
    }

}

}
nam(a=[2,2,3,4,4,5,6,6,7,7]);
console.log(count);