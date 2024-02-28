let S=2
let s=1
for(let row=1;row<6;row++){
    //spaces
    for(let spaces=1;spaces<=S;spaces++){
        process.stdout.write(" ");
    }
    //stars
    for(let stars=1;stars<=s;stars++){
        process.stdout.write("*");
    }
    console.log();
    //updates
    if(row<3){
        S=S-1
        s=s+2
    }else{
        S=S+1
        s=s-2
    }

}