S=4
s=1
for(let row=1;row<6;row++){
    //spaces
    for(let space=1;space<=S;space++){
        process.stdout.write(" ");
    }
    //stars
    for(let stars=1;stars<=s;stars++){
        process.stdout.write('*')
    }
    console.log();
    //updates
    S=S-1;
}

// for(var i = 0; i<=5; i++){
//     var str = ""
//     for(var j = 0; j<=i;j++){
//         str += "*"
//     }

//     console.log(str);
// }