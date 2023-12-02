//Revisá el siguiente código y asegurate de entenderlo para poder avanzar con el
//ejercicio.

/*let edad = 20
if(edad < 18) {
console.log("No puede pasar al bar.")
} else if (edad < 21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else {
console.log("Puede pasar al bar y tomar alcohol.")
}

/*Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:
● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
inválida. Por favor ingrese un número válido."
Importante: no se deberá mostrar ningún otro mensaje.
● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
la mayoría de edad.
● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
edad es impar?".*/


let edad = 20

let accesoBar = (edad) => {
    if(edad < 0) {

        return "Error, edad inválida. Por favor ingrese un número válido."
        } else if (edad > 21){

        return "Bienvenido! Felicitaciones por alcanzar la mayoría de edad"
        } else if (edad % 2 !=0) {

            return "¿Sabías que tu edad es impar?";
        
        }
        else {
        
            return "Puede pasar al bar y tomar alcohol."
        }
        

}

console.log(accesoBar(22));


let totalAPagar = (vehiculo , litrosConsumidos) => {

    let precioPorLitro = 0;

    if (vehiculo === "coche") {
        
        precioPorLitro = 86;

    } else if (vehiculo === "moto") {

        precioPorLitro = 70;

    } else if (vehiculo === "autobus") {

        precioPorLitro = 55;

    }

    let total = litrosConsumidos * precioPorLitro;

    if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {

        total += 50;
    }

    if (litrosConsumidos > 25) {

        total += 25
    }

    return total


}

let resultado = totalAPagar("autobus", 105)
console.log(resultado);


let ventaSandwiches = (sandwichBase, tipoDePan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {

    let total = 0;

    if (sandwichBase === "Pollo") {
        
        total += 150;

    } else if (sandwichBase === "Carne") {

        total += 200;

    } else if (sandwichBase === "Vegetariano") {

        total += 100;
    }

    if (tipoDePan === "blanco") {
        
        total += 50;

    } else if (tipoDePan === "negro") {

        total += 60;

    } else if (tipoDePan === "s/gluten") {

        total += 75;
    }

    if (queso) {

        total += 20;

    }

    if (tomate) {

        total += 15;

    }

    if (lechuga) {

        total += 10
    }

    if (cebolla) {

        total += 15;
    }

    if (mayonesa) {

        total += 5;
    }

    if (mostaza) {

        total += 5
    }

    return total 




}

let resultado1 = ventaSandwiches("Carne", "blanco", true, true, true, true, false, true)
console.log(resultado1);


let numeroSecreto = (numero) => {

    Math.random(numero) * 10


}

let verificarNumeroSecreto = (numero) => {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
    if (numero === numeroSecreto) {
        return "¡Felicitaciones! Adivinaste el número secreto.";
    } else {
        return `Lo siento, el número ingresado (${numero}) no es el número secreto. El número secreto era: ${numeroSecreto}. ¡Inténtalo nuevamente!`;
    }
};

// Uso de la función:
let miIntento = 2; // Ejemplo de número a verificar
console.log(verificarNumeroSecreto(miIntento));


/*abrirParacaidas()
Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
siguiente:
● La velocidad debe ser menor a 1000 km/h.
● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.*/

let abrirParacaidas = (velocidad , altura) => {

    if (velocidad < 1000 && altura >= 2000 && altura < 3000 ) {

        return "paracaidas abierto zafaste!"

    } else {
        return "no abrió el paracaidas te hiciste mierda"
    }

}

let resultado2 = abrirParacaidas(999, 3000)
console.log(resultado2);


let diaSemana = 3;
let nombreDia;

let traductorDePalabras = (palabraATraducir) =>{

    let traduccion;

    switch (palabraATraducir) {
        case "perro":
            traduccion = "dog";
            break;
        case "pelota":
            traduccion = "ball";
            break;
        case "arbol":
            traduccion = "tree";
            break;
        case "genio":
            traduccion = "genius";
            break;
        
        default:
            traduccion = "La palabra ingresada no es correcta";
            break;
    }

    return traduccion
    
}

console.log(traductorDePalabras("camote"))


/*Valoración de películas
Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
según la siguiente escala:
● Muy mala.
● Mala.
● Mediocre.
● Buena.
● Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".

6

En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
inválido".
Cuando el usuario haya valorado la película, agradecerle su visita.*/


let valoracionDePeliculas = (valorPelicula) =>{

    let calificacion;

    switch (valorPelicula) {
        case "muy mala":
            calificacion = "Calificaste la película como Muy Mala. Lo lamentamos mucho.";
            break;
        case "mala":
            calificacion = "Calificaste la pelicula como mala. Vete al diablo";
            break;
        case "Mediocre":
            calificacion = "Calificaste la pelicula como mediocre. Mediocre sos vos por votar a Milei";
            break;
        case "Buena":
            calificacion = "Calificaste la pelicula como buena. Buena estas vos!";
            break;
            case "Muy Buena":
                calificacion = "Calificaste la pelicula como muy buena. Mas buena está pampita!";
                break;
        
        default:
            calificacion = "Lo siento boludo la calificacion es solo Muy Mala, Mala, Mediocre, Buena y Muy Buena";
            break;
    }

    return calificacion
    
}

console.log(valoracionDePeliculas("camote"))

