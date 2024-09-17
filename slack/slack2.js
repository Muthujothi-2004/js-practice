function robotmoves(tb){
    let lb=20;
while(tb>=lb){
    
        console.log("your battery level is "+tb+"%");
        tb=tb-5;
}
if(tb==lb){
    console.log("")
}


}
robotmoves(100);