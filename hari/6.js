n=4;
for(i=1;i<=n;i++){
    let pat=""
    for(j=i;j<i+i;j++){
        if(j%2===1){
            pat =pat+"1"+" "
        }
        else{
            pat=pat+"0"+" "
        }
    }
    console.log(pat)
}