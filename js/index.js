alert ('Bienvenido a DataWriter, acá podras encontrar una gran variedad de libros.');

const nombre = prompt('Ingrese su nombre completo.');
alert (`Un gusto tenerte con nosotros ${nombre}.`);

let pagoEfectivo = 20;
let pagoCredito = 5;
let precioLibro = 600;

let generos = parseInt(prompt('¿Qué categoria de libro buscas? \n 1- Suspenso. \n 2- Terror. \n 3- Policial. \n 4- Ficción.'));
const suspenso = 'Suspenso';
const terror = 'Terror';
const policial = 'Policial';
const ficcion = 'Ficción';

while (generos < 1 || generos > 4 ) {
    alert ('Ingresaste una opcion incorrecta.');
    generos = prompt('Por favor, elija una de nuestras opciones: \n 1- Suspenso. \n 2- Terror. \n 3- Policial. \n 4- Ficción.');
}

switch (generos) {
    case 1:
        console.log(`Seleccionaste para ver nuestro catalogo de ${suspenso}.`);
        break;

    case 2:
        console.log(`Seleccionaste para ver nuestro catalogo de ${terror}.`);
        break;

    case 3:
        console.log(`Seleccionaste para ver nuestro catalogo de ${policial}.`);
        break;

    case 4:
        console.log(`Seleccionaste para ver nuestro catalogo de ${ficcion}.`);

    default:
        break;
}

const cantidadDeLibros = parseInt(prompt(`¿Cuantos libros deseas llevar ${nombre}?`));

let formaDePago = parseInt(prompt(`Selecciona la forma en la cual desea pagar sus ${cantidadDeLibros} libros: \n 1- Efectivo. \n 2- Tarjeta de Debito. \n 3- Tarjeta de Credito. `));

while (formaDePago < 1 || formaDePago > 3) {
    alert ('Seleccionaste una opcion incorrecta.');
    formaDePago = parseInt(prompt('Ingrese una opción valida: \n 1- Efectivo. \n 2- Tarjeta de Debito. \n 3- Tarjeta de Credito. '));
}

switch (formaDePago) {
    case 1:
        alert ('Seleccionaste para pagar en efectivo. Tendra un descuento del 20%.');
        console.log(`Tu descuento es de ${pagoEfectivo}%`);
        console.log('Vas a pagar un total de ' + calcularEfectivo(cantidadDeLibros, precioLibro));
        break;
    
    case 2:
        alert ('Seleccionaste para pagar con tarjeta de debito.');
        console.log('No hay descuento posible.');
        console.log('Vas a pagar un total de ' + calcularDebito(cantidadDeLibros, precioLibro));
        break;
    
    case 3:
        alert ('Seleccion para pagar con tarjeta de credito.');
        console.log(`Vas a tener un interes de ${pagoCredito}%`);
        console.log('Vas a pagar un total de ' + calcularCredito(cantidadDeLibros, precioLibro));
        break;
}

function calcularEfectivo(cantidad, valor) {
    total = cantidadDeLibros * precioLibro;
    descuento = (total * pagoEfectivo) / 100 ;
    precioFinal = total - descuento;
    return precioFinal;
}

function calcularDebito (cantidad, valor) {
    total = cantidadDeLibros * precioLibro;
    precioFinal = total;
    return precioFinal;
}

function calcularCredito (cantidad, valor) {
    total = cantidadDeLibros * precioLibro;
    interes = (total * pagoCredito) / 100;
    precioFinal = total + interes;
    return precioFinal;
}


let seguirComprando = parseInt(prompt('¿Desea seguir comprando? \n 1-Si. \n 2-No.'));

if (seguirComprando = 1) {
    let generos = parseInt(prompt('¿Qué categoria de libro buscas? \n 1- Suspenso. \n 2- Terror. \n 3- Policial. \n 4- Ficción.'));
    while (generos < 1 || generos > 4 ) {
        alert ('Ingresaste una opcion incorrecta.');
        generos = prompt('Por favor, elija una de nuestras opciones: \n 1- Suspenso. \n 2- Terror. \n 3- Policial. \n 4- Ficción.');
    }
    switch (generos) {
        case 1:
            console.log(`Seleccionaste para ver nuestro catalogo de ${suspenso}.`);
            break;
    
        case 2:
            console.log(`Seleccionaste para ver nuestro catalogo de ${terror}.`);
            break;
    
        case 3:
            console.log(`Seleccionaste para ver nuestro catalogo de ${policial}.`);
            break;
    
        case 4:
            console.log(`Seleccionaste para ver nuestro catalogo de ${ficcion}.`);
    
        default:
            break;
    }
    const cantidadDeLibros = parseInt(prompt(`¿Cuantos libros deseas llevar ${nombre}?`));

    let formaDePago = parseInt(prompt(`Selecciona la forma en la cual desea pagar sus ${cantidadDeLibros} libros: \n 1- Efectivo. \n 2- Tarjeta de Debito. \n 3- Tarjeta de Credito. `));

    while (formaDePago < 1 || formaDePago > 3) {
        alert ('Seleccionaste una opcion incorrecta.');
        formaDePago = parseInt(prompt('Ingrese una opción valida: \n 1- Efectivo. \n 2- Tarjeta de Debito. \n 3- Tarjeta de Credito. '));
    }

    switch (formaDePago) {
        case 1:
            alert ('Seleccionaste para pagar en efectivo. Tendra un descuento del 20%.');
            console.log(`Tu descuento es de ${pagoEfectivo}%`);
            console.log('Vas a pagar un total de ' + calcularEfectivo(cantidadDeLibros, precioLibro));
            break;
    
        case 2:
            alert ('Seleccionaste para pagar con tarjeta de debito.');
            console.log('No hay descuento posible.');
            console.log('Vas a pagar un total de ' + calcularDebito(cantidadDeLibros, precioLibro));
            break;
    
        case 3:
            alert ('Seleccion para pagar con tarjeta de credito.');
            console.log(`Vas a tener un interes de ${pagoCredito}%`);
            console.log('Vas a pagar un total de ' + calcularCredito(cantidadDeLibros, precioLibro));
            break;
    }



} else {
    alert ('Gracias por su visita. Vuelva pronto.');
    
}