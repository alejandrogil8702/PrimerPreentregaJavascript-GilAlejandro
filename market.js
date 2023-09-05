

///PRIMER PRE ENTREGA JAVASCRIPT //// ALUMNO : ALEJANDRO GIL



///MARKET-ONLINE - COCONANA-BAKERY///

let subtotal = 0;
let continuar;
let cantidad;
let producto;
const MINIMO = 1;
const MAXIMO = 15;
const ALFAJORES = 'ALFAJORES';
const GALLETAS_PERSONALIZADAS = 'GALLETAS PERSONALIZADAS';
const TORTAS = 'TORTAS';
const BOX_SORPRESA = 'BOX SORPRESA';

function saludar() {
    alert('BIENVENIDO A COCONANA-BAKERY ONLINE. Haga clic en Aceptar para comenzar con la compra');
}

saludar();

function calcularPrecio(producto, cantidad) {
    switch (producto) {
        case ALFAJORES:
            return 500 * cantidad;
        case GALLETAS_PERSONALIZADAS:
            return 250 * cantidad;
        case TORTAS:
            return 2800 * cantidad;
        case BOX_SORPRESA:
            return 3900 * cantidad;
        default:
            alert('En este momento no contamos con stock de este producto');
            return 0;
    }
}

do {
    producto = prompt('Bienvenido a COCONANA-BAKERY!\n' +
        '"Alfajores" - Por Unidad $500\n' +
        '"Galletas Personalizadas" - Por Unidad $250\n' +
        '"Tortas" - Por Unidad (2Kg) $2800\n' +
        '"Box Sorpresa" - Por Unidad $3900\n' +
        'Seleccione un producto:').toUpperCase();


    cantidad = parseInt(prompt('Seleccione cuantas unidades desea comprar:'));

    if (cantidad >= MINIMO && cantidad <= MAXIMO) {
        subtotal += calcularPrecio(producto, cantidad);
        continuar = prompt('Total: $ ' + subtotal + ' ¿Desea seguir comprando? si/no');
    } else {
        alert('Supera el máximo de unidades permitidas para este producto');
    }
} while (continuar === 'si');

alert('Su total a pagar es: $ ' + subtotal);
 
