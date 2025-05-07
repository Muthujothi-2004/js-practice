function breakingRecords(scores) {
    // Write your code here
    let hight=scores[0];
     let hightCount = 0;
    let lowest=scores[0];
    let lowestCount=0;
    
    for(let i=0;i<scores.length;i++){
         if(scores[i]>hight){
            hight=scores[i]
             hightCount++
         }
         else if(scores[i]<lowest){
            lowest=scores[i]
            lowestCount++
         }
    }
    return [hightCount , lowestCount]
}