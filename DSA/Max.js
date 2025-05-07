// Find the largest number in an array

function max(n){
 let max = n[0];
 for(i=1;i<n.length;i++){
     if(n[max]>n[i]){
        max=n[i]
     }
 }
 console.log(max)

}
max([10,9,8])

// let max=[10,9,8]
// let b=Math.max(...max)
// console.log(b)