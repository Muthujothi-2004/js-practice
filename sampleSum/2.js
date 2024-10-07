// function array(a){
// sum=0;
// for(i=0;i<a.length;i++){
//     sum=sum+a[i];  
// }
// console.log(sum)
// if(sum%3===0){
//     return true;
// }
// else{
//     return false
// }
// }
// console.log(array[1,2,3,4]);




function inp(a) {
    let sum = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 === 1) {
            sum = sum + a[i];
            
        }
    }
    return sum;
}
console.log(inp(array = [1, 2, 3, 4, 5, 6]))