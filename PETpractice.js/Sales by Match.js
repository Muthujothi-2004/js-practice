function salesByMatch(ar) {
    let array = [];
    let count_1=0;
    for (i = 0; i < ar.length; i++) {
        if(!array.includes(ar[i])){
            let count = 1;
            for (j = i + 1; j < ar.length; j++) {
                if (ar[i] == ar[j]) {
                    count++;
                    array.push(ar[i])
                }
            }

            let ans=Math.floor(count/2);
            count_1=count_1+ans;
        }
       

    }
 console.log(count_1)


}
salesByMatch([10, 20, 20, 10, 10, 30, 50, 10, 20])