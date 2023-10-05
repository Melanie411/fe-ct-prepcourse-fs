
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
function multiplicarPorTres(elemento) {
  return elemento * 3;
}
var producto = num.map(multiplicarPorTres);
console.log(num);
