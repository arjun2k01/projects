let s=9
let r=9
let S=0
for(let row=1;row<=9;row++){
     //space
     for(let space=1;space<=S;space++){
        process.stdout.write(' ')
    }
    //stars
    for(let stars=1;stars<=s ; stars++){
        process.stdout.write('*')
    }
   
    console.log();
    s=s-2
    S=S+1
    
}
