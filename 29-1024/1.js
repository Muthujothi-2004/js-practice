// function array(a, b){
// for(i=0;i<a.length;i++){
//    let ara=[]
//     for(j=1;j<a.length;j++){
//         if(a[i]+a[j]===b){
//            ara.push(a[i],a[j])
        
//         //    break;
      
//         }  
       
//     }
//     // console.log(ara);
 

 
//     if(ara.length>1){
//         console.log(ara)
//         break;
//     }
   
//         else{
//             console.log("No 12")
//         }
    
// }
// }
// array([5,6,0,4,7,5,10], 4)



let array=[1,3,2,4,6,10]
let empty=[]
for(i=0;i<array.length;i++){
    if(array[i]%2===0){
     empty.push(array[i])
    }
}
console.log(empty)