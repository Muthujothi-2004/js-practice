// function febbo(n){
//     let a=0;
//     let b=1;
//     let sum=0;
//     for(i=1;i<=n;i++){
//         console.log(a);
//         sum=a+b;
//         a=b;
//         b=sum;    
//     }
// }febbo(10);

// function febbo(limit) {
//     let a = 0;
//     let b = 1;
//     let sum = 0;
    
//     while (a < limit) {
//         console.log(a);
//         sum = a + b;
//         a = b;
//         b = sum;
//     }
// }

// febbo(10);

// function febbo(limit) {
//     let a = 0;
//     let b = 1;
//     let sum = 0;
//     let lastFibo = 0;

//     while (a < limit) {
//         lastFibo = a; 
//         sum = a + b;
//         a = b;
//         b = sum;
//     }

//     console.log(lastFibo); 
// }

// febbo(10);

// function feb(n){
//     let a=0;
//     let b=1;
//     let c=0;
//     let arr=[];
//     for(i=1;i<=n;i++){
//       if(a<10){
//         arr.push(a);
//       }
//         c=a+b;
//           a=b;
//           b=c;
//   }
//     console.log(arr.join(' '))  
//     }
// feb(10)


// function fibonacci(n) {
//   // Enter your code here
// let a=0;
// let b=1;
// let c=0;
//   for(i=3;i<=n.length;i++){
//       console.log(a);
//         if(a<=b){
//             c=a+b;
//             a=a
//             b=c
//         }
//     }
//     console.log(c);
//   }
//   fibonacci(8)

let list1=[1,3,4,5]
 let list2=[1,3,5,4]

let str="";

for(let i=0; i<list1.length; i++){
  for(let j=0; j<list2.length; j++){
    if(list1[i]===list2[j]){
      str=str+list1[i]+", ";
    }
  }
}
console.log(str.slice(0,str.length-2));
