// Print the below pattern use $ instead of even numbers in the below pattern for n = 3
function patt(n) {
    for (i = 1; i <= n; i++) {
        let pat = "";
        for (j = n - i; j < 0; j--) {
            pat = pat + " "
        }
        for (k = 1; k <= i; k++) {
            if (i % 2 === 0) {
                pat = pat + "$".repeat(n-1)
            }

            else{
                pat=pat+i.repeat(n)
            }

        }
        console.log(pat)

    }
}
patt(3)