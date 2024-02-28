s=1
S=0
for(let row=1;row<6;row++){
    //space
    for(let spaces=0;spaces<=S;spaces++){
        process.stdout.write(' ')
    }
    //star
    for(let stars=1;stars<=s;stars++){
        process.stdout.write('*')

    }
    console.log();
    //updates
    S=S+1
}