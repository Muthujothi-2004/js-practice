function pat(n){
    for(i=1;i<=n;i++){
       let pat="";
        for(j=1;j<=n-i;j++){
            pat=pat+"* "
        }
        console.log(pat)
    }
}
pat(5)