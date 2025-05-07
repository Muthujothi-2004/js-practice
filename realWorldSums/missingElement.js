function missing(n){
 let max=n[0]
 let min=n[0]
 let total=0;
//  let total2=0;

 for(i=0;i<n.length;i++){
    total=total+n[i];

    if(max>n[i]){
        max=n[i];
    }

    else if(min<n[i]){
        min=n[i];
    }
 }

 for(i=n[min];i<n[max];i++){
    total2=total2+i
 }

 let result = total-total2
 console.log(result)
}
missing([1,2,3,4,6])


