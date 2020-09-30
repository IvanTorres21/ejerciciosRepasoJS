const prompt = require('prompt-sync')();
var altura = prompt('Introduzca la altura de la piramide: ');
var anch = altura-1;
var piramide = "";

for (var i = 0; i < altura-1; i++){
    //Espacio en blanco
    for(var j = 0; j  < anch; j++) {
        piramide += " ";
    }
    //Mitad primera
    piramide += "*";
    for(var j = 1; j <= i; j++) {

        piramide += " ";
    }
    //Mitad segunda
    for(var j = i-1; j > 0; j--){

        piramide += " ";
    }
    if (i != 0) piramide += "*";
    anch--;
    piramide += "\n";
}
for (var i = 0; i < altura*2-1;i++) piramide += "*";
console.log(piramide);
