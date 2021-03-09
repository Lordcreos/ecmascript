function newFunction (name, age, country){
    let name = name  || 'oscar';
    let age = age || ' 32 ';
    let country = country || 'MX';
    console.log(name, age, country);
}

//comienza es6 
function newFunction2(name = 'oscar', age='32', country='MX'){
    console.log(name,age,country);
}


newFunction2();
newFunction2('leo','24', 'ecu');

let hello = 'Hello'
let world = 'World'
let epicPhrase = hello+ ' '+ world;

console.log(epicPhrase);

let epicPrhase2 = `${hello} ${world}`;
console.log(epicPrhase2);