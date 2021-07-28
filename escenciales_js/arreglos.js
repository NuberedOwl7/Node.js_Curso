// los arreglos son primordiales para almacenar datos arreglos
var arr= [6,- 23, 12 ,-45, 9, 0, 4, 99]

//For each - es un iterador que recorre el arreglo 
// forma tradicoinal de iterar 

for(var i=0; i<arr.length; i++) {
    console.log(arr[i])
    console.log("----------------")
};
//forma usando for each 
arr.forEach(function(/*a es el contenido b el indice del arreglo */a,b) {
    console.log(a," ",b,);
})


//filter filtra los datos dependiendo de la condicional

var resultado = arr.filter((valor)=>{
    return valor > 5
})
 console.log(resultado, 'soy un filter ');

 //map toma como parametro una funcion para alterar los datos
 var resultado2 = arr.map((valor)=>{
     //manipulaciòn de datos 
     return valor*valor;
     //ademas se puede encadenar filter para mostras ciertos valores 
 }).filter((x)=>{
    return x > 2000;
    
 });


console.log(resultado2);

// reduce es reducir a un reultado unico basado en un arreglo de

var resultado3 = arr.reduce((acumulador, valor_actual) => acumulador + valor_actual, 100)

console.log(resultado3);
