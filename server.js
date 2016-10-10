
var http = require('http');

http.createServer((req, res) => {
	res.end('Hola, yo corro en el 3000');
}).listen(3000);

console.log("este server corre en el 3000");