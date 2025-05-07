function string(n){
    let  isUnique=true;
    let b=n.split("");
    for(i=0;i<b.length;i++){
        let count=0;
        for(j=0;j<b.length;j++){
            if(b[i].toLowerCase()===b[j].toLowerCase()){
              count++
            }
        }
      if(count>1){
        isUnique=false
      }
    }
    console.log(isUnique)

}
string("Worldw")
