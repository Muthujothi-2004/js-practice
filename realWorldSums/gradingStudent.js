function gradingStudents(grades) {
    // Write your code here
    let round=[];
    
for(let i=0;i<grades.length;i++){
    if(grades[i]<38){
        round.push(grades[i]) ;
    }
    else{
       let multOf5=Math.ceil(grades[i]/5)*5;
       
       if(multOf5-grades[i]<3){
    round.push(multOf5)
 }
 else{
    round.push(grades[i])
 }
    }
}
  return round;
}