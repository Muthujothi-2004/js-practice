// function bubble(n){
//   for(i=0;i<n.length;i++){
//     for(j=i+1;j<n.length;j++){
//         if(n[i]>n[j]){
//             temp=n[i]
//             n[i]=n[j]
//             n[j]=temp
//         }
//     }
//   }
//   console.log(n)
// }
// bubble([1,3,5,7,2,4,6,5,2,9])

function sort(a){
       for(i=0;i<a.length;i++){
        for(j=i+1;j<a.length;j++){
          if(a[i]>a[j]){
            [a[i],a[j]]=[a[j],a[i]]
          }
        }
       }
       console.log(a)
} 
sort([1,2,3,0,9,6,5])