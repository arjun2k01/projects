let s = 1
for (let row = 1; row < 10; row++ ) {
    //stars
    for (let stars = 1; stars <= s; stars++) {
        process.stdout.write("*");
    }
    console.log()
    //updates
    if(row<5){
        s=s+1
    }else{
        s=s-1
    }

    
}