// Given an array of integers, find the maximum in the array

function max(a){
 let max=a[0];
 for(i=1;i<a.length;i++){
    if(a[i]>max){
        max=a[i]
    }
 }
 console.log(max)


}max([1,3,,5,6,7,4])