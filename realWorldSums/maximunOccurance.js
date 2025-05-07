function Ocurance(n){
    let count1=0;
    let ans
  for(i=0;i<n.length;i++){
    let count=0;
 for(j=i+1;j<n.length;j++){
    if(n[i]===n[j]){
      count++
    }
 }
  if(count1<count){
   count1=count
   ans=n[i]
  }
  }
  console.log(ans)
   

}
Ocurance([5,5,4,1,1,1,6,7,8,8,8,8])