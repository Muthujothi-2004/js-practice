const readline = require('readline');
// Create interface to get input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Ask the user for the start range
rl.question('Enter start range: ', (userInputStartRange) => {
    // Ask the user for the end range
    rl.question('Enter end range: ', (userInputEndRange) => {
            // Ask the user to have a skip interval
        rl.question('Enter skip interval : ', (userSkipInterval) => {
        let startNumber = parseInt(userInputStartRange);
        let endNumber = parseInt(userInputEndRange);
        let skipInterval = parseInt(userSkipInterval);
            if (skipInterval === 0) {
                console.log("Skip interval cannot be zero.");
                rl.close();
                return;
            }
        print("*** Printing numbers between "
         + startNumber + " and " + endNumber + " ***");
        if(startNumber < endNumber){
            printRangeAscending(startNumber, endNumber, skipInterval);
        }else{
            printRangeDescending(startNumber, endNumber, skipInterval);
        }
        rl.close();
    });
});
});
  function printRangeAscending(startNumber, endNumber, skipInterval){
      while(startNumber < endNumber){
          console.log(startNumber);
          startNumber = startNumber+skipInterval;
      }
  }
  function printRangeDescending(startNumber, endNumber, skipInterval){
    while(startNumber > endNumber){
        console.log(startNumber);
        startNumber = startNumber-skipInterval;
    }
}
function print(message){
console.log(message);
}