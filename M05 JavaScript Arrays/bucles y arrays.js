
//

 //var nombre = " camilo ";
 //var saludo = " Hola " + nombre;
   //    console.log(saludo);

  // var pintores = ["picasso", "velasques", "van ghog", "Dali"];
   //var incluyeDali = pintores.includes ("Dali");
  // console.log(incluyeDali);

 //  var numeros = [9, 6, 7, 11, 43];
  // var cumpleCondicion = numeros.every ((num) => {return num > 5});
  // console.log(cumpleCondicion);

 // var autos = ["ford", "chebrolet", "toyota", "tesla"];
     // autos.forEach (function (auto, indice) {
       // console.log(auto, indice);
     // });
  

var num = [ 2, 3, 4, 5 ];

//var masUno = num.map( (num) => {
   //return num + 1;
//});
  // console.log(masUno);
//var num = [ 2, 3, 4, 5 ];
//function multiplicarPorTres(elemento) {
 // return elemento * 3;
//}
//var producto = num.map(multiplicarPorTres);

//var listaDeCompras = [];
 //listaDeCompras[1] = "lechuga";
 //listaDeCompras[3] = "tomates"; 

//console.log(listaDeCompras);
 //metodoS
//var colores = ["rojo" , "azul"];
//colores.push("amarillo");
//colores.unshift("verde");
//colores.pop();
//colores.shift();
//console.log(colores);

// METODO_INCLUDES
//var pintores = ["picasso", "Dali", "velasques", "van gogh"]
//var incluyeDali = pintores.includes("Monet");
//console.log(incluyeDali);

// METODO_EVERY
//var numeros = [60, 21 , 6, 8, 10];
//var cumpleCondicion = numeros.every((num) => {
  //return num > 5
//})
//console.log(cumpleCondicion);

//METODO_SPLIT_y_JOIN
//var palabra = "henry"
//var palabraSeparada = palabra.split("");
//palabraSeparada.pop();
//palabraSeparada.push("i");
//console.log(palabraSeparada);
//var palabraArreglada = palabraSeparada.join("")
//console.log(palabraArreglada);
 
//METODO_FOR_EACH
//var numeros = [1, 2, 3, 4];
//numeros.forEach( (num) => {console.log(num) } );
//numeros.forEach((num) => {
   //if(num === 3) {
    // console.log(num);
  // }
//} )

//METODO_MAP
//var numeros = [1, 2, 5, 6, 10, 20, 35];
//var masUno = numeros.map( (num) => { return num + 1
//})
//console.log(masUno);

//for y WHILE

//var arr = [1, 2, 4, 8,];
//for(var i = 0 ; i <  arr.length ; i++ ) {
  //console.log(arr[i]);
//}

//function encontrarLetraP(string) {
  //var letras = string.split('');
 
  //for (let i = 0 ; i < letras.length ; i++) { 
    //if (letras[i] === 'P') { 
      //console.log('si contiene a P');

    //}
  //}
//}
//encontrarLetraP('javascriPt');
//encontrarLetraP('henry');

var arr = [];

while (arr.length < 5) {
  arr.push('BOOM');
}
console.log(arr);