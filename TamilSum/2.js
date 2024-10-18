function pat(n){
    for(i=1;i<=n;i++){
        let pat="";
        for(j=1;j<=n-i;j++){
            pat=pat+" ";
        }
        for(k=1;k<=i;k++){
            pat=pat+i+" "
        }
        console.log(pat)
    }

    // for(l=1;l<=n;l++){
    //     let  pat="";
    //     for(m=1;m<=l;m++){
    //         pat=pat+" "
    //     }
    //     for(o=n;o>=l;o--){
    //         pat+=n-l+" "
    //     }
    //     console.log(pat)
    // }

for(l=n;l>=1;l--){
let pat="";

for(m=n;m>l;m--){
    pat=pat+" "
}
for(o=1;o<=l;o++){
    pat=pat+l+" "
}
console.log(pat)
}
    
  
}
pat(4
)
