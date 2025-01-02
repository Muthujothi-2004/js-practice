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

function feb(n){
    let a=0;
    let b=1;
    let c=0;
    let arr=[];
    for(i=1;i<=n;i++){
      if(a<10){
        arr.push(a);
      }
        c=a+b;
          a=b;
          b=c;
  }
    console.log(arr[arr.length-1])  
    }
feb(10)
