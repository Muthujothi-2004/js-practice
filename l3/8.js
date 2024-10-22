let n = 4;

for (i = 1; i <= n; i++) {
    let pat = "";

    for (j = 1; j <= n - i; j++) {
        pat = pat + " "
    }

    for (k = 1; k <= i; k++) {
        if ( i === n || k == 1 || k == i) {
            pat = pat + "* "
        }

        else {
            pat = pat + "  "
        }

    }
    console.log(pat);

}