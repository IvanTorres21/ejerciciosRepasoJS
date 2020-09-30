const prompt = require('prompt-sync')();
var altura = prompt('Introduzca la altura: ');
var anch = altura-1;
var piramide = "";
for (var i = 1; i <= altura; i++){

    //Espacio en blanco
    for(var j = 0; j  < anch; j++) {
        piramide += " ";
    }
    //Mitad primera
    for(var j = 1; j <= i; j++) {

        piramide += "" + j;
    }
    //Mitad segunda
    for(var j = i-1; j > 0; j--){

        piramide += "" + j;
    }
    anch--;
    piramide += "\n";
}
console.log(piramide);
