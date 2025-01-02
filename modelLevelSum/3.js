// Given an array of strings, find the string which comes first alphabetically without using any library functions

function string(n){
   let first=n[0]
//    let arr=[]
   for(i=1;i<n.length;i++){
    if(first>n[i]){
        first=n[i];
       
    }
   }
   console.log(first)
 
  
}
string(["car","Banana","Apple"])