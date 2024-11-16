// Given an array of strings, find the string which comes first alphabetically without using any library functions.

function arr(a){
    

// for(i=0;i<a.length;i++){
//    for(j=i+1;j<a.length;j++){
//     if(a[i]<a[j]){
//         let temp = a[j];
//         a[j]=a[i];
//         a[i]= temp;
//     }
//    }
// }
// console.log(a)

for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]<a[j]){
            let temp =a[j]
            a[j]=a[i]
            a[i]=temp
        }
    }
    
}
console.log(a)


} 
arr(["uber", "apple", "sudhan", "cat", "hari"])