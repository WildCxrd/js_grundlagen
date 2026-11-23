function getSquareDivTemplate(index){
    return `
        <div id="square_${index}" class="square" onclick="squareClicked(${index})">
            <p id="p_${index}">${index + 1}</p>
        </div>
    `;
}