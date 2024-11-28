// explanations!






// You said:
// For any usage above 300 kWh, the rate is ₹15 per kWh.
// For usage = 350 kWh:
// First 100 kWh = 100 × ₹8 = ₹800
// Next 200 kWh = 200 × ₹12 = ₹2400
// Remaining 50 kWh = 50 × ₹15 = ₹750
// Total Bill = ₹800 + ₹2400 + ₹750 = 3950
// The program takes an array of usages, the program prints the sum
// example usages = [350, 150, 100];
// output
// For example:
// Test
// Result
// calculateTotalBill([350, 150, 100])
// 6150


function use(useage){
    let add=0;
    for(i=0;i<useage.length;i++){
        if(useage[i]<=100){
            add=add+8
        }
        else if(useage[i])
    }
}
use([350,150,100])