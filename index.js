var http = require("http");

const datos = JSON.stringify({nombre:'Luis Gerardo Alvarado Moreno', grupo:'5A', matricula:'20963'})

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(datos);
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');