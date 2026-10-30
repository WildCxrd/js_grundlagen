console.log(formatToCurrency(24.79));

function formatToCurrency(decimalNumber) {
    return decimalNumber.toFixed(2).replace(".", ",") + "€";
}