// Given array two arrays student names and scores, return the student name who has the
//  maximum score eg names=["sanjay", "priya", "ramesh", "sanjana"], scores = [88, 45, 71, 91] Answer sanjana

function students (names, scores){
   
    let score=scores[0];
    let name=names[0];
    for(i=1;i<scores.length;i++){
        if(scores[i]>score){
              score=scores[i];
              name=names[i]
        }
    }
    
}
students (["sanjay", "priya", "ramesh", "sanjana"],[88, 45, 71, 91] )