const fs = require('fs');

const rutaDelArchivo = `${__dirname}/pedidos.json`;
let pedidos = fs.readFileSync(rutaDelArchivo, 'utf8');

if (pedidos.length > 0) {
	pedidos = JSON.parse(pedidos);
	
	console.log(`Total de pedidos: ${pedidos.length}`);

	let gustoMuzza = pedidos.filter(pedido => pedido.gustoPizza == 'Muzzarella');
	let gustoJYM = pedidos.filter(pedido => pedido.gustoPizza == 'Jamón y morrón');
	let gustoCalabresa = pedidos.filter(pedido => pedido.gustoPizza == 'Calabresa');
	

	console.log(`Total de Muzzarella: ${gustoMuzza.length}`);
	console.log(`Total de Jamon y Morron: ${gustoJYM.length}`);
	console.log(`Total de Calabresa: ${gustoCalabresa.length}`);
	
} else {
	console.log('"Actualmente el sistema no tiene pedidos para generar el reporte".');
}