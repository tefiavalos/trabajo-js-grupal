const nombre = prompt(`Bienvenida a la tienda "Las tangas de Leelee". Decinos tu nombre!`);

const productos = alert(`Hola ${nombre}. Estos son nuestros productos en oferta:

Tangas

Colaless`)

//let producto1 = "tangas"

//let producto2 = "colaless"

const producto1 = prompt(`Querés comprar tangas?`);


const cantidadProducto1 = producto1 == "si" && prompt(`Cuantas unidades queres?`) || 0;

const producto2 = prompt (`queres comprar colaless`)

const cantidadProducto2 = producto2 == "si" && prompt(`Cuantas unidades queres?`) || 0;

let precio1 = 50;

let precio2 = 60;

let total = (cantidadProducto1 * precio1) + (cantidadProducto2 * precio2);

const resumenCompra = alert(`Resumen de tu compra
Compraste:

tangas x ${cantidadProducto1} = $ ${cantidadProducto1 * precio1}

colaless x ${cantidadProducto2} = $ ${cantidadProducto2 * precio2}

total = ${total}

`);

const medioPago = prompt("Querés abonar con tarjeta de crédito?");

let pagoTarjeta = medioPago == "si" && prompt(`En cuantas cuotas querés abonar?`);

let mensajeTarjeta = pagoTarjeta && `cantidad de cuotas = ${pagoTarjeta} 

precio x cuotas = ${total / pagoTarjeta}`

alert(`Resumen de tu compra
Compraste:

tangas x ${cantidadProducto1} = $ ${cantidadProducto1 * precio1}

colaless x ${cantidadProducto2} = $ ${cantidadProducto2 * precio2}

total = ${(cantidadProducto1 * precio1) + (cantidadProducto2 * precio2)}

${mensajeTarjeta ||  "0"}
`);

const codigoDescuento = prompt("Tenés código de descuento?");

const codigoIngresado = codigoDescuento == "si" && prompt("ingresá el código") || alert("no tenes código")

console.log(codigoDescuento);

let codigo = "ADALOVELACE"

codigoIngresado == codigo && alert("Código aceptado"); 

total = codigoIngresado == codigo && alert(`Resumen de tu compra
Compraste:

tangas x ${cantidadProducto1} = $ ${cantidadProducto1 * precio1}

colaless x ${cantidadProducto2} = $ ${cantidadProducto2 * precio2}

subtotal = ${(cantidadProducto1 * precio1) + (cantidadProducto2 * precio2)}

${mensajeTarjeta ||  "cuotas = 0"}

descuento = $20

total = ${total-20}`)  || alert(`Resumen de tu compra
Compraste:

tangas x ${cantidadProducto1} = $ ${cantidadProducto1 * precio1}

colaless x ${cantidadProducto2} = $ ${cantidadProducto2 * precio2}

subtotal = ${(cantidadProducto1 * precio1) + (cantidadProducto2 * precio2)}

${mensajeTarjeta ||  "cuotas = 0"}

total = ${total}`);

alert(`Gracias ${nombre} por tu compra`);


