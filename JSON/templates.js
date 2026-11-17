function getProductTemplate(headline, price, category, propertiesTemplates) {
    return `
        <article class="productCard">
            <h2 id="productHeadline">${headline}</h2>
            <p id="price"><strong>Preis:</strong> ${price}</p>
            <p id="category"><strong>Kategorie:</strong> ${category}</p>
            <label for="propertiesList"><strong>Eigenschaften:</strong></label>
            <ul id="propertiesList">
            ${propertiesTemplates}
            </ul>
        </article>
    `;
}

function getProductPropertyTemplate(property) {
    return `
        <li>${property}</li>
    `;
}