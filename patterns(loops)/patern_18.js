
let r = 5;

for (let i = 1; i <= r; i++) {
    // Spaces
    for (let j = i; j < r; j++) {
        process.stdout.write(" ");
    }

    // Stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        if (k === 1 || k === (2 * i - 1) || i === r) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }

    console.log();
}
