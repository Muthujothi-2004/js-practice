let n=5;
for(i=1;i<=n;i++){
    let pat=""
    for(j=1;j<=n;j++){
        if(i===1||i===n||j===1||j===n){
            pat=pat+"* "
        }
        else{
            pat=pat+"  "
        }

    }
    console.log(pat)
}