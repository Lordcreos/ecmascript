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

let lorem ="inserte frase 1 aqui \n" + "inserte frase 2 aqui";

let lorem2 = `ahora si esto es una frase epica
y est otra frase epica lol
`;
console.log(lorem);
console.log(lorem2);

let person = {
    'Nombre' :  'leo',
    'edad' : 24,
    'country' : 'MX'
}

console.log(person.Nombre, person.edad, person.country);

//en es6

let {Nombre, edad , country} = person;

console.log( edad , country, Nombre);

//elemento de propagaciómn
let team1= ['pepe','pedro','guzman'];
let team2 =['yair','vacha','norberto'];

let union = [ 'leo', ...team1,...team2 ];
console.log(union);