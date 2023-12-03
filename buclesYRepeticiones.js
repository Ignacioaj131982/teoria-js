/*Bucles y repeticiones
1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.
2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
3) Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100
4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.
5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro.*/

let mostrarSiguientesNumeros = (valor) => {
    for (let i = 1; i <= 10; i++) {
        console.log(valor + i);
    }
}


mostrarSiguientesNumeros(5)


for (let i = 5; i <= 20; i += 3) {
    console.log(i);
}

let suma = 0;

for (let i = 0; i <= 100; i++) {
    suma += i;
}

console.log("La sumatoria de los números del 0 al 100 es: " + suma);


function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Ejemplo de uso
let numero = 5; // Puedes cambiar este número para calcular el factorial de otro valor
console.log("El factorial de " + numero + " es: " + factorial(numero));
