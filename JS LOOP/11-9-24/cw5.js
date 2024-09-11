let a=true;
function printEvenOdd(n){
if(a){

    for(i=1;i<=n;i++){
        if(i%2===0){
            console.log(i);
        }
    }
}

else {
    for(i=1;i<=n;i++){
        if(i%2===1){
            console.log(i);
        }
    }

}
}

printEvenOdd(20);
