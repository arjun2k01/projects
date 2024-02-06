/*
create a business name generator by counting list of adjectives and shop name and another word
*/


/*
adjectives

crazy
amazing
fire

shop name
engine
foods
garments

another word
bros
excited
happy

*/


// solution

let random = Math.random()
let one, two , three;

// first word 

if(random<.44){
    one="crazy"
}
else if(random< 0.8 && random >=.44){
    one="amazing"

}
else{
    one="fire"
}

// second name


random=Math.random()
if(random<.44){
    two="engine"
}
else if(random< 0.8 && random >=.44){
    two="foods"


}
else{
    two="garments"
}



//third name

random=Math.random()
if(random<.44){
    three="bros"
}
else if(random< 0.8 && random >=.44){
    three="excited"


}
else{
    three="happy"
}
console.log(`${one} ${two} ${three}`);
