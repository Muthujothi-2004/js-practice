// Given an array of integers, find the minimum in the array

function minimum(a){
    let min=a[0];
    for(i=1;i<a.length;i++){
        if(a[i]<min){
         min=a[i]
        }
    }
    console.log(min)
}
minimum([2,4,5,5,6,1,1,1,0,1])