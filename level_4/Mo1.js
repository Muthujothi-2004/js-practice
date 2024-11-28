// function findMax(arr) {
//     if (arr.length === 0) return undefined;
  
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }
  
//   console.log(findMax([1, 3, 5, 2, 4]));
//   console.log(findMax([]));
//   console.log(findMax([10, -5, 20]));
//   console.log(findMax(["a", "b", "c"]));
//   console.log(findMax([]));

// //   function arrmax(arr){
// //         if(arr.length===0){
// //             return undefined;
// //         }
// //         let max=0;
// //         for(let i=1;i<arr.length;i++){
// //             if(arr[i]>max){
// //                 max=arr[i];
// //             }
          
// //         }
// //         // console.log(max)
// //         return max;
// //     }
// //     console.log(arrmax([2,4,5,6,7]));
// //     console.log(arrmax([]));
// //     console.log(arrmax["a", "b","c"]);


function findmax(arr){
   if(arr.length===0){
      return undefined;
   }
let max=arr[0];
   for(let i=0;i<arr.length;i++){
if(arr[i]>max){
    max=arr[i]
}
   }
   return max
}
console.log(findmax([1,4,5,10]));
console.log(findmax(["b","f","a"]));
console.log(findmax([]))
