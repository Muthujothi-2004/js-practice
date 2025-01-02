// function str (num){
//     let newarr=[]
//  let split = num.split(" ")
//  for(i=0;i<split.length;i++){
//     if(split[i].length%2===0){
//         newarr.push(split[i])
//     }
//  }
//  console.log(newarr.join(","))
// }
// str ("hi iam vidya studying twelfth")


function str(num){
 let newarr=[]
 let split=num.split(" ")
 for(i=0;i<split.length;i++){
    if(split[i].length%2===0){
        newarr.push(split[i])
    }
 }
 console.log(newarr)
}str("hi iam vidya studying twelfth")