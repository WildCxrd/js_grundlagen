/* Schreibe eine Funktion, die zwei Zahlen als Parameter bekommt 
und die größere der beiden Zahlen in der Konsole zurückgibt. */

console.log(returnGreaterNumber(1, 6));
console.log(returnGreaterNumber(8, 3));
console.log(returnGreaterNumber(5, 5));
console.log(returnGreaterNumber("Text", "27"));
console.log(returnGreaterNumber(5, "27"));

console.log(returnGreaterNumber(8.65, 0));
console.log(returnGreaterNumber(29, 3.23));

function returnGreaterNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    }
    else if (numberOne < numberTwo) {
        return numberTwo;
    }
    else if (numberOne == numberTwo) {
        console.log("Größerer Wert konnte nicht zurückgegeben werden; beide Werte sind gleich.")
    }
    else {
        console.log("Kein Vergleich zweier Nummern möglich", numberOne, numberTwo)
    }
}