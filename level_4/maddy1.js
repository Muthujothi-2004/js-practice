function palindram(a){
     for(i=0;i<a.length;i++){
        let word=a[i];
        let reversed="";
        for(j=word.length-1;j>=0;j--){
            reversed=reversed+word[j];
          
        }
        if(word===reversed){
            console.log("true")
        }
        else{
            console.log("false")
        }
     }
}
palindram(["level" , "jooj", "maddy"])