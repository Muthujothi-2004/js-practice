// Given an array of integers, find the maximum in the array

function max(a){
  let b=a[0]
  for(i=1;i<a.length;i++){
    if(b<a[i]){
        b=a[i]
    }
  }
  console.log(b)
}
max([2,4,6,8,10])