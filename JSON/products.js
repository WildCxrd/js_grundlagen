function renderProducts() {
    const productsSection = document.getElementById("productsSection");
    let productTemplates = "";

    PRODUCTS.forEach(product => {
        const priceIneuros = getPriceInEuros(product.price);
        const propertiesTemplates = getPropertiesTemplates(product.properties);
        const productTemplate = getProductTemplate(product.name, priceIneuros, product.categoryName, propertiesTemplates);
        productTemplates += productTemplate;
    });

    productsSection.innerHTML = productTemplates;
}

function getPriceInEuros(price) {
    return `${price.toFixed(2).replace(".", ",")}€`;
}

function getPropertiesTemplates(properties) {
    let propertiesTemplates = "";

    properties.forEach(property => {
        const propertyTemplate = getProductPropertyTemplate(property);
        propertiesTemplates += propertyTemplate;
    });

    return propertiesTemplates;
}