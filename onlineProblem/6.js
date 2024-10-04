function nam(a){
b=a.split('')
count=0;
for(i=0;i<a.length;i++){
if(b[i]=="a"||b[i]=="e"||b[i]=="i"||b[i]=="o"||b[i]=="u"){
count=count+1;
}

}
console.log(count);
}
nam("jothi");