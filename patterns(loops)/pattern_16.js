// let r = 6
// let s = 1
// let S=0
// for (let i = 1; i <= r; i++) {
//     //stars
//     for (j = 0; j <= s; j++) {
//         process.stdout.write('*')
//     }
//     //spaces
//     for(let space=1;space=S;space++){
//         process.stdout.write(' ')
//     }
//     console.log();
//     //updates
//     if(r==1){

//     }else if(r==2){
//         s=2

//     }else if(r<=5){
//         S=S+1

//     }else{
//         s=6
//     }

// }


let r = 6;
let s = 1;
let S = 0;

for (let i = 1; i <= r; i++) {
    // stars and spaces
    for (let j = 1; j <= s; j++) {
        if (j === 1 || j === s || i === r) {
            process.stdout.write('*');
        } else {
            process.stdout.write(' ');
        }
    }

    console.log();

    // updates
    if (i == 1) {
        
    } else if (i == 2) {
        s = 2;
    }
    else if (i <= 5) {
        s=s+1
        S = S + 1;
    } else{
        s=6
    }
}
