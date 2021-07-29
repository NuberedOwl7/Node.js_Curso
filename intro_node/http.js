
var https = require('https');

// opciones
var opciones = {
    port: 443,
    hostname: "google.com",
    method: "get",
    path: "https://www.google.com/webhp?hl=es&ictx=2&sa=X&ved=0ahUKEwiale6Pk4fyAhUCXawKHW5UA2wQPQgJ"
};

var req = https.request(opciones, /*respuesta  es un callback */ (respuesta) => {
    //la 'respuesta' es un CANAL de Lecura
    respuesta.on('data', /*Callback */ (chunk) => {
        console.log(chunk.toString());
    });
    respuesta.on('end',/*Callback */ () => {
        console.log(respuesta.headers);
    });
});
req.end(); //WriteStream: lanza la comunicación del request
console.log("Petición lanzada");