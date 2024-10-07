// function num(a){
//     isPrime=true;
//     if(num<=1){
//         isPrime=false;
//     }
//     for(i=2;i<Math.sqrt(num);i++){
//     isPrime=false;
//     }
//     if(isPrime){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }
// num(10);

arra=[20,31,21,71,90,80];
for(i=0;i<arra.length;i++){
    if(arra[i]==2){
console.log(arra[i]);
    }
    else if(arra[i]>2){
        let isPrime=true;
        for(j=2;j<arra[i];j++){
            if(arra[i]%j==0){
               isPrime=false;
            }
        }
        if(isPrime){
            console.log(arra[i])
        }
    }
   
}





