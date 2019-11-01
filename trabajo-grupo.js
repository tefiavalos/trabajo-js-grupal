//Por favor, recuerden que el index.html se debe escribir siempre con minúscula inicial! index y no Index ! 



// El || "" al final no tiene sentido - si el usuario no escribe nada, de todos modos el prompt valerá ""
const nombre = prompt(`Bienvenida a la tienda "💝 Las tangas de Leele 💝". Decinos tu nombre!`) || ""

const productos = alert(`Hola ${nombre}. Estos son nuestros productos en oferta:

👙 Tangas

🔥 Colaless`)

// Recuerden lo que hablamos sobre nombres de variables - la variable producto1 terminará valiendo
// "sí" o "no". ¿Es un buen nombre?
const producto1 = prompt(`Querés comprar tangas?`);

const cantidadProducto1 = producto1 == "si" && prompt(`Cuantas unidades queres?`) || 0;

const producto2 = prompt (`Queres comprar colaless?`)

const cantidadProducto2 = producto2 == "si" && prompt(`Cuantas unidades queres?`) || 0;

let precio1 = 50;

let precio2 = 60;

let total = (cantidadProducto1 * precio1) + (cantidadProducto2 * precio2);

const resumenCompra = alert(`Resumen de tu compra
Compraste:

👙 Tangas x ${cantidadProducto1} = $ ${cantidadProducto1 * precio1}

🔥 Colaless x ${cantidadProducto2} = $ ${cantidadProducto2 * precio2}

💵 Total = ${total}

`);

const medioPago = prompt("Querés abonar con tarjeta de crédito?");

// otro nombre que podría ser confuso - cantidadDeCuotas me parece mejor que pagoTarjeta 
let pagoTarjeta = medioPago == "si" && prompt(`En cuantas cuotas querés abonar?`);

let mensajeTarjeta = pagoTarjeta && `cantidad de cuotas = ${pagoTarjeta} 

precio x cuotas = ${total / pagoTarjeta}`

// Si no elijo pagar con tarjeta de credito, voy a ver un "0" en el medio del alert muy extraño. 
alert(`Resumen de tu compra
Compraste:

👙 Tangas x ${cantidadProducto1} = $ ${cantidadProducto1 * precio1}

🔥 Colaless x ${cantidadProducto2} = $ ${cantidadProducto2 * precio2}

💵 Total = ${(cantidadProducto1 * precio1) + (cantidadProducto2 * precio2)}

${mensajeTarjeta ||  "0"}
`);

const codigoDescuento = prompt("Tenés código de descuento?");

const codigoIngresado = codigoDescuento == "si" && prompt("Ingresá el código aqui") || alert("No tenes código")

// Si bien son muy útiles cuando desarrollamos, no es buena práctica dejar console.log en un producto terminado
// Corremos el riesgo de que lo vea un usuario. 
console.log(codigoDescuento);

let codigo = "ADALOVELACE"

codigoIngresado == codigo && alert("Código aceptado"); 

codigoIngresado == codigo && (mensajeTarjeta = pagoTarjeta && `cantidad de cuotas = ${pagoTarjeta} 

precio x cuotas = ${(total -20) / pagoTarjeta}`)  

codigoIngresado == codigo && alert(`Resumen de tu compra
Compraste:

👙 Tangas x ${cantidadProducto1} = $ ${cantidadProducto1 * precio1}
 
🔥 Colaless x ${cantidadProducto2} = $ ${cantidadProducto2 * precio2}

Subtotal = ${(cantidadProducto1 * precio1) + (cantidadProducto2 * precio2)}

${mensajeTarjeta ||  "Cuotas = 0"}

Descuento = $20

💵 Total = ${total-20}`)

codigoIngresado != codigo && alert(`Resumen de tu compra
Compraste:

👙 Tangas x ${cantidadProducto1} = $ ${cantidadProducto1 * precio1}

🔥 Colaless x ${cantidadProducto2} = $ ${cantidadProducto2 * precio2}

Subtotal = ${(cantidadProducto1 * precio1) + (cantidadProducto2 * precio2)}

${mensajeTarjeta ||  "Cuotas = 0"}

💵 Total = ${total = (cantidadProducto1 * precio1) + (cantidadProducto2 * precio2)}`);

alert(`Gracias ${nombre} por tu compra 🛍️`);


// Excelente trabajo, chicas. 
