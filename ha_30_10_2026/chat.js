// #region messaging

function sendMessage() {
    const nameInput = document.getElementById("name_input");
    const messageInput = document.getElementById("message_input");
    const keepInputsCheckbox = document.getElementById("keep_inputs_checkbox");

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (validateInput(name, message)) {
        setInputErrorMessageDisplay(false);

        const messagesPanel = document.getElementById("messages_panel");
        messagesPanel.innerHTML += createMessageHtml(name, message);

        if (!keepInputsCheckbox.checked) {
            nameInput.value = "";
            messageInput.value = "";
        }
    }
    else {
        setInputErrorMessageDisplay(true);
    }
}

function validateInput(name, message) {
    return name.length >= 3 && message.length >= 5;
}

function setInputErrorMessageDisplay(shallDisplay) {
    const inputErrorMessage = document.getElementById("input_error_message");

    if (shallDisplay) {
        inputErrorMessage.classList.add("show");
    }
    else {
        inputErrorMessage.classList.remove("show");
    }
}

function createMessageHtml(name, message) {
    return `<p><strong>${name}</strong>: ${message}</p>`;
}

// #endregion messaging

// #region color scheme

let isLightMode = true;

function toggleColorScheme() {
    const htmlTag = document.getElementsByTagName("html")[0];

    if (isLightMode) {
        htmlTag.classList.add("dark-mode-scheme");
        htmlTag.classList.remove("light-mode-scheme");
        isLightMode = false;
    }
    else {
        htmlTag.classList.add("light-mode-scheme");
        htmlTag.classList.remove("dark-mode-scheme");
        isLightMode = true;
    }
}

//#endregion