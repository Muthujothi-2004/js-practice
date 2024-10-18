let n=3;
for(i=1;i<=n;i++){
    let str="";
    for(j=1;j<=n-i;j++){
        str=str+" "
    
    }
    for(k=1;k<=i;k++){
        if(k===1||k===i){
            str=str+"* "
        }
        else{
            str=str+"  "
        }
       
    }
    console.log(str)
 
}
for(l=n;l>=1;l--){
    let pat="";
    
    for(m=n;m>l;m--){
        pat=pat+" "
    }
    for(k=1;k<=i;k++){
        if(k===1||k===i){
            pat=pat+"* "
        }
        else{
            pat=pat+"  "
        }
       
    }
    console.log(pat)
    }