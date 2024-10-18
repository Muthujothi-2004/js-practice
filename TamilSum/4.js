//  prime number 

function prime(a) {

    for(i=0;i<a.length;i++){
        let b=a[i];
        if(b<=1){
            console.log("not na prime")
        }
        else{
            let isPrime=true
            for(j=2;j<=Math.sqrt(b);j++){
              if(b%j===0){
                isPrime=false
              }  
            }
            if(isPrime){
                console.log("prime")
            }
            else{
                console.log("nat a prime")
            }
        }
    }
    // for (i = 0; i < a.length; i++) {
    //     let b = a[i]
    //     if (b === 1) {
    //         console.log("not a prime")
    //     }
    //     else {
    //         let isprmie = true
    //         for (j = 2; j <= Math.sqrt(b); j++) {

    //             if (b % j === 0) {
    //                 isprmie = false;
    //             }
    //         }
    //         if (isprmie) {
    //             console.log("prime")
    //         }
    //         else {
    //             console.log("not a prime")
    //         }
    //     }
    // }
}
prime([4, 100, 19, 60, 19])

// function prime(a){
// for(i=0;i<a.length;i++){
//     let b=a[i];
//     if(b===1){
//         console.log("not a prime")
//     }
//     else{
//         let isPrime=true;
//         for(j=2;j<=Math.sqrt(b);j++){
//             if(b%j===0){
//                 isPrime=false
//             }
//         }
//         if(isPrime){
//             console.log("prime")
//         }
//         else{
//             console.log("not a prime")
//         }
//     }
// }
// }
// prime([4, 100, 100, 60, 19])




















