// Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.

let scores=[98,65,85,70,74];
let sum=0;
for(i=0;i<scores.length;i++){
sum=sum+scores[i];
}

avr=sum/scores.length;
console.log(avr+"%")

// n=5;
// for(i=1;n<10000;i++){
//     n=n*5;
// }
// console.log(n);

// function ages(a){
// for(i=0;i<a.length;i++){
//     if(a[i]>=18){
//         console.log(a[i])
//     }
// }
// }
// ages([14,19,13,30,52,18,22,51])

function int(a){
    let count=0;
for(i=0;i<a.length;i++){
    if(a[i]%2===0){
       count++;
 
   }
   
}
return count;

}
console.log(int([14,19,13,30,52,18,22,51]))







