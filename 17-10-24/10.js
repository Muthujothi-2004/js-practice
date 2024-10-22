function pat(n){
    for(i=1;i<=n;i++){
        let pat =""
        for(j=1;j<=n-i;j++){
            pat=pat+" "
        }
        for(k=1;k<=i;k++){
            pat=pat+"* "
        }
        console.log(pat)

    }

    for(i=1;i<=n;i++){
        let pat="";
        for(j=1;j<=i;j++){
            pat=pat+" ";
           
        }
        for(k=1;k<=n-i;k++){
            pat=pat+"* "
        }
        console.log(pat)
    }
}
pat(5)