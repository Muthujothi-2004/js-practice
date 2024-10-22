n=4;
for(i=1;i<=n;i++){
    let pat=""
    for(j=1;j<=n-i;j++){
        pat=pat+" "
    }
    for(k=1;k<=i;k++){
        pat=pat+i+" "
    }
    console.log(pat)
}