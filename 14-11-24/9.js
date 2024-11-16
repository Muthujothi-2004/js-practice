// Implement the linear search algorithm

// function linear (a, target){
//    for(i=0;i<a.length;i++){
//     if(a[i]===target){
//         return i;
//     }
//     return -1;
//    }
   
// }
//  console.log(linear([2,7,9,0,10,11,18,19],11));


function linear(a, target) {
    for (let i = 0; i < a.length; i++) {
       if (a[i] === target) {
          return i;  // Return index if target is found
       }
    }
    return -1;  // Return -1 only after the loop completes without finding the target
 }
 
 console.log(linear([2, 7, 9, 0, 10, 11, 18, 19], 11));  // Output: 5
 