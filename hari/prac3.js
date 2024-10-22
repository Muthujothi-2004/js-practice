n=5;
for(i=1;i<=n;i++){
    let pat =""
    for(j=1;j<=n-i;j++){
        pat =pat +" "
    }
    for(k=1;k<=i;k++){
        if(i===1||i===5||k===1||k===i)
        pat =pat+"* "

        else{
            pat=pat+"  "
        }
    }
    console.log(pat)
}