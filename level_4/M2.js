// Given an array of integers, find the minimum in the array

function min(a){
    let b=a[0]
    for(i=1;i<a.length;i++){
        if(b>a[i]){
            b=a[i]
        }
    }
    console.log(b)
}
min([2,4,6,3,1,0])