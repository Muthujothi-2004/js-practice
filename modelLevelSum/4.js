// Given an array of strings arr and another string s, check if s in present in arr

function str(n){
let string="m";
let isstr=false
for(i=0;i<n.length;i++){
    if(n[i]===string){
     isstr=true
    }
   
}
 if(isstr){
    console.log("yes")
 }
 else{
    console.log("no")
 }
}
str(["a","b","c","s"])

