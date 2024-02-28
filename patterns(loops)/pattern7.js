let S=8
let s=1
for(let row=1;row<=9;row++){

      //star
    for(let star=1;star<=s;star++){
        process.stdout.write('*')
    }

    //spaces
    for(let spaces=1;spaces<=S;spaces++){
        process.stdout.write(' ')
    }

    //star
    for(let star=1;star<=s;star++){
        process.stdout.write('*')
    }
    
    console.log();
    //updates
    if(row<5){
        s=s+1
        S=S-2
    }
    else{
        s=s-1
        S=S+2
    }
}
