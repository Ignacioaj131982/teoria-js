//Ejercicio 1 trabajando con funciones:
/*Vamos a ejercitar sobre nuestro conocimiento en funciones y poner en práctica todo
lo aprendido hasta el momento. Como siempre recordá que todo el material que
hayas visto hasta el momento podés consultarlo, y no te asustes si ves algo que no
hemos visto todavía, con el correr del tiempo la práctica de buscar conceptos nuevos
y cómo utilizarlos va a ser cada vez más sencilla.*/

function test1 (x , y) {
    return y - x

}

console.log(test1(10, 40));//30



function test2 (x , y) {
    return x * 2
    console.log(x)
    return x/2
}


console.log(test2(10)); //20


function convertirCentrimetro (pulgadas) {
    
    return pulgadas * 2.54
}

console.log(convertirCentrimetro(2));


function convertirStringURL (string) {

    return `http://www.${string}.com`;


}

console.log(convertirStringURL("pepito"));


function recibirUnString (string) {

    return `¡${string}!`
}


console.log(recibirUnString("Que boludo"));


function calcularEdadPerros (edad) {

    return edad * 7

}


console.log(calcularEdadPerros(2));


function calcularHoraTrabajo (sueldoMensual) {

    return sueldoMensual / 40;
}

console.log(calcularHoraTrabajo(800000));


function calculadorIMC (alturaEnMetros, pesoEnKilos) {

    return pesoEnKilos / (alturaEnMetros ** 2)

}

console.log(calculadorIMC(1.76 , 96 )); // 30.99 soy obeso jajajaj


/*let calculadorIMC = (alturaEnMetros, pesoEnKilos) => {

    return pesoEnKilos / (alturaEnMetros ** 2)
} // misma funcion que anterior pero en funcion flecha*/


let convertirMayuscula = (string) => {

    return string.toUpperCase();

}

console.log(convertirMayuscula("hola mundo"));


let queTipoDeDato = (dato) => {

    return typeof dato;


}

console.log(queTipoDeDato(1));


let aCircunferencia = (radioDelCirculo) => {

    return (radioDelCirculo * 2) * Math.PI
}


let resultado = aCircunferencia(20)
console.log(resultado);

