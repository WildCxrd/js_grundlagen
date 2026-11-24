const menus = ["Döner", "Nudeln"];
const prices = [3.50, 8.00];
const amounts = [1, 3];


function getValueFromInput(id) {
    const menuInput = document.getElementById(id.toString());
    return menuInput.value;
}

function getMenuFromInput() {

    return getValueFromInput("menu").toString().trim();
}

function getPriceFromInput() {
    return Number(getValueFromInput("price"));
}

function onAddMenu() {
    const menu = getMenuFromInput();
    const menuIndex = getMenuIndex(menu);

    if (menuIndex >= 0) {
        amounts[menuIndex]++;
    } else {
        const price = getPriceFromInput();

        menus.push(menu);
        prices.push(price);
    }
}

function getMenuIndex(menu) {
    return menus.indexOf(menu);
}