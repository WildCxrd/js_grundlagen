function getBookTemplate(index, title){
    return `
        <div id="book_${index}" class="book_entry">
            <p>${title}</p>
            <button onclick="removeFromArray(${index})">Löschen</button>
        </div>
    `;
}