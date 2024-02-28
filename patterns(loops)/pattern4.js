let s = 1
let S = 2
for (let row = 0; row < 3; row++) {
    //spaces
    for (let space = 1; space <= S; space++) {
        process.stdout.write(' ')
    }
    //stars
    for (let stars = 1; stars <= s; stars++) {
        process.stdout.write('*')


    }
    console.log();
    s=s+2
    S=S-1
}


