//squate matrix
for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        if(row==col||row+col==4){
            process.stdout.write('*')
        }else{
            process.stdout.write(' ')
        }
    }
    console.log();
}