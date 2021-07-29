const Eventos = require('events');

//POO Extends es hederar
class Carro extends Eventos {
    constructor(){
        super();
        this.contador = 0;
    }

    //metodo
    Arrancar() {
        console.log('El auto arranca');
        //Lo que se va decir tiene que ser lo mismo ha lo que se va escuchar
        this.emit('arranco', this.contador, 1, 2, 3);
        this.contador += 1;
    }
}

//implementar un objeto

var carro1= new Carro();

// Para escuchar eventos, suscribirnos con el metodo on()
//arranco es la forma en la que escucha 
carro1.on('arranco', function(c) {
    console.log(c, "El evento fue escuchado, y la secuencia ejecutada.")
})

carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();

