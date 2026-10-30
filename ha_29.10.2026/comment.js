function sendComment(){
    const comment = document.getElementById("comment-input").value.trim();
    const commentsPanel = document.getElementById("comments-panel");

    commentsPanel.innerHTML += createCommentElement(comment);
}

function createCommentElement(comment)
{
    return `<p>${comment}</p>`;
}