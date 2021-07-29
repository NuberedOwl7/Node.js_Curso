var Objeto = function (){
    
}

Objeto.prototype.Saludar= function(msg,callback){

    console.log("Saludo",msg);

    if (typeof callback=='function'){
        callback();
    }
    else {
        console.log("Esto no es una función")
    }
    
}

//instanciar 
var o = new Objeto();
o.Saludar('Hola mundo', function(){
    console.log("CallBack Ejecutado")
});

Objeto.prototype.Despedirse= function(){
    console.log("Adios");
}
o.Despedirse();

//Callbackas son funciones que se pasan como parametros 