function printMultiplicationTable(r){
    let n=5;
    for(i=1;r>=i;r--){
        sum=r*n;
        console.log(n+"*"+r+"="+sum);
    }
}
printMultiplicationTable(6);