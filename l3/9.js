// function prime(a,b){
//     let str=[];
//      for(i=a;i<=b;i++){
//         if(i<=1){
//             isprime=false
//         }

//         else{
//             let isprime=true;
//             for(j=2;j<=Math.sqrt(i);j++){
//                 if(i%j===0){
//            isprime=false
//                 }
//             }
//              if(isprime){
//                str.push(i)
//              }
//         }
//      }

//      if(str.length===0){
//         console.log("no prime in this str")
//      }

//      else{
//         console.log(str.join(", "))
//      }
// }prime(8,10)

// function prime(a) {
//     let isPrime = true;
//     for (i = 1; i < a.length-1; i++) {
//         let b = a[i];
//         if (b <= 1) {
//             console.log(b)
//         }


//         for (j = 2; j <= Math.sqrt(a.length - 1); j++) {
//             if (j % b === 0) {
//                 isPrime = false;
//             }
//         }


//         if (isPrime) {
//             console.log(b)
//         }

//         else {
//             console.log(b)
//         }
//     }


// }
// prime(a = [19, 100, 20, 40])

// function prime(a){
//   if(a<=1){
//     console.log("Not a prime")
//   }

//   else{
//     let isPrime=true;
//     for(i=2;i<=Math.sqrt(a);i++){
//         if(a%i===0){
//             isPrime=false;
//         }
//     }
//     if(isPrime){
//         console.log("prime")
//     }

//     else{
//         console.log("no prime")
//     }
//   }
// }
// prime(20)
function prime(a) {
    if (a <= 1) {
        console.log("Not a prime");
        return; // Exit the function early
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) { // Check if 'a' is divisible by 'i'
            isPrime = false;
            // break; // No need to check further
        }
    }

    if (isPrime) {
        console.log("Prime");
    } else {
        console.log("Not prime");
    }
}

prime(20);
