function calculateTotalBill(usages) {
    
    // Enter your code 

            let totall=0;

    for(i=0;i<usages.length;i++){
         if(usages[i]<=100){
             totall= totall+100*8;
         }
         else if(usages[i]<=300){
             totall=totall+(100*8)+(usages[i]-100)*12;
         }
         else if(usages[i]>=300){
             totall=totall+(100*8)+(200*12)+(usages[i]-300)*15;
         }
       
    }
      console.log(totall);

    
}
calculateTotalBill([350,150,100])