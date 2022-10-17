//ECMAScript+6
//ECMAScript es una especificación de lenguaje de scripting en la que se basa JavaScript.
//Ecma International está a cargo de estandarizar ECMAScript.


//ECMAScript 6
//Uso de "let" y "const". 
let myEdad = 30;
const myName = 'Emilce';

//Arrow Functions
const arrow = (text)=>{
    return text;
};

const arrow2 = text => text;

// Parámetros en objetos
let obj1 = {myEdad, myName};

//Default Params
const user = (nombre = 'Jose',  apellido = "De la Torre", edad = 32)=>{
    return console.log(nombre, apellido, edad);
};

//Desestructuración
let objetoU = {
    nombre: 'Diego',
    apellido: 'Marte',
    edad: 38
};

let {nombre, apellido, edad} = objetoU;

//Spread Operator - operador de propagación
let squad1 =[ 'Maria', 'Ana'];
let squad2 =['Flor', 'Tatiana'];

let group = ['Francisco', 'Natalia', ...squad1, ...squad2];

//Concatenación
const usr = `${nombre} ${apellido} tiene ${edad} años.`;
//Multilínea
const text =  ` Estamos muy felices de brindarte este comienzo.
                Nos sentimos muy contentos de que seas parte del equipo. `;

//Promesas
const helloWord =() =>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Hola Mundo');
        } else {
            reject('Ups!, existe un error');
        }
    });
};

helloWord()
 .then(response => console.log(response))
 .then(()=> console.log('Perfecto'))
 .catch(err => console.log(err))

 // Class 
 class Calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
 }

 const calc = new Calculator;

 //Generator
 function*holaMundo(){
    if(true){
    yield 'Hello,';
    }
    if(true){
     yield 'Word'
    }
 };

 const generatorHello = holaMundo();
 console.log(generatorHello.next().value);
 console.log(generatorHello.next().value);

 //ModuleJS que permite usar import y export