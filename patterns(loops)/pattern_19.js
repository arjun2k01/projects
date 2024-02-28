let S = 2;
let s = 1;

for (let row = 1; row <= 5; row++) {
    // spaces
    for (let spaces = 1; spaces <= S; spaces++) {
        process.stdout.write(" ");
    }

    // stars
    for (let stars = 1; stars <= s; stars++) {
        if (stars === 1 || stars === s) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }

    console.log();

    // updates
    if (row < 3) {
        S = S - 1;
        s = s + 2;
    } else {
        S = S + 1;
        s = s - 2;
    }
}

// Reset values for the bottom half of the diamond
S = 1;
s = 3;

for (let row = 1; row <= 5; row++) {
    // spaces
    for (let spaces = 1; spaces <= S; spaces++) {
        process.stdout.write(" ");
    }

    // stars
    for (let stars = 1; stars <= s; stars++) {
        if (stars === 1 || stars === s) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }

    console.log();

    // updates
    S = S + 1;
    s = s - 2;
}
