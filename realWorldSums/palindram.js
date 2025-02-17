function palndrom(str){
    let ispalin=true
   let empty="";

   for(i=0;i<str.length;i++){
    let newStr=str[i];

    if(
    (newStr>="a" && newStr<="z")||
    (newStr>="A" && newStr<="Z")||
    (newStr>="0" && newStr <="9")
)
{
    empty=empty+newStr;
}

   }


   for (let i = 0, j = cleanStr.length - 1; i < j; i++, j--) {
    if (cleanStr[i] !== cleanStr[j]) {
        ispalin= false;
    }
    else if(ispalin){
        console.log("This is palindrom")
    }
}


}

   
