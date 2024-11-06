// Given a value n print the below pattern n = 3

// n = 3
// * * *
// # # #
// * * *

// n=4
// * * * *
// # # # #
// * * * *
// # # # #
function patt(n) {
    for (i = 1; i <= n; i++) {

        if (i % 2 === 0) {
            console.log("# ".repeat(n))
        }
        else {
            console.log("* ".repeat(n))
        }
    }

}
patt(4)
