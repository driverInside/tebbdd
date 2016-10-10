// var http: declaro una variable
// Node ya tiene unos modulos predefinidos
// require equivale a import o un include.
// driverInside 

var bar = "soy la var bar";
var dexter = [];
var alumnos = [
	"yara",
	"dexter",
	"Adrián",
	"Alberto",
	"Edgar",
	"Pepe"
];

// (function(){
// 	console.log("Hola clase 1907");
// })();

// var foo = function(nombre) {
// 	console.log('Hola, soy ' + nombre);
// };

// console.log(alumnos.length);

// for (var i = 0; i < alumnos.length; i++) {
// 	foo(alumnos[i]);
// }

// foo("Hiram");






























// (fuction(){
// 	console.log();
// })();


var http = require('http');

var server = http.createServer(function(request, response) {
	response.end('Hola clase de temas selectos de bd');
});

server.listen(1337);

console.log("el servidor está en el puerto 1337");



// var express = require('express');
