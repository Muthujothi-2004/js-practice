// Given an array of integers, find the minimum in the array

function min(n){
    b=n[0];
    for(i=0;i<n.length;i++){
        if(n[i]<b){
            b=n[i]
        }
    }
    console.log(b)
}
min([0,1,4,5])