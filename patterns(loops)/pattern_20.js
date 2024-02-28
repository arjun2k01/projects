let rows = 5;

// Top half of the hourglass
for (let i = 1; i <= rows; i++) {
    // Spaces before stars
    for (let j = 1; j < i; j++) {
        process.stdout.write(" ");
    }

    // Stars
    for (let k = 1; k <= 2 * (rows - i) + 1; k++) {
        process.stdout.write("*");
    }

    console.log();
}

// Bottom half of the hourglass
for (let i = rows - 1; i >= 1; i--) {
    // Spaces before stars
    for (let j = 1; j < i; j++) {
        process.stdout.write(" ");
    }

    // Stars
    for (let k = 1; k <= 2 * (rows - i) + 1; k++) {
        process.stdout.write("*");
    }

    console.log();
}
