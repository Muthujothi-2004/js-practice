// Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter is scheduled to land,
// check if any two helicopters are scheduled to land at the same time.

let land =[12, 15, 12, 18, 20];
let a=land.length;
let moveSet=new Set([...land])
if(a==moveSet){
    console.log("Not land at same time");
}
else{
    console.log("land at same time");
}