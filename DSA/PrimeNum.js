// n=167
// let isPrime=true;
// for(i=2;i<n;i++){
//      if(n%i===0){
//         isPrime= false;
//      }
// }
// console.log(isPrime)

n=10;

for(i=1;i<n;i++){
    let isPrime=true;
     if(i===1){
        console.log(i)
     }

      else if(i===2){
        console.log(i)
     }

     else if(i>2){
       for(j=2;j<i;j++){
          if(i%j===0){
            isPrime=false;
          }
       }

       if(isPrime){
        console.log(i)
       }
       

     }

     
}