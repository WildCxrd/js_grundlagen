/* Schreibe eine Funktion, welche einen String als Parameter erhält und überprüft, 
ob dieser mehr als 5 Zeichen hat. */

logStringLength("asdsadasdasd");
logStringLength("as");
logStringLength("aaaaa");
logStringLength(5);

function logStringLength(string) {
    if (string.length > 5) {
        console.log("String ist länger als 5 Zeichen.", string.length);
    }
    else if (string.length < 5) {
        console.log("String ist kürzer als 5 Zeichen.", string.length);
    }
    else if (string.length == 5) {
        console.log("String ist genau 5 Zeichen lang.", string.length);
    }
    else {
        console.log("String-Länge konnte nicht geprüft werden.", string)
    }
}