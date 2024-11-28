
// 1.  Print the below pattern of numbers, if n = 3
//    1
//   2 2
//  3 3 3

function patt(n){
  for(i=1;i<=n;i++){
    let row=""


    
    for(j=1;j<=n-i;j++){
        row=row+" "
    }
    for(k=1;k<=n;k++){
        row=row+i+" "
    }
    console.log(row)
  }
}patt(3)