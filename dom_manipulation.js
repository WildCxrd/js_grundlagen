let title = document.getElementById("website_title");

console.dir(title);

title.innerHTML = "neuer Titel";

// document.getElementById("test_div").innerText = "<p>test</p>"

// document.getElementById("test_button").innerText = "klick mich";

document.getElementById("test_div").classList.add("green_bg");
document.getElementById("test_div").classList.remove("green_bg");
document.getElementById("test_div").classList.toggle("green_bg");

document.getElementById("test_input").setAttribute("type", "text");
document.getElementById("test_input").setAttribute("value", 123);

document.getElementById("test_input").value = 12345;

toggleDNone("6_2_p_tag");

function toggleDNone(id){
    document.getElementById(id).classList.toggle("d_none");
}