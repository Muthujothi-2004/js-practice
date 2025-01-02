// function patt (a){
    
//     for(i=1;i<=a;i++){
//     let row="";
//     if(i===1||i===a){
//         row=row+" ".repeat(a-i)+"1";
//     }
//     else if(i===2||i===a-1){
//         row= rwo+" ".repeat(a-i)+"$ $"
//     }
//     else if(i===3){
//         row=row+" ".repeat(a-i)+"3 3 3"
//     }
//     console.log(row)
//     }
// }
// patt(5)

// function printPattern(n) {
   
//   for(i=1;i<=n-2;i++){
//     let str="";
//     for(j=1;j<n-i;j++){
//         str=str+"  "
//     }

//     for(k=1;k<=i;k++){
//         if(k%2===1){
//             str=str+"i "
//         }
//         else{
//             str=str+"$ "
//         }
//     }
//     console.log(str)
//   }
// }

// printPattern(5);
function hi(n) {
    for (let i = 1; i <= n - 2; i++) {
      let str = "";
      
     
      for (let j = 1; j < n - i; j++) {
        str += "  ";
      }
  
      
      for (let k = 1; k <= i; k++) {
        if (i % 2 === 1) {
          str += i;
        } else {
          str += "$ ";
        }
      }
      
      console.log(str);
    }
  }
  
  hi(5);
