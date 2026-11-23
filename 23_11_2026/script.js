const squareDivs = [];
const clickedSquares = [false, false, false, false, false];

function renderSquare() {
    const contentDiv = document.getElementById("content");

    for (let index = 0; index < 5; index++) {
        contentDiv.innerHTML += getSquareDivTemplate(index);
    }
}

function squareClicked(index) {
    const clickedDiv = document.getElementById(`square_${index}`);

    clickedSquares[index] = !clickedSquares[index];

    if (clickedSquares[index] === true) {
        clickedDiv.classList.add("red");
    } else {
        
    }
}