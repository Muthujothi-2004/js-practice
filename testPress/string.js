let str="The sun is very bright";
let subStr="sun";
let subIn

let sp=str.split(" ");

for(i=0;i<sp.length;i++){
    if(sp[i]===subStr){
       subIn=i
    }
 
}
console.log(subIn)
console.log(sp)