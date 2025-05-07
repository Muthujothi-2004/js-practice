// function selection(n){
//    for(i=0;i<n.length - 1;i++){
//     let min=i;
//     for(j=i+1;j<n.length;j++){
//         if(n[min]>n[j]){
//             min=j
//         }

//     }
//     // let t=n[min]
//     // n[min]=n[i]
//     // n[i]=t
//     [n[i],n[min]] =[n[min],n[i]]
//    }
 
//    console.log(n)
// }
// selection([1,5,4,3,20,19])


function selectionSort(n){
     for(i=0;i<n.length-1;i++){
        let min=i;
        for(j=i+1;j<n.length;j++){
            if(n[min]>n[j]){
                min=j
            }
        }
        [n[i],n[min]]=[n[min],n[i]]
     }

     console.log(n)
}
selectionSort([1,0,10,9,6])