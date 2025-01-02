// function patt(n){
    
//  for(i=1;i<=n;i++){
//     let pat = ""
//     for(j=1;j<=n-i;j++){
//         pat=pat+" "
//     }
//     for(k=1;k<=i;k++){
//         if(k%2===0){
//             pat = pat+"#"
//         }
//         else{
//             pat = pat+"*"
//         }
//     }
//     console.log(pat)
//  }
// }
// patt(3)


function patt(n) {
    
    for (let i = 1; i <= n; i++) {
        let pat = "";


        for (let j = 1; j <= n - i; j++) {
            pat += "  ";
        }

        
        for (let k = 1; k <= i; k++) {
            if (k % 2 === 0) {
                pat += "# ";
            } else {
                pat += "* ";
            }
        }

        console.log(pat.trim());
    }
}
patt(4)