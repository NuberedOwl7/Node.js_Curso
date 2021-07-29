//se solicta el cliente de

var Cliente = require('./cliente');

var clienteGithub = new Cliente('github.com','443','https');

console.log(clienteGithub);