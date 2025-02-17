// Given an array of integers, find the maximum in the array

function max(n){
 let b=n[0];
 for(i=0;i<n.length;i++){
    if(n[i]>b){
        b=n[i]
    }
 }
 console.log(b)
}
max([2,3,0,1,19])