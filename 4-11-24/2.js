// Print the following pattern if n = 4

function patt(n){
    for(i=1;i<=n;i++){
        let pat =""

        for(j=n-i;j>=1;j--){
            pat=pat+" "
        }
        for(k=1;k<=i;k++){
            if(i%2===0){
                pat = pat + "* "
            }
            else{
                pat = pat + i+ " "
            }
        }
        console.log(pat)
    }
}
patt (5)