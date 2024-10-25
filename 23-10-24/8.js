// fobonannci

function feb(n){
 let a=0;
 let b=1;
 let c=0;
 let empty=""
 for(i=1;i<n;i++){
    if(a<=n){
        empty=empty+a+" "
    }
    c=a+b;
    a=b;
    b=c;
 }
 console.log(empty)
}
feb(10)

// function febon(n){
//     let a=0;
//     let b=1;
//     console.log(a);
//     console.log(b);
//     let c=0;
//     for(i=1;i<n-1;i++){
//         c=a+b;
//         console.log(c);
//         a=b;
//         b=c;
//     } 
// }

// febon(10)