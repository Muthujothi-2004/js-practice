let num=10;
let isPrime=true;
if(num<=1){
    isPrime=false;
}
else{
    for(i=2;i<=Math.sqrt(num);i++){
        if(i%2==0){
            isPrime=false;
        }
    }
}

if(isPrime){
    console.log("TRUE")
}

else{
    console.log("FALSE")
}