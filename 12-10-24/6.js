// lcm
// function lcm(a,b){
// let max=Math.max(a,b)
//     let i=max;
//     while(max>0){
//         if(i%a===0&&i%b==0){
//             console.log(i);
//             break;
//         }
//         i++
//     }

// }
// lcm(60,20)


// function lcm(a,b){
//     let max= Math.max(a,b)
//     let i=max;
//     while(max>0){
//         if(i%a===0&&i%b===0){
//             console.log(i);
//             break;
//         }
//         i++
//     }
  
// }
// lcm(70,60)


function prime(a){
  isprime=true;
  for(i=2;i<a**2;i++){
    if(a%2===0&&i!=0){
        isprime=false;
    }
   
  }
  if(isprime){
    console.log(isprime)
}
}
prime(97)