function sell(n) {
    let len = n.length;
    let gap = Math.floor(len / 2)
    while (gap > 0) {
        for (i = gap; i < len; i++) {
            let temp = n[i]
            let j = i
            while (j >= gap && n[j - gap] > temp) {
                n[j] = n[j - gap]
                j = j - gap
            }
            n[j] = temp
        }
       gap= Math.floor(gap/2)
    }
    console.log(n)
}
sell([88, 90, 6, 2, 1, 3, 4])
