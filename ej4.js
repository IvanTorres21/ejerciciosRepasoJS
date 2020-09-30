const prompt = require ('prompt-sync')();

var names = []; //Array were the names will be stored
var quantity = prompt("Introduzca el numero total de reyes que va a insertar: ");
readNames(quantity);

/**
 * Function that reads an amount of names and
 * places them into an array.
 */
function readNames(quantity){

    while (quantity > 0) {

        var name = prompt("Introduzca nombre rey")
        names += name;
        quantity--;
    }
    showNames();
}

/**
 * Function  that counts how many times names are repeated
 */
function countName(){


}

/**
 * Function that show the name with
 * the number they are 
 */
function showNames(){

    console.log(names);
}