// // Boolean

// let muted: boolean = true;
// muted = false;

// // Number
// let numerador: number = 42
// let denominador: number = 6;
// let result = numerador / denominador;

// // String

// let nombre: string = 'Diego';
// let saludar: string = `Hola me llamo ${nombre}`;

// // Arreglos

// let people: string[] = [];
// people = ['Diego', 'Paulis', 'Juanchis']
// people.push('Julian');

// let peopleAndNumber: Array< string | number> = [];

// peopleAndNumber = ['hello', 23];

// // Enum

// enum Color {
//     Rojo = 'Rojo',
//     Verde = 'Verde',
//     Azul = 'Azul',
// }

// let colorFavorite: Color = Color.Rojo;

// console.log(colorFavorite)

// // Any

// let hello: any = 'Hello';
// hello = { hello };
// console.log(hello);

// // object

// let obj: object = {
//     hello
// }


// funciones

// function add(a: number,b: number): number{
//     return a + b;
// }

// const sum = add(2, 4);

// function createAdder(a: number): (number) => number{
//     return function(b: number){
//         return a + b;
//     }
// }

// const addFour = createAdder(4);
// const fourPlus6 = addFour(6);

// function fullName(firstName: string = 'Diego', lastName?: string): string {
//     return `${firstName} ${lastName}`;
// }

// const diego = fullName('diego');
// console.log(diego);

// Interfases

enum Color {
    Rojo = 'Rojo',
    Azul = 'Azul',
    Amarillo = 'Amarillo',
    Verde = 'Verde'
}

interface Rectangulo {
    ancho: number
    alto: number
    color?: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    // color: Color.Azul,
}

function area(r: Rectangulo): number{
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

console.log(rect.toString())

rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color.toLowerCase()}`: 'Un rectangulo';
}

console.log(rect.toString())


