function findmax(data){
  let emapty=[]
  let max=0;
  let name=""
  for(i=0;i<data.length;i++){
    emapty.push(data[i].split(","))

    if(Number(emapty[i][2]>max)){
       max = Number(emapty[i][2])
       name=emapty[i][0]
    }
    
  }
  console.log(name)
}findmax([ "Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000" ])