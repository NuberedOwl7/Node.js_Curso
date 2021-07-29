//cliente Http/Https
//github.com/users/NuberedOwl7

class cliente {
    constructor(host, port, protocol){
        this.host = host;
        this.port = port;
        this.protocol = protocol;
    }
    //realizar peticiones para obtener HTTP(opbtener informacion)
    
    //procesar headers par mantener abierta la sesión => (se realiza en la peticion o request)
    //metodos de la clase 
    procesarHeaders(req){

        return req;
    }

    get(uri){

    }
    //data es el dato que recibe para enviar 
    post(uri, data){

    }

}

module.exports = cliente