/* Schreibe eine Funktion, die prüft, ob eine Zahl positiv, negativ oder gleich 0 ist, 
und eine entsprechende Nachricht in der Konsole zurückgibt. */

logNumberRange(-4);
logNumberRange(4);
logNumberRange(0);
logNumberRange("4");
logNumberRange("Nummer");

function logNumberRange(number) {
    if (number < 0) {
        console.log("Nummer ist NEGATIV.", number);
    }
    else if (number > 0) {
        console.log("Nummer ist POSITIV.", number);
    }
    else if (number == 0) {
        console.log("Nummer ist GLEICH 0.", number);
    }
    else {
        console.log("Parameter ist keine Nummer.", number);
    }
}