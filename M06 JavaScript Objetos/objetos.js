//var deportes = {
  //  conBalon: ['futbol', 'tennis', 'golf'],
    //sinBalon: ['trekking', 'boxeo', 'surf'],

//}
//ACCEDER
//var persona = { nombre: 'juan', edad: 35 , profesion: {esProgramador: true} };
//console.log(persona.edad);

//ASIGNAR
//persona.nombre = 'Martin';
//console.log(persona.nombre);
//persona.edad = 42;
//console.log(persona.edad);

//CREAR
var autos = {};
autos.marcas = ['ford', 'audi', 'chebrole', 'ferrari'];
console.log(autos); 

//ELIMINAR
//var hijos = {};
//hijos.nombres = ['santiago', 'iñaki', 'alejandro'];
//delete hijos.nombres;
//console.log(hijos);

//var misFunctiones = {
    //saludar: function () {
      //console.log("hola");
    //},
//};

//misFunctiones.saludar();

//NOTACION POR PUNTO
var atuendos = {manos: ['guantes', 'anillos'], pies: ['soquetes', 'zapatos'] }
//console.log(atuendos.manos);

//NOTACION POR CORCHETES
//atuendos['piernas'] = ['vermudas', 'pantalones'];
//console.log(atuendos);

//var comidas = {};
//var diferenciaDeNotaciones = function (propUno, propDos) {
  //  comidas [propUno] = ['frutas', 'vegetales'];
    //comidas[propDos] = ['hamburguesas', 'panchos'];
//};
//diferenciaDeNotaciones('saludable', 'noSaludable');
//console.log(comidas);

//TIENE SU PROPIEDAD= hasOwnProperty
//var libros = {autor:'borges', genero: 'policial', año: 1990};
//var tienePropiedad = libros.hasOwnProperty('nombre');
//console.log(tienePropiedad);

//KEYS
//var libro = {autor: 'borges', genero: 'policial', año: 1990};
//var todasLasPropiedades = Object.keys(libro);
//console.log(todasLasPropiedades);

//FOR IN
var mundo = {continentes: 7, paises: 195, oceanos: 5};
for(var prop in mundo){
    console.log("esta es la propiedad: " + prop);
    console.log("este es el valor:" + mundo [prop]);
}

var mascotas = {
    animal:'perro',
    raza:'obejero aleman',
    amistoso: true,
    dueña: 'melanie gonzalez',
    info: function(){
        console.log('este perro es un:' + this.raza);
    }
}
mascotas.info();

