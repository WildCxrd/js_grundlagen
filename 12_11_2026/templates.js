function getBookTemplate(index, title) {
    return `
        <div id="book_${index}" class="book_entry">
            <p>${title}</p>
            <button onclick="removeFromArray(${index})">Löschen</button>
             <button onclick="setAsRead(${index})">Gelesen</button>
        </div>
    `;
}

function getReadBookTemplate(index, title) {
    return `
        <div id="book_${index}" class="book_entry">
            <p>${title}</p>
            <button onclick="removeFromArray(${index})">Löschen</button>
            <button onclick="setAsUnread(${index})">Nicht gelesen</button>
        </div>
    `;
}