let str="Thesunisverybright";
 let subStr='sun';

let subStrLen=subStr.length
let sp=str.split("")
for(i=0;i<sp.length;i++){
    let subStr2=str.substring(i ,i+subStrLen);
   
    if(subStr===subStr2){
        console.log(i)
    }
}







