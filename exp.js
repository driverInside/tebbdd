var express = require('express');
// var mongoose = require('mongoose'); // ORM mongodb
var app = express();

app.get('/get', function(req, res){
	res.send({
		message: "hola mundo"
	});
});


// PHP Storm
// Note ++
// Emacs
// Vi


// los dos argumentos son:
// la ruta ("/registro")
// la función callback
app.post('/registro', function (req, res) {

	console.log(req);

	res.status(201).send({
		message: "guardado"
	});
});

app.get('/registro', function (req, res) {
	console.log(req.query);
	res.status(200).send({
		message: "esta es la página"
	});
});


// app.get('/api/usuarios'); // obtener items
// app.post('/api/usuarios'); // crear items
// app.put('/api/usuarios'); // actualizar
// app.delete('/api/usuarios'); // borrar













app.listen(3000);


// http codes:
// 10x informativos
// 20x ok
// 30x *warnings
// 40x errores del client
// 50x errores del servidor








// var http = require('http'); // declaración de modulos o librerías

// var server = http.createServer(function(req, res){  // la creación del servidor
// 	res.end('hola mundo'); // el manejo de la respuesta o el cuerpo
// });

// server.listen(2000);  // configuración.


