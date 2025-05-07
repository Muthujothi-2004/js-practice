function camelcase(s) {
    // Write your code here
    
    let sp=s.split("");
    console.log(sp)
    let count=0;
    let ans=[];

    for(let i=0;i<sp.length;i++){
        if(sp[i] == sp[i].toUpperCase()){
            let ind = sp. indexOf(sp[i])
            let b= sp.splice(0, ind);
            // ans.push(b)
            console.log(b) 

          
        }
        // count ++
       
    }
  
}
camelcase("saveChangesInTheEditor")