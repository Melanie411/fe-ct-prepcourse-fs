
//function Auto (puerta, color, marca, año, ruedas) {
  //  this.puertas = puerta;
    //this.color = color;
    //this.marca = marca;
   // this.año = año;
    //this.rueda = ruedas;
//
//var miPrimerAuto = new Auto (4, 'rojo', 'ferrari', 2018, 4);
//console.log(miPrimerAuto);
//console.log(miPrimerAuto.marca);

//function Gato (nombre) {
  //  this.nombre = nombre;
    //this.maullar = function (){
     //   return 'mi nombre es ' + this.nombre + '...meaw';
    //}
//}
  //  var Sam = new Gato('Sam');
    //console.log(Sam.maullar ());

    //class Gato {
      //  constructor (nombre) {
        // this.nombre = nombre;
         //this.maullar = function (){
           // return 'mi nombre es '+ this.nombre + '...miaw';

        //}
    //}     
//}
     //   var kitty = new Gato ('kitty');
       // console.log(kitty.maullar());
         
       //PROPIEDADES PROTOTYPE
       function Usuario(nombre, email) {
        this.nombre = nombre;
        this.email = email;
        Usuario.prototype.presentacion = function (){
            return 'mi nombre es '+ this.nombre + ' mi email es '+ this.email;

        }
       }
       var german = new Usuario('german', 'gergmail.com');
       console.log(german)
    