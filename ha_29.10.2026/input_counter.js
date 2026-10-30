function updateCounterText(){
    const inputText = document.getElementById("input").value;
    const counterText = document.getElementById("counter-text");

    counterText.innerHTML = inputText.length;
}