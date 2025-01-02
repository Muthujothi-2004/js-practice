// Target Sum

function target(n,tar){
    let newAr=[]
    for(i=0;i<n.length;i++){
        for(j=i+1;j<n.length;j++){
            if(n[i]+n[j]===tar){
                newAr.push(n[i],n[j]);
               
            }
            break;
        }
       
    }

    console.log(newAr)
    
}
target([2,4,6,8,4,3], 7)