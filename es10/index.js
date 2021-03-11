/*ES10

Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.
Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios al inicio o al final dependiendo de la funciona.
try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
Symbol.prototype.description: permite regresar el descripcion opcional del Symbol*/



let array =[ 1,2,3 ,[1,2,3,[1,2,3]]];
//nivel de profundidad del array 
console.log(array.flat());
console.log(array.flat(2));


let array =[1,2,3,4,5];
//para mapear los valoers de manera completa 
console.log(array.flatMap(value => [value, value*2]));


//para eliminar espacios

let hello= '              hola mundo'
// start al pricipio 
console.log(hello);
console.log(hello.trimStart());

// end al final 

let hello= 'hola mundo              '
// start al pricipio 
console.log(hello);
console.log(hello.trimEnd());


//el error del catch puede ser usado sin ser declarado 

try{

}catch/*anstes era necesario colocarl (error)ahora no */{
    error
}


// convertir un arreglo a objetos 

let entries = [["name", "leo"],["age","24"]]
console.log(Object.fromEntries(entries));


// el objeto de tipo simbolo te permite acceder a una descriptcion

let mySimbol = 'My Symbol';
let symbol =Symbol(mySimbol);
console.log(symbol.description);


