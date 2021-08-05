var cliente = require('mongodb').MongoClient;

const url = 'mongodb://localhost/node-curso';

//Cadena de conexiones
cliente.connect(url, (error, db) => {
    //colection No SQL 
    db.collection('animales');
    db.insertOne({npmbre:"luna", especie: "Perro"},
    (error, result) => {
        db.collection('animales');
        console.log(result);
    })
    
});