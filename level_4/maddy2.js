// function findmax(data){
//   let emapty=[]
//   let max=0;
//   let name=""
//   for(i=0;i<data.length;i++){
//     emapty.push(data[i].split(","))
   

//     if(Number(emapty[i][2]>max)){
//        max = Number(emapty[i][2])
//        name=emapty[i][0]
//     }
    
//   }
//   console.log(name)
// }findmax([ "Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000" ])


function findmax(arr){
   let newarr=[];
   let max=0;
   let name=""

   for(i=0;i<arr.length;i++){
    newarr.push(arr[i].split(","))
    if(Number(newarr[i][2]>max)){
      max=Number(newarr[i][2])
      name=newarr[i][0]
    }
   }
   console.log(name)
}
findmax(["Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000"])