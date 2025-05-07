// List Average
// Calculate the average of all elements in a list of integers.
let add=0;
let ave=""
function average(n){
      for(i=0;i<n.length;i++){
         add=add+n[i]
      }
   ave=add/n.length

   console.log(ave)
}

average([80,70,60,50,38])